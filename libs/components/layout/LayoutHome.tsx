import { Stack } from "@mui/material";
import Head from "next/head";
import Top from "../Top";

const withLayoutMain = (Component: any) => {
  return (props: any) => {
    return (
      <>
        <Head>
          <title>Kids Shop</title>
        </Head>

        <Stack id="pc-wrap"> 
          <Stack id={"top"}>
            <Top/>
          </Stack>
          <Stack className="header-main">Header Main</Stack>

          <Stack id={"main"}>
            <Component {...props} />
          </Stack>

          <Stack id="footer">Footer</Stack>
        </Stack>
      </>
    );
  };
};

export default withLayoutMain;


// pc-wrap qilinsa bizning hamma componentizimiada ishlata olamiz 
