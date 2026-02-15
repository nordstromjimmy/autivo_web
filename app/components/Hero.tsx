"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // Your screenshot paths - update these with your actual image paths
  const screenshots = [
    "/screenshots/screenshot1.png",
    "/screenshots/screenshot2.png",
    "/screenshots/screenshot3.png",
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % screenshots.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [screenshots.length]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % screenshots.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + screenshots.length) % screenshots.length,
    );
  };

  const goToImage = (index: number) => {
    setCurrentImage(index);
  };

  const scrollToWaitlist = () => {
    setShowModal(false);
    const waitlistSection = document.getElementById("waitlist");
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/20">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column - Text */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Din bils <span className="text-gradient">digitala historia</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-xl">
              Håll koll på service, förbered besiktning och dokumentera varje
              mil. Öka din bils värde med verifierad servicehistorik.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowModal(true)}
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <span className="flex items-center gap-2 justify-center">
                  Ladda ner appen
                </span>
              </button>

              <a
                href="#features"
                className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 text-center"
              >
                Läs mer
              </a>
            </div>
          </div>

          {/* Right column - Phone mockup with carousel */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-[3rem] blur-3xl opacity-20" />

              {/* Phone frame */}
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Notch */}
                  <div className="h-6 bg-white relative z-10">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl" />
                  </div>
                  {/* Carousel container */}
                  <div className="relative aspect-[9/19.5] bg-white overflow-hidden">
                    {/* Screenshot images */}
                    <div className="relative w-full h-full">
                      {screenshots.map((screenshot, index) => (
                        <div
                          key={index}
                          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                            index === currentImage
                              ? "opacity-100 translate-x-0"
                              : index < currentImage
                                ? "opacity-0 -translate-x-full"
                                : "opacity-0 translate-x-full"
                          }`}
                        >
                          <Image
                            src={screenshot}
                            alt={`Autivo app screenshot ${index + 1}`}
                            fill
                            className="object-cover"
                            priority={index === 0}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Dot indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                      {screenshots.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToImage(index)}
                          className={`transition-all ${
                            index === currentImage
                              ? "w-6 h-2 bg-blue-500"
                              : "w-2 h-2 bg-white/50 hover:bg-white/80"
                          } rounded-full`}
                          aria-label={`Go to screenshot ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />

          {/* Modal */}
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 animate-fade-in-up">
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <svg
                className="w-5 h-5 text-slate-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Icon */}
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            {/* Content */}
            <h3
              className="text-2xl md:text-3xl font-bold text-center mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Kommer snart!
            </h3>

            <p className="text-slate-600 text-center mb-6">
              Autivo är under utveckling och lanseras inom kort. Gå med i
              väntelistan så får du veta när appen är redo att ladda ner!
            </p>

            {/* Launch estimate */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 mb-6 border border-blue-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Planerad lansering</p>
                  <p className="font-semibold text-slate-900">Q2 2026</p>
                </div>
              </div>
            </div>

            {/* Platforms */}
            <div className="flex items-center justify-center gap-4 mb-6 pb-6 border-b border-slate-200">
              <div className="flex items-center gap-2 text-slate-600">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span className="text-sm font-medium">iOS</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.523 15.3414c-.5511-.8484-1.6102-1.4051-2.6619-1.4051s-2.1108.5567-2.6619 1.4051c-.5511.8485-.5511 1.8933 0 2.7417.5511.8485 1.6102 1.4051 2.6619 1.4051s2.1108-.5566 2.6619-1.4051c.5511-.8484.5511-1.8932 0-2.7417M12.0005 0L1.6907 6v12l10.3098 6 10.3096-6V6M17.6604 18.6543c-.8654 1.3313-2.5313 2.1186-4.299 2.1186-1.7677 0-3.4336-.7873-4.299-2.1186-.8654-1.3314-.8654-2.9729 0-4.3043.8654-1.3313 2.5313-2.1186 4.299-2.1186 1.7677 0 3.4336.7873 4.299 2.1186.8654 1.3314.8654 2.9729 0 4.3043" />
                </svg>
                <span className="text-sm font-medium">Android</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <button
                onClick={scrollToWaitlist}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 cursor-pointer"
              >
                Gå med i väntelistan
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="w-full px-6 py-3 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200 transition-colors cursor-pointer"
              >
                Stäng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-slate-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
