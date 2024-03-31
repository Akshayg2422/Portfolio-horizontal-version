import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCube,
} from "swiper/modules";
import "swiper/swiper-bundle.css";

const slides = [
  {
    id: 1,
    image: "images/html.png",
    title: "Html",
  },
  {
    id: 2,
    image: "images/css.jpg",
    title: "Css",
  },
  {
    id: 3,
    image: "images/js.png",
    title: "Javascript",
  },
];

const Contacts = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      effect={"cube"}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
    >
      {slides.map((slide: any) => (
        <SwiperSlide key={slide.id}>
          <img
            width={"100%"}
            height={"100%"}
            src={slide.image}
            alt={slide.title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Contacts;
