import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Button, Stack } from '@mui/material';

const NewsLetter = () => {
  return (
    <>
      <div className='news-letter'>
        <div className='container'>
          <Stack className={'info-box'}>
            <span>Newsletter</span>
            <p>Get 15% off your first purchase! Plus, be the first to know about sales, new product launches, and exclusive offers! </p>
          </Stack>
          <Stack className='search-field'>
            <input placeholder='Enter you email' type="text" />
            <Button className="search-btn">Join</Button>
          </Stack>
        </div>
      </div>

    </>
  );
};

export default NewsLetter;
