import { Box, Link, Stack } from "@mui/material"
import { useState } from "react";

const CollectionCard = () => {

  return (
    <>
      <Stack className="collection-card">

        <Stack className="card">
          <Link href="/shop" className="card-image">
              <img src="/img/headerImages/Isolation_Mode.svg" alt="card image"/>
          </Link>
          <p>Playset</p>
        </Stack>
        <Stack className="card">
          <Link href="/shop">
              <img src="/img/headerImages/Isolation_Mode1.svg" alt="card image"/>
          </Link>
          <p>Control toys</p>
        </Stack>
        <Stack className="card">
          <Link href="/shop" className="card-image">
              <img src="/img/headerImages/Isolation_Mode2.svg"alt="card image"/>
          </Link>
          <p>Educational Toys</p>
        </Stack>
        <Stack className="card">
          <Link href="/shop" className="card-image">
              <img src="/img/headerImages/Isolation_Mode3.svg" alt="card image"/>
          </Link>
          <p>Eco- Friendly Toys</p>
        </Stack>
        <Stack className="card">
          <Link href="/shop" className="card-image">
              <img src="/img/headerImages/Group.svg" alt="card image"/>
          </Link>
          <p>Stuffed Toys</p>
        </Stack>
   

      </Stack>

    </>
  )
}


export default CollectionCard;