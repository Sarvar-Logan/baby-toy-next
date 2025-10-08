import { Box, Stack, Tab, Tabs } from "@mui/material"
import { useState } from "react";
import React from "react";
import ProductCard from "./ProdcutCard";

const TopPick = () => {

  const [products, setProducts] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8
  ]);
  const [value, setValue] = React.useState<string>('bestSeller');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Stack className="top-pick">
        <Stack className="container">
          <Stack className={'info-box'}>
            <span>Top picks for your little ones</span>
          </Stack>
          <Box
            sx={{
              width: '100%',
              bgcolor: 'background.paper',
              marginTop: "48px",
            }}>
            <Tabs value={value} onChange={handleChange} centered
              sx={{
                "& .MuiTab-root": {
                  fontWeight: 400,
                  fontSize: '16px',
                  color: '#2D2D2D',
                  textTransform: 'none',
                  fontFamily: "Comfortaa",
                  lineHeight: "120%",
                  gap: "70px",
                  borderRadius: "30px",
                },

                "& .Mui-selected": {
                  background: "#F8EDF8",
                  width: "136px",
                  height: '48px',
                },
                "& .MuiTabs-indicator": {
                  display: "none",
                },
              }}>
              <Tab value={'bestSeller'} label="Best Seller" />
              <Tab value={'featured'} label="Featured" />
              <Tab value={'newArrivels'} label="New Arrivels" />
            </Tabs>
          </Box>

          <Stack className="card-box">
            {products.length === 0 ? (
              <Box className={"empty-list"}>Trends Empty</Box>

            ) : (
              <>
                {products.map((product, index) => {
                  return (
                    <ProductCard key={index} />
                  )

                })}
              </>
            )
            }
          </Stack>

        </Stack>
      </Stack >

    </>
  )
}


export default TopPick;