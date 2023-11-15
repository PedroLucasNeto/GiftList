import { Swiper, SwiperSlide } from 'swiper/react';
import { details } from '../types/Details';

const ServiceDetails = () => {
  return (
    <div className='w-full min-h-screen'>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {details.map((detail, index) => (
          <SwiperSlide key={index}>
            <div className='bg-blue'>
              <h2>{detail.title}</h2>
              <p>{detail.content}</p>
              <img src={detail.img} alt={detail.title} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceDetails;
