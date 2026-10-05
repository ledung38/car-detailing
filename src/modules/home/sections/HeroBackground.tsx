import { useState, useEffect } from "react";

export default function HeroBackground() {
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let idleId: number;

    const startLoading = () => {
      setLoadVideo(true);
      cleanup();
    };

    // Chỉ load khi trình duyệt rảnh tay sau tối thiểu 1.5s - 2s
    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(
        () => {
          timer = setTimeout(startLoading, 1500);
        },
        { timeout: 3000 },
      );
    } else {
      timer = setTimeout(startLoading, 1500);
    }

    const cleanup = () => {
      clearTimeout(timer);
      if (idleId && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      window.removeEventListener("scroll", startLoading);
      window.removeEventListener("touchstart", startLoading);
    };

    window.addEventListener("scroll", startLoading, {
      passive: true,
      once: true,
    });
    window.addEventListener("touchstart", startLoading, {
      passive: true,
      once: true,
    });

    return cleanup;
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden brightness-50 bg-gradient-to-b from-slate-900 to-slate-950">
      {/* 1. Ảnh Poster làm LCP anchor: Tải ngay lập tức để điểm LCP xanh lét */}
      <img
        src="/home_thumb.webp"
        alt="Sky Nice Car Detailing Sydney background"
        fetchPriority="high"
        decoding="async"
        className={`absolute inset-0 w-full h-full object-cover scale-110 transition-opacity duration-1000 ${
          loadVideo ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      />

      {/* 2. YouTube Iframe mount sau khi main-thread đã rảnh */}
      {loadVideo && (
        <iframe
          className="w-full h-full scale-125 object-cover pointer-events-none transition-opacity duration-700 animate-in fade-in"
          src="https://www.youtube-nocookie.com/embed/iM_xmlP0cLg?autoplay=1&mute=1&loop=1&playlist=iM_xmlP0cLg&controls=0&rel=0&modestbranding=1&showinfo=0&fs=0&iv_load_policy=3&color=white&playsinline=1&disablekb=1"
          title="Sky Nice Car Detailing Sydney | Mobile Car Wash & Detailing Service"
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          tabIndex={-1}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
