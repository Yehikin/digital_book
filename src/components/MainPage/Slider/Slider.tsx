import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import style from "./style.module.css";

import "swiper/css/bundle";
import "swiper/css/navigation";

interface SliderProps {
  images: { url: string; caption: string }[];
}

export default function Slider({ images }: SliderProps) {
  return (
    <Swiper
      className={style.slider}
      loop={images.length > 2}
      slidesPerView="auto"
      spaceBetween={20}
      navigation
      modules={[Navigation]}
    >
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <figure>
            <img src={img.url} alt={img.caption} />
            <figcaption>{img.caption}</figcaption>
          </figure>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
