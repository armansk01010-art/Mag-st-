import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

export interface DustParticle {
  x0: number;
  y0: number;
  r: number;
  g: number;
  b: number;
  baseAlpha: number;
  size: number;
  startProgress: number;
  duration: number;
  vx: number;
  vy: number;
  swirlAmp: number;
  swirlFreq: number;
  phase: number;
  lift: number;
}

interface DustDisintegrationCanvasProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

export const DustDisintegrationCanvas: React.FC<DustDisintegrationCanvasProps> = ({ sectionRef }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<DustParticle[]>([]);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const rafIdRef = useRef<number | null>(null);
  const progressRef = useRef<number>(0);
  const isReducedMotionRef = useRef<boolean>(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    isReducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let destroyed = false;

    // Helper to extract RGB from computed color string
    const parseColor = (colorStr: string, fallback: { r: number; g: number; b: number }) => {
      if (colorStr.startsWith("rgb")) {
        const matches = colorStr.match(/\d+/g);
        if (matches && matches.length >= 3) {
          return {
            r: parseInt(matches[0], 10),
            g: parseInt(matches[1], 10),
            b: parseInt(matches[2], 10),
          };
        }
      }
      return fallback;
    };

    // Build particle system by sampling real ink pixels of text and decorative shapes
    const buildParticles = () => {
      if (!section || !canvas) return;
      const sectionRect = section.getBoundingClientRect();
      const width = sectionRect.width;
      const height = sectionRect.height;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const isMobile = window.innerWidth < 768;
      const wordStride = isMobile ? 4 : 2; // Stride for heading text
      const generalStride = isMobile ? 8 : 4; // Stride for paragraphs and cards

      const newParticles: DustParticle[] = [];

      // 1. SAMPLE HEADING WORDS LETTER-BY-LETTER
      const words = section.querySelectorAll<HTMLElement>(".dust-word");
      words.forEach((wordEl, wordIdx) => {
        const wordRect = wordEl.getBoundingClientRect();
        const relX = wordRect.left - sectionRect.left;
        const relY = wordRect.top - sectionRect.top;
        const w = Math.ceil(wordRect.width);
        const h = Math.ceil(wordRect.height);

        if (w <= 0 || h <= 0) return;

        const comp = window.getComputedStyle(wordEl);
        const color = parseColor(comp.color, { r: 38, g: 59, b: 50 });

        // Offscreen canvas to render text exactly as styled
        const offCanvas = document.createElement("canvas");
        offCanvas.width = w;
        offCanvas.height = h;
        const offCtx = offCanvas.getContext("2d");
        if (offCtx) {
          offCtx.font = `${comp.fontStyle} ${comp.fontWeight} ${comp.fontSize} ${comp.fontFamily}`;
          offCtx.fillStyle = comp.color;
          offCtx.textBaseline = "top";
          offCtx.fillText(wordEl.textContent || "", 0, 0);

          try {
            const imgData = offCtx.getImageData(0, 0, w, h);
            const data = imgData.data;

            // Sequential progress range for each word (starts 0.08 to 0.46)
            const wordStartP = 0.08 + (wordIdx / Math.max(1, words.length)) * 0.36;

            for (let py = 0; py < h; py += wordStride) {
              for (let px = 0; px < w; px += wordStride) {
                const idx = (py * w + px) * 4;
                const alpha = data[idx + 3];

                if (alpha > 45) {
                  // Internal jitter within the word so letters disintegrate progressively
                  const charNormalized = px / w;
                  const particleStart = wordStartP + charNormalized * 0.04 + (Math.random() * 0.02 - 0.01);

                  // Wind vector: blowing to the right (+X) and slightly upward (-Y)
                  const vx = 180 + Math.random() * 280;
                  const vy = -40 - Math.random() * 110;
                  const swirlAmp = 25 + Math.random() * 35;
                  const swirlFreq = 4 + Math.random() * 5;
                  const phase = Math.random() * Math.PI * 2;
                  const lift = 20 + Math.random() * 40;
                  const size = 1.2 + Math.random() * 1.8;

                  newParticles.push({
                    x0: relX + px,
                    y0: relY + py,
                    r: color.r,
                    g: color.g,
                    b: color.b,
                    baseAlpha: (alpha / 255) * (0.85 + Math.random() * 0.15),
                    size,
                    startProgress: particleStart,
                    duration: 0.38 + Math.random() * 0.15,
                    vx,
                    vy,
                    swirlAmp,
                    swirlFreq,
                    phase,
                    lift,
                  });
                }
              }
            }
          } catch (e) {
            // Fallback for sandboxed context
          }
        }
      });

      // 2. SAMPLE SECTION KICKER AND ACCENT LINE
      const kickers = section.querySelectorAll<HTMLElement>(".dust-kicker");
      kickers.forEach((kickerEl) => {
        const kRect = kickerEl.getBoundingClientRect();
        const relX = kRect.left - sectionRect.left;
        const relY = kRect.top - sectionRect.top;
        const w = Math.ceil(kRect.width);
        const h = Math.ceil(kRect.height);

        const comp = window.getComputedStyle(kickerEl);
        const color = parseColor(comp.color, { r: 182, g: 106, b: 75 });

        for (let py = 0; py < h; py += generalStride) {
          for (let px = 0; px < w; px += generalStride) {
            newParticles.push({
              x0: relX + px,
              y0: relY + py,
              r: color.r,
              g: color.g,
              b: color.b,
              baseAlpha: 0.75,
              size: 1.4,
              startProgress: 0.04 + (px / Math.max(1, w)) * 0.06,
              duration: 0.35,
              vx: 220 + Math.random() * 240,
              vy: -50 - Math.random() * 90,
              swirlAmp: 30,
              swirlFreq: 5,
              phase: Math.random() * Math.PI * 2,
              lift: 25,
            });
          }
        }
      });

      // 3. SAMPLE EDITORIAL PARAGRAPHS
      const paragraphs = section.querySelectorAll<HTMLElement>(".dust-paragraph");
      paragraphs.forEach((pEl, pIdx) => {
        const pRect = pEl.getBoundingClientRect();
        const relX = pRect.left - sectionRect.left;
        const relY = pRect.top - sectionRect.top;
        const w = pRect.width;
        const h = pRect.height;

        const pStart = 0.42 + pIdx * 0.12;
        const count = isMobile ? 220 : 600;

        for (let i = 0; i < count; i++) {
          const px = Math.random() * w;
          const py = Math.random() * h;
          const particleStart = pStart + (py / h) * 0.12 + Math.random() * 0.04;

          newParticles.push({
            x0: relX + px,
            y0: relY + py,
            r: 38,
            g: 59,
            b: 50,
            baseAlpha: 0.65 + Math.random() * 0.25,
            size: 1.0 + Math.random() * 1.5,
            startProgress: particleStart,
            duration: 0.36 + Math.random() * 0.12,
            vx: 190 + Math.random() * 260,
            vy: -45 - Math.random() * 100,
            swirlAmp: 28,
            swirlFreq: 4.5,
            phase: Math.random() * Math.PI * 2,
            lift: 20,
          });
        }
      });

      // 4. SAMPLE BRAND PILLARS & CARDS
      const cards = section.querySelectorAll<HTMLElement>(".dust-card");
      cards.forEach((cEl, cIdx) => {
        const cRect = cEl.getBoundingClientRect();
        const relX = cRect.left - sectionRect.left;
        const relY = cRect.top - sectionRect.top;
        const w = cRect.width;
        const h = cRect.height;

        const cStart = 0.58 + cIdx * 0.05;
        const count = isMobile ? 80 : 200;

        for (let i = 0; i < count; i++) {
          const px = Math.random() * w;
          const py = Math.random() * h;
          const isTerracotta = Math.random() > 0.65;

          newParticles.push({
            x0: relX + px,
            y0: relY + py,
            r: isTerracotta ? 182 : 38,
            g: isTerracotta ? 106 : 59,
            b: isTerracotta ? 75 : 50,
            baseAlpha: 0.6 + Math.random() * 0.3,
            size: 1.2 + Math.random() * 1.6,
            startProgress: cStart + Math.random() * 0.08,
            duration: 0.35 + Math.random() * 0.1,
            vx: 210 + Math.random() * 250,
            vy: -50 - Math.random() * 80,
            swirlAmp: 32,
            swirlFreq: 5,
            phase: Math.random() * Math.PI * 2,
            lift: 25,
          });
        }
      });

      // 5. SAMPLE DECORATIVE ACCENT OUTLINE
      const accent = section.querySelector<HTMLElement>(".dust-accent");
      if (accent) {
        const aRect = accent.getBoundingClientRect();
        const relX = aRect.left - sectionRect.left;
        const relY = aRect.top - sectionRect.top;
        const w = aRect.width;
        const h = aRect.height;
        const count = isMobile ? 100 : 260;

        for (let i = 0; i < count; i++) {
          let px = 0;
          let py = 0;
          const edge = Math.floor(Math.random() * 4);
          if (edge === 0) { px = Math.random() * w; py = 0; }
          else if (edge === 1) { px = w; py = Math.random() * h; }
          else if (edge === 2) { px = Math.random() * w; py = h; }
          else { px = 0; py = Math.random() * h; }

          newParticles.push({
            x0: relX + px,
            y0: relY + py,
            r: 182,
            g: 106,
            b: 75,
            baseAlpha: 0.75,
            size: 1.5 + Math.random() * 1.2,
            startProgress: 0.65 + Math.random() * 0.1,
            duration: 0.35,
            vx: 240 + Math.random() * 240,
            vy: -60 - Math.random() * 90,
            swirlAmp: 35,
            swirlFreq: 5,
            phase: Math.random() * Math.PI * 2,
            lift: 30,
          });
        }
      }

      particlesRef.current = newParticles;
    };

    let hasDisintegrated = false;

    // Reset element styles to default pristine state
    const resetStyles = () => {
      if (!section) return;
      const allDustElements = section.querySelectorAll<HTMLElement>(
        ".dust-word, .dust-kicker, .dust-paragraph, .dust-card, .dust-accent"
      );
      allDustElements.forEach((el) => {
        el.style.opacity = "";
        el.style.filter = "";
      });
    };

    // Render loop directly connected to scroll progress
    const render = () => {
      if (destroyed) return;

      const progress = progressRef.current;
      const particles = particlesRef.current;
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      // If progress is at the resting start, keep DOM clean and skip particle draw
      if (progress <= 0.008) {
        if (hasDisintegrated) {
          resetStyles();
          hasDisintegrated = false;
        }
        rafIdRef.current = requestAnimationFrame(render);
        return;
      }

      hasDisintegrated = true;

      // Draw active drifting dust particles
      if (particles.length > 0) {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          if (progress < p.startProgress) continue;

          const localP = (progress - p.startProgress) / p.duration;
          if (localP >= 1.0) continue; // Blown away and faded out

          // Cinematic physics: acceleration by wind
          const ease = localP * localP * (1.25 - 0.25 * localP);

          // Swirling eddy turbulence
          const curlX = Math.sin(p.phase + localP * p.swirlFreq) * p.swirlAmp * ease;
          const curlY = Math.cos(p.phase + localP * (p.swirlFreq * 0.8)) * (p.swirlAmp * 0.5) * ease;

          const currentX = p.x0 + p.vx * ease + curlX;
          const currentY = p.y0 + p.vy * ease + curlY - p.lift * ease * ease;

          // Realistic dispersion alpha: sharp release then gentle dispersal into the air
          let alpha = 0;
          if (localP < 0.12) {
            alpha = p.baseAlpha;
          } else {
            alpha = p.baseAlpha * Math.max(0, 1 - (localP - 0.12) / 0.88);
          }

          if (alpha <= 0.01) continue;

          // Subtle size pulsation as dust diffuses
          const currentSize = p.size * (1 + Math.sin(localP * Math.PI) * 0.25);

          ctx.fillStyle = `rgba(${p.r}, ${p.g}, ${p.b}, ${alpha})`;

          // Draw dust grain (circles for soft look, rect for tiny specks)
          if (currentSize <= 1.4) {
            ctx.fillRect(currentX - currentSize * 0.5, currentY - currentSize * 0.5, currentSize, currentSize);
          } else {
            ctx.beginPath();
            ctx.arc(currentX, currentY, currentSize * 0.5, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // Update DOM elements opacity synchronously with the disintegration wave
      if (section) {
        // Heading words
        const words = section.querySelectorAll<HTMLElement>(".dust-word");
        words.forEach((wordEl, idx) => {
          const wordStartP = 0.08 + (idx / Math.max(1, words.length)) * 0.36;
          if (progress < wordStartP) {
            wordEl.style.opacity = "1";
            wordEl.style.filter = "none";
          } else {
            // Disintegrating letter opacity
            const fade = Math.max(0, 1 - (progress - wordStartP) / 0.04);
            wordEl.style.opacity = `${fade}`;
            wordEl.style.filter = fade < 0.9 ? `blur(${(1 - fade) * 2.5}px)` : "none";
          }
        });

        // Kicker
        const kickers = section.querySelectorAll<HTMLElement>(".dust-kicker");
        kickers.forEach((k) => {
          const fade = Math.max(0, 1 - (progress - 0.04) / 0.06);
          k.style.opacity = `${fade}`;
        });

        // Paragraphs
        const paragraphs = section.querySelectorAll<HTMLElement>(".dust-paragraph");
        paragraphs.forEach((p, idx) => {
          const pStart = 0.42 + idx * 0.12;
          const fade = Math.max(0, 1 - (progress - pStart) / 0.1);
          p.style.opacity = `${fade}`;
        });

        // Cards & Pillars
        const cards = section.querySelectorAll<HTMLElement>(".dust-card");
        cards.forEach((c, idx) => {
          const cStart = 0.58 + idx * 0.05;
          const fade = Math.max(0, 1 - (progress - cStart) / 0.1);
          c.style.opacity = `${fade}`;
        });

        // Accent outline
        const accent = section.querySelector<HTMLElement>(".dust-accent");
        if (accent) {
          const fade = Math.max(0, 1 - (progress - 0.65) / 0.12);
          accent.style.opacity = `${fade}`;
        }
      }

      rafIdRef.current = requestAnimationFrame(render);
    };

    // Ensure custom fonts are loaded before sampling text dimensions
    document.fonts.ready.then(() => {
      if (destroyed) return;
      buildParticles();

      // Setup GSAP ScrollTrigger
      // Pins the section while scrolling up, progress directly controls the disintegration
      const isMobile = window.innerWidth < 768;
      const pinDistance = isMobile ? "+=80%" : "+=110%";

      const st = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: pinDistance,
        pin: true,
        pinSpacing: true,
        scrub: isReducedMotionRef.current ? false : 0.6,
        anticipatePin: 1,
        onEnter: () => {
          buildParticles();
        },
        onEnterBack: () => {
          buildParticles();
        },
        onUpdate: (self) => {
          progressRef.current = self.progress;
        },
      });

      scrollTriggerRef.current = st;

      // Start render loop
      rafIdRef.current = requestAnimationFrame(render);
    });

    const handleResize = () => {
      buildParticles();
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      destroyed = true;
      window.removeEventListener("resize", handleResize);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
    };
  }, [sectionRef]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-30 w-full h-full"
      aria-hidden="true"
    />
  );
};
