import { Box, Button, Link, Stack } from "@mui/material";
import Head from "next/head";
import Top from "../Top";
import Footer from "../Footer";

const withLayoutBasic = (Component: any) => {
  return (props: any) => {
    return (
      <>
        <Head>
          <title>Kids Shop</title>
        </Head>

        <Stack id="pc-wrap">
          <Stack sx={{background: "#ccf4ffff"}} id={"top"}>
            <Top />
          </Stack>
          <Stack className="header-basic">

          </Stack>

          <Stack id={"main"}>
            <Component {...props} />
          </Stack>

          <Stack id="footer">
            <Footer />
          </Stack>
        </Stack>
      </>
    );
  };
};
export default withLayoutBasic;
