import React, { useState } from 'react';
import { Stack, Box, Link } from '@mui/material';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import PopularProductCard from './PopularProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import NorthEastOutlinedIcon from '@mui/icons-material/NorthEastOutlined';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Tune } from '@mui/icons-material';







const PopularProducts = () => {
  const [popularProducts, setPopularProducts] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7
  ]);



  return (
    <Stack className={'popular-products'}>
      <Stack className={'container'}>
        <Stack className={'info-box'}>
          <span>Customer Loves</span>
          <p>Popular product</p>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "flex-end",
            alignItems: "center",
            fontSize: "13px",
            marginTop: "80px",
            color: "#f5f5f5"
          }}
        >
          <Link href="/community">
            See other blogs
            <NorthEastOutlinedIcon sx={{ fontSize: "13px" }} />
          </Link>
        </Stack>

        <Stack className={'card-box'}>
          {popularProducts.length === 0 ? (
            <Box component={'div'} className={'empty-list'}>
              Trends Empty
            </Box>
          ) : (
            <Swiper
              className="product-swiper"
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={4}
              pagination={{
                clickable: true,
                el: '.swiper-pagination',
              }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              autoplay={{
                delay: 3000,
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
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20
                }
              }}
            >
              {popularProducts.map((_, index) => {

                return (
                  <SwiperSlide key={index} className={'prodcut-swiper-slide'}>
                    <PopularProductCard />
                  </SwiperSlide>
                );
              })}

            </Swiper>
          )}
        </Stack>
        <div className={'pagination-box'}>
          <div className="swiper-button-prev">
            <img src='img/icons/BackTo.svg' />
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next" >
            <img src='img/icons/Next page.svg' />
          </div>

        </div>
      </Stack>
    </Stack>
  );
};


export default PopularProducts;
