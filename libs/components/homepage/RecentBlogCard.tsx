import React, { useState } from 'react';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import { useRouter } from 'next/router';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';





const RecentBlogCard = () => {
  return (
    <>
      <div className='card'>
          <img className='image1' src="img/icons/Group.svg" alt="icon" />
          <img className='image2' src="img/icons/Group1.svg" alt="icon" />
          <img className='image3' src="img/icons/gulIcon.svg" alt="icon" />


        <div className={"rating"}>
          {'★'.repeat(5) + '☆'.repeat(5 - 5)}
        </div>

        <div className={"blog-info"}>
          <span>Sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam</span>
        </div>

        <div className='writer-info'>
          <img src={"/img/headerImages/defaultUser.svg"} alt="iui" />
          <span className='writer-name'>Jessica</span>
        </div>

      </div>
    </>
  );
};

export default RecentBlogCard;