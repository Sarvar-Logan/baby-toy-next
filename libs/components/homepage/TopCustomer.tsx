import React, { useState } from 'react';
import { Stack, Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import TopCustomerCard from './TopCustomerCard';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";







const TopCustomer = () => {
  const [topCustomer, setTopCustomer] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7
  ]);



  return (
    <Stack className={'top-customer'}>
      <Stack className={'container'}>
        <Stack className={'info-box'}>
          <span>Top customers</span>
          <p>Thanks for always being with us 🤩 </p>
        </Stack>
        <Stack className={'card-box'}>
          {topCustomer.length === 0 ? (
            <Box component={'div'} className={'empty-list'}>
              No data
            </Box>
          ) : (
            <Swiper
              className="customer-swiper"
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={5}
              pagination={{
                clickable: true,
                el: '.pagination-customer',
              }}
              navigation={{
                nextEl: '.swiper-customer-next',
                prevEl: '.swiper-customer-prev',
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 15
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 15
                },
                1300: {
                  slidesPerView: 5,
                  spaceBetween: 20
                }
              }}
            >
              {topCustomer.map((_, index) => {

                return (
                  <SwiperSlide key={index} className={'customer-swiper-slide'}>
                    <TopCustomerCard />
                  </SwiperSlide>
                );
              })}

            </Swiper>
          )}
        </Stack>
          <div className={'customer-pagination-box'}>
            <div className="swiper-customer-prev">
              <img src='/img/icons/BackTo.svg' />
            </div>
            <div className="pagination-customer"></div>
            <div className="swiper-customer-next" >
              <img src='/img/icons/Next page.svg' />
            </div>
          </div>
      </Stack>
    </Stack>
  );
};


export default TopCustomer;
