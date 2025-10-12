import React, { useState } from 'react';
import { Stack, Typography, Checkbox, Box, Slider, Button } from '@mui/material';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import { useRouter } from 'next/router';
import { PopularProductCard } from './productCard';

const MAX = 500;
const MIN = 0;
const marks = [
  {
    value: MIN,
    label: '',
  },
  {
    value: MAX,
    label: '',
  },
];


const Filter = () => {
  // CATEGORY FILTER
  const device = useDeviceDetect();
  const router = useRouter();
  const [productCollection, setProductCollection] = useState([
    'Controller', 'Sensor', 'Battery', 'Display'
  ]);
  const [showMore, setShowMore] = useState<boolean>(false);


  // PRICE FILTER
  const [val, setVal] = React.useState<number>(MIN);
  const handleChange = (_: Event, newValue: number) => {
    setVal(newValue);
  };


  // POPULAR FILTER 
  const [products, setProducts] = useState([1, 2, 3])


  return (
    <>
      <Stack className={'filter-main'}>
        <Stack className={'filter-product'} mb={'30px'}>
          <Typography className={'title'}>Product Categoriees</Typography>
          {productCollection.map((product, index) => (
            <Stack className={'input-box'} key={index}>
              <Checkbox
                className="product-checkbox"
                color="default"
                size="small"
                value={index}
              />
              <label style={{ cursor: 'pointer' }}>
                <Typography className="product-type">Controll</Typography>
              </label>
            </Stack>
          ))}
        </Stack>
      </Stack>


      <Stack className='filter-second'>
        <Stack className={'price-product'}>
          <Typography className={'title'}>Price Range</Typography>
          <Box sx={{ width: 230 }}>
            <Slider
              marks={marks}
              step={1}
              value={val}
              valueLabelDisplay="auto"
              min={MIN}
              max={MAX}
              onChange={handleChange}
              sx={{ color: "#0F83B2" }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography
                variant="body2"
                onClick={() => setVal(MIN)}
                sx={{ cursor: 'pointer' }}
              >
                {MIN} $
              </Typography>
              <Typography
                variant="body2"
                onClick={() => setVal(MAX)}
                sx={{ cursor: 'pointer' }}
              >
                {MAX} $
              </Typography>
            </Box>
          </Box>
          <Button className='filter-btn'>Apply</Button>
        </Stack>
      </Stack>


      <Stack className='filter-popular'>
        <div className='header-name'>Popular products</div>
        {products.map((product, index) => {
          return (
            <PopularProductCard key={index} />
          )
        })}
      </Stack>

    </>


  );
};

export default Filter;
