import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { cn } from "@/lib/utils";

const Skiper52 = () => {
  const images = [
    { src: "/images/2.jpeg", alt: "Chef David - Galería 1", code: "#1" },
    { src: "/images/plate4.jpeg", alt: "Chef David - Galería 2", code: "#2" },
    { src: "/images/4.jpeg", alt: "Chef David - Galería 3", code: "#3" },
    { src: "/images/plate.jpeg", alt: "Chef David - Galería 4", code: "#4" },
    { src: "/images/6.jpeg", alt: "Chef David - Galería 5", code: "#5" },
    { src: "/images/11.jpeg", alt: "Chef David - Galería 6", code: "#6" },
    { src: "/images/plate2.jpeg", alt: "Chef David - Galería 7", code: "#7" },
    { src: "/images/9.jpeg", alt: "Chef David - Galería 8", code: "#8" },
    { src: "/images/10.jpeg", alt: "Chef David - Galería 9", code: "#9" },
    { src: "/images/13.jpeg", alt: "Chef David - Galería 10", code: "#10" },
  ];
  return (
    <div className="flex flex-col items-center h-full w-full justify-center overflow-hidden bg-[#f5f4f3]">
      {/* Logo eliminado de la galería */}
      <HoverExpand_001 className="" images={images} />
    </div>
  );
};

const HoverExpand_001 = ({ images, className, }: { images: { src: string; alt: string; code: string }[]; className?: string; }) => {
  const [activeImage, setActiveImage] = useState<number | null>(1);
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      className={cn("relative w-full max-w-6xl px-2 sm:px-5", className)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        {/* Mobile: horizontal scroll, Desktop: flex row */}
        <div className="flex w-full items-center justify-center gap-1 overflow-x-auto scrollbar-hide sm:scrollbar-default sm:overflow-x-visible py-2 sm:py-0">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={cn(
                "relative cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl flex-shrink-0 transition-all duration-300",
                // Mobile: smaller, Desktop: original
                activeImage === index
                  ? "w-[70vw] h-[60vw] max-w-xs max-h-80 sm:w-[24rem] sm:h-[24rem]"
                  : "w-[18vw] h-[60vw] max-w-[60px] max-h-80 sm:w-[5rem] sm:h-[24rem]"
              )}
              initial={false}
              animate={{}}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={() => setActiveImage(index)}
              onHoverStart={() => setActiveImage(index)}
            >
              <AnimatePresence>
                {activeImage === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute h-full w-full bg-gradient-to-t from-black/40 to-transparent"
                  />
                )}
              </AnimatePresence>
              <AnimatePresence>
                {activeImage === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute flex h-full w-full flex-col items-end justify-end p-2 sm:p-4"
                  >
                    <p className="text-left text-xs text-white/70 drop-shadow-sm">{image.code}</p>
                  </motion.div>
                )}
              </AnimatePresence>
              <img src={image.src} className="size-full object-cover select-none" alt={image.alt} draggable={false} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export { Skiper52 };
