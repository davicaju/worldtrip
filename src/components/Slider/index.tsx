import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./slider.module.scss";
import { Image, Text } from "@chakra-ui/react";

export function Slider() {
  return (
    <>
      <Text>Lets to Travel</Text>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={styles.swiper}
      >
        <SwiperSlide
          className={styles.swiperSlide}
          style={{ width: "1240px", height: "450px" }}
        >
          <Image src="/assets/europe.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide
          className={styles.swiperSlide}
          style={{ width: "1240px", height: "450px" }}
        >
          <Image src="/assets/europe.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide
          className={styles.swiperSlide}
          style={{ width: "1240px", height: "450px" }}
        >
          <Image src="/assets/europe.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide
          className={styles.swiperSlide}
          style={{ width: "1240px", height: "450px" }}
        >
          <Image src="/assets/europe.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide
          className={styles.swiperSlide}
          style={{ width: "1240px", height: "450px" }}
        >
          <Image src="/assets/europe.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide
          className={styles.swiperSlide}
          style={{ width: "1240px", height: "450px" }}
        >
          <Image src="/assets/europe.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
