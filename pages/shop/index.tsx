import { NextPage } from 'next';
import { Breadcrumbs, Button, Link, Menu, MenuItem, Pagination, Stack, Typography } from '@mui/material';
import React, { useState, MouseEvent, MouseEventHandler } from 'react';
import withLayoutBasic from '@/libs/components/layout/LayoutBasic';
import Filter from '@/libs/components/product/Filter';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { ProductCard } from '@/libs/components/product/productCard';





const Shop: NextPage = () => {


  // PAGINATION UCHUN 
  const [products] = useState(
    Array.from({ length: 28 }, (_, i) => `Product ${i + 1}`)
  ); // misol uchun 28 ta product
  const [page, setPage] = useState(1);

  const itemsPerPage = 9;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Hozirgi sahifa uchun productlar
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);



  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [sortingOpen, setSortingOpen] = useState(false);
  const [filterSortName, setFilterSortName] = useState('New');



  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    // window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  // SORT BY UCHUN 
  const sortingClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
    setSortingOpen(true);
  };

  const sortingCloseHandler = () => {
    setSortingOpen(false);
    setAnchorEl(null);
  };

  const sortingHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    // switch (e.currentTarget.id) {
    //   case 'new':
    //     setSearchFilter({ ...searchFilter, sort: 'createdAt', direction: Direction.ASC });
    //     setFilterSortName('New');
    //     break;
    //   case 'lowest':
    //     setSearchFilter({ ...searchFilter, sort: 'propertyPrice', direction: Direction.ASC });
    //     setFilterSortName('Lowest Price');
    //     break;
    //   case 'highest':
    //     setSearchFilter({ ...searchFilter, sort: 'propertyPrice', direction: Direction.DESC });
    //     setFilterSortName('Highest Price');
    // }
    setSortingOpen(false);
    setAnchorEl(null);
  };

  return (
    <div id="product-list-page" style={{ position: 'relative' }}>
      <Stack className="container">
        <div className="top" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link sx={{ fontSize: "22px", fontFamily: "Chalkboard SE" }} href="/">
              Home
            </Link>
            <Typography sx={{ fontSize: "22px", color: '#0F749D', fontFamily: "Chalkboard SE" }}>Shop</Typography>
          </ Breadcrumbs>
        </div>





        <Stack className={'products-page'}>

          <Stack className='filter-config'>
            <Filter />
          </Stack>

          <Stack className="main-config">

            <Stack className='sorting-config'>
              <Stack className='default-sorting'>
                <span className='sorting-title'>Sort by</span>
                <div>
                  <Button onClick={sortingClickHandler} endIcon={<KeyboardArrowDownRoundedIcon />}>
                    {filterSortName}
                  </Button>
                  <Menu anchorEl={anchorEl} open={sortingOpen} onClose={sortingCloseHandler} sx={{ paddingTop: '5px' }}>
                    <MenuItem
                      onClick={sortingHandler}
                      id={'new'}
                      disableRipple
                      sx={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
                    >
                      New
                    </MenuItem>
                    <MenuItem
                      onClick={sortingHandler}
                      id={'lowest'}
                      disableRipple
                      sx={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
                    >
                      Lowest Price
                    </MenuItem>
                    <MenuItem
                      onClick={sortingHandler}
                      id={'highest'}
                      disableRipple
                      sx={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
                    >
                      Highest Price
                    </MenuItem>
                  </Menu>
                </div>
              </Stack>
              {products.length !== 0 && (
                <Stack className="total-result">
                  <Typography>
                    Total 34 properties available
                  </Typography>
                </Stack>
              )}
            </Stack>


            <Stack className={'list-config'}>
              {products?.length === 0 ? (
                <div className={'no-data'}>
                  <img src="/img/icons/icoAlert.svg" alt="" />
                  <p>No Properties found!</p>
                </div>
              ) : (
                currentProducts.slice(0, 9).map((prodcut, index) => {
                  return <ProductCard key={index} />;
                })
              )}
            </Stack>
            <Stack className="pagination-config">
              {products.length !== 0 && (
                <Stack className="pagination-box">
                  <Pagination
                    count={totalPages}
                    page={page}
                    onChange={handlePageChange}
                    color="primary"
                    shape="rounded"
                  />
                </Stack>
              )}
            </Stack>
          </Stack>
        </Stack>
      </Stack>





    </div>
  );
};


export default withLayoutBasic(Shop)

