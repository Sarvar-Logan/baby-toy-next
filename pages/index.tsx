import Advertisement from "@/libs/components/homepage/Advertisment";
import Collection from "@/libs/components/homepage/Collection";
import PopularProducts from "@/libs/components/homepage/PopularProdcut";
import RecentBlog from "@/libs/components/homepage/RecentBlogs";
import TopPick from "@/libs/components/homepage/TopPick";
import TopCustomer from "@/libs/components/homepage/TopCustomer";
import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";
import NewsLetter from "@/libs/components/homepage/NewsLetter";

const Home: NextPage = () => {
  return (
    <>
      <Stack className="home-page">
        <Collection />
        <TopPick/>
        <Advertisement/>
        <PopularProducts/>
        <RecentBlog/>
        <TopCustomer/>
        <NewsLetter/>

      </Stack>

    </>
  );
}

export default withLayoutMain(Home)
