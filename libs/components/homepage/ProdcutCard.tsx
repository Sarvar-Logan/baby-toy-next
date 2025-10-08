import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const ProductCard = () => {
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

        <img src="img/products/image 11.svg" alt="productImage" />

        <div className={"info"}>
          <div className={"title"}>Blocks shape-sorting Toy</div>

          <div className={"price"}>
            $29.00
            <span className="old-price">$39.00</span>
          </div>
          <div className='view'>
            <VisibilityOutlinedIcon className='icon' />
          </div>

          <div className={"rating"}>
            {'★'.repeat(5) + '☆'.repeat(5 - 5)}
          </div>
        </div>
      </div>

    </>
  );
};

export default ProductCard;
