import { useLanguage } from '@/contexts/LanguageContext';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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

const Skiper52 = () => {
  const { t } = useLanguage();
  return (
    <div className="w-full flex flex-col items-center justify-center bg-[#f5f4f3] py-8">
      <h2 className="text-2xl md:text-3xl font-serif font-light text-[#2E2E2E] mb-8 text-center">
        {t('gallery.intro')}
      </h2>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        spaceBetween={24}
        slidesPerView={1}
        className="w-full max-w-2xl md:max-w-4xl lg:max-w-6xl"
      >
        {images.map((image, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-3xl overflow-hidden shadow-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover object-center select-none"
                draggable={false}
              />
              <div className="absolute bottom-4 right-4 bg-black/50 text-white text-xs px-3 py-1 rounded-full font-mono tracking-widest">
                {image.code}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export { Skiper52 };
