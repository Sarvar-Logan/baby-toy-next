import { Box, Stack } from "@mui/material"
import { useState } from "react";
import CollectionCard from "./CollectionCard";

const Collection = () => {

  return (
    <>
      <Stack className="collection">
        <Stack className="container">
          <Stack className={'info-box'}>
            <span>Find the Perfect Toy</span>
            <p>Our Collections</p>
            <p className="p-below">(click below to see the toys)</p>
          </Stack>

          <Stack className="card-box">
            <CollectionCard />
          </Stack>

        </Stack>
      </Stack>

    </>
  )
}


export default Collection;