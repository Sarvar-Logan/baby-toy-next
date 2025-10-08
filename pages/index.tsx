import Advertisement from "@/libs/components/homepage/Advertisment";
import Collection from "@/libs/components/homepage/Collection";
import PopularProducts from "@/libs/components/homepage/PopularProdcut";
import PopularProduct from "@/libs/components/homepage/PopularProdcut";
import TopPick from "@/libs/components/homepage/TopPick";
import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Stack className="home-page">
        <Collection />
        <TopPick/>
        <Advertisement/>
        <PopularProducts/>


        <Stack className="container">FromCustomers</Stack>

        <Stack className="container">Photos</Stack>

        <Stack className="container">TopUsers</Stack>

        <Stack className="container">Delivery</Stack>

        <Stack className="container">NewsLetter</Stack>

      </Stack>

    </>
  );
}

export default withLayoutMain(Home)
