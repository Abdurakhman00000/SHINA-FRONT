"use client";
import React, { useCallback, useRef, useState, memo } from "react";
import scss from "./Hero_section.module.scss";
import Image from "next/image";
import {
  AiOutlineCaretRight,
  AiOutlineRight,
  AiOutlineCaretLeft,
} from "react-icons/ai";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const SLIDES = [
  {
    id: 1,
    title: "Праздичные\nскидки",
    buttonText: "Вперед на распродажу",
    image: "/assets/hero/sale-newyear-2024_index_web_2x.webp",
    background: "rgb(151, 82, 255)",
    altText: "Праздничные скидки баннер",
  },
  {
    id: 2,
    title: "Рейтинг IANT.KG:\n10 лучших смартфонов в \n 2024 году",
    buttonText: "Читать обзор",
    image: "/assets/hero/10-luchshikh_index_web_2x.webp",
    background: "rgb(24, 27, 112)",
    altText: "Топ 10 смартфонов баннер",
  },
  {
    id: 3,
    title: "Рейтинг\nтелевизоров 65",
    buttonText: "Читать обзор",
    image: "/assets/hero/kolbinreview3_index_web_2x.webp",
    background: "rgb(113, 53, 242)",
    altText: "Рейтинг телевизоров баннер",
  },
];

const SliderButton = memo(
  ({
    onClick,
    icon: Icon,
    label,
  }: {
    onClick: () => void;
    icon: React.ElementType;
    label: string;
  }) => (
    <button onClick={onClick} aria-label={label} className={scss.sliderButton}>
      <Icon aria-hidden="true" />
    </button>
  )
);

const Hero_section: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePrevClick = useCallback(() => {
    if (swiperRef.current && !isTransitioning) {
      setIsTransitioning(true);
      swiperRef.current.slidePrev();
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning]);

  const handleNextClick = useCallback(() => {
    if (swiperRef.current && !isTransitioning) {
      setIsTransitioning(true);
      swiperRef.current.slideNext();
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning]);

  const handleSwiper = useCallback((swiper: SwiperType) => {
    swiperRef.current = swiper;
  }, []);

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
    setIsTransitioning(true);
    setTimeout(() => setIsTransitioning(false), 500);
  }, []);

  return (
    <section className={scss.Main}>
      <div className={scss.container}>
        <div
          className={`${scss.content} ${
            isTransitioning ? scss.transitioning : ""
          }`}
          style={{ background: SLIDES[activeIndex].background }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            onSwiper={handleSwiper}
            onSlideChange={handleSlideChange}
            onTransitionStart={() => setIsTransitioning(true)}
            onTransitionEnd={() => setIsTransitioning(false)}
            loop
            effect="fade"
            fadeEffect={{
              crossFade: true,
            }}
            speed={500}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            mousewheel
            pagination={{
              el: ".swiper-pagination",
              type: "bullets",
              clickable: true,
              bulletActiveClass: scss.bulletActive,
              bulletClass: scss.bullet,
            }}
            className={`${scss.mySwiper} ${scss.swiperWrapper}`}
          >
            {SLIDES.map((slide) => (
              <SwiperSlide key={slide.id}>
                <article className={scss.hero_center}>
                  <div className={scss.textDiv}>
                    <h1>{slide.title}</h1>
                    <div className={scss.line_link}>
                      <a href="#" className={scss.link}>
                        <span>{slide.buttonText}</span>
                        <AiOutlineRight aria-hidden="true" />
                      </a>
                    </div>
                  </div>

                  <div className={scss.imageDiv}>
                    <Image
                      width={700}
                      height={500}
                      alt={slide.altText}
                      src={slide.image}
                      quality={75}
                      priority={slide.id === 1}
                      loading={slide.id === 1 ? "eager" : "lazy"}
                      className={scss.slideImage}
                    />
                  </div>
                </article>
              </SwiperSlide>
            ))}
            <div className={scss.paginationWrapper}>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
          <div className={scss.action}>
            <SliderButton
              onClick={handlePrevClick}
              icon={AiOutlineCaretLeft}
              label="Предыдущий слайд"
            />
            <SliderButton
              onClick={handleNextClick}
              icon={AiOutlineCaretRight}
              label="Следующий слайд"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero_section);
