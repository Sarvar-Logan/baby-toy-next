import React, { useState } from 'react';
import { Stack, Box, Link } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import NorthEastOutlinedIcon from '@mui/icons-material/NorthEastOutlined';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import RecentBlogCard from './RecentBlogCard';







const RecentBlog = () => {
  const [recentBlog, setRecentBlog] = useState<number[]>([
    1, 2, 3, 4,
  ]);



  return (
    <Stack className={'recent-blog'}>
      <Stack className={'container'}>
        <Stack className={'info-box'}>
          <span>Hear from Other Happy Parents</span>
          <p>Customer testimonials</p>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "flex-end",
            alignItems: "center",
            fontSize: "13px",
            marginTop: "80px"
          }}
        >
          <Link href="/shop">
            See other blogs
            <NorthEastOutlinedIcon sx={{ fontSize: "13px" }} />
          </Link>
        </Stack>

        <Stack className={'card-box'}>
          {recentBlog.length === 0 ? (
            <Box component={'div'} className={'empty-list'}>
              No recent Blogs
            </Box>
          ) : (
            <Swiper
              className="blog-swiper"
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={3}
              pagination={{
                clickable: true,
                el: '.pagination-blog',
              }}
              navigation={{
                nextEl: '.swiper-blog-next',
                prevEl: '.swiper-blog-prev',
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
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20
                }
              }}
            >
              {recentBlog.map((_, index) => {

                return (
                  <SwiperSlide key={index} className={'blog-swiper-slide'}>
                    <RecentBlogCard />
                  </SwiperSlide>
                );
              })}

            </Swiper>
          )}
        </Stack>
        <div className={'blog-pagination-box'}>
          <div className="swiper-blog-prev">
            <img src='img/icons/BackTo.svg' />
          </div>
          <div className="pagination-blog"></div>
          <div className="swiper-blog-next" >
            <img src='img/icons/Next page.svg' />
          </div>
        </div>
      </Stack>
    </Stack>
  );
};


export default RecentBlog;
