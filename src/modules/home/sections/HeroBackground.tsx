import { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroBackground() {
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    const startLoading = () => {
      setLoadVideo(true);
      cleanup();
    };

    const cleanup = () => {
      window.removeEventListener("scroll", startLoading);
      window.removeEventListener("touchstart", startLoading);
      window.removeEventListener("pointerdown", startLoading);
      window.removeEventListener("mousemove", startLoading);
    };

    // Chỉ load iframe YouTube khi người dùng thực sự tương tác (cuộn trang, chạm màn hình, di chuột)
    // Loại bỏ hoàn toàn 873ms CPU blocking của YouTube player trong lúc trang tải ban đầu (giảm mạnh TBT)
    window.addEventListener("scroll", startLoading, {
      passive: true,
      once: true,
    });
    window.addEventListener("touchstart", startLoading, {
      passive: true,
      once: true,
    });
    window.addEventListener("pointerdown", startLoading, {
      passive: true,
      once: true,
    });
    window.addEventListener("mousemove", startLoading, {
      passive: true,
      once: true,
    });

    return cleanup;
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden brightness-50 bg-gradient-to-b from-slate-900 to-slate-950">
      {/* 1. Ảnh Poster làm LCP anchor: Tải ngay lập tức để điểm LCP tối ưu */}
      <Image
        src="/home_thumb.webp"
        alt="Sky Nice Car Detailing Sydney background"
        fill
        priority
        sizes="100vw"
        quality={85}
        className={`object-cover scale-110 transition-opacity duration-1000 ${
          loadVideo ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      />

      {/* 2. YouTube Iframe mount sau khi người dùng tương tác */}
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
