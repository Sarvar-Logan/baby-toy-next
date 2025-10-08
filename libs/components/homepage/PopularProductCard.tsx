import React, { useState } from 'react';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import { useRouter } from 'next/router';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';





const PopularProductCard = () => {
  return (
    <>
      <div className='card'>
        <div className={'sale-badge'}>SALE</div>

        <div className={"icons"}>
          <button className={"icon-btn"}>
            <FavoriteBorderOutlinedIcon className={"icon"} />
          </button>
          <button className={"icon-btn"}>
            <ShoppingCartOutlinedIcon className={"icon"} />
          </button>
        </div>

        <img src="img/products/image2.svg" alt="productImage" />

        <div className={"info"}>
          <div className={"title"}>Blocks shape-sorting Toy</div>

          <div className={"price"}>
            $29.00
            <span className="old-price">$39.00</span>
          </div>

          <div className={"rating"}>
            {'★'.repeat(5) + '☆'.repeat(5 - 5)}
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularProductCard;
