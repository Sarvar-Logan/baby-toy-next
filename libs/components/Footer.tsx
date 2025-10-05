import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Stack, Box, Link } from '@mui/material';
import moment from 'moment';

const Footer = () => {
  return (
    <Stack className={'footer-container'}>
      <Stack className={'main'}>
        <Stack className={'left'}>
          <Box component={'div'} className={'footer-box'}>
            <img src="/img/icons/logoNoBackground.png" alt="" className={'logo'} />
          </Box>
          <Box component={'div'} className={'footer-box'}>
            <span>total free customer care</span>
            <p>+82 10 4867 2909</p>
          </Box>
          <Box component={'div'} className={'footer-box'}>
            <span>nee live</span>
            <p>+82 10 4867 2909</p>
            <span>Support?</span>
          </Box>
          <Box component={'div'} className={'footer-box'}>
            <p>follow us on social media</p>
            <div className={'media-box'}>
              <Link href={"#"}><img  src="/img/icons/twitter.svg" alt="" /></Link>
              <Link href={"#"}><img  src="/img/icons/pintrest.svg" alt="" /></Link>
              <Link href={"#"}><img  src="/img/icons/Vector.svg" alt="" /></Link>
              <Link href={"#"}><img  src="/img/icons/facebook.svg" alt="" /></Link>
            </div>
          </Box>
        </Stack>
        <Stack className={'right'}>
          <Box component={'div'} className={'bottom'}>
            <div>
              <strong>Popular Search</strong>
              <span>Best Seller</span>
              <span>Stuffed toys</span>
            </div>
            <div>
              <strong>Quick Links</strong>
              <span>Terms of Use</span>
              <span>Privacy Policy</span>
              <span>Pricing Plans</span>
              <span>Our Services</span>
              <span>Contact Support</span>
              <span>FAQs</span>
            </div>
            <div>
              <strong>Discover</strong>
              <span>Playset toys</span>
              <span>Control toys</span>
              <span>Educational toys</span>
              <span>Econ Friendly toys</span>
              <span>Stuffed toys</span>
            </div>
          </Box>
        </Stack>
      </Stack>
      <Stack className={'second'}>
        <span>© Kidstoy - All rights reserved. Kidstoy {moment().year()}</span>
        <span>Privacy · Terms · Sitemap</span>
      </Stack>
    </Stack>
  );
};

export default Footer;







// import { Link, Stack } from "@mui/material"

// const Footer = () => {
//   return (
//     <>
//       <Stack className="footer-frame">
//         <Stack className="footer-items">
//           <Stack className="footer-left">
//             <Link href="/">
//               <img src="/img/icons/logoNoBackground.png" alt="" />
//             </Link>
//             <span>Crafting smiles with every toy, made for learning, fun, and growth</span>
//             <Stack className="socials">
//               <Link href={"#"}><img className="social" src="/img/icons/twitter.svg" alt="" /></Link>
//               <Link href={"#"}><img className="social" src="/img/icons/facebook.svg" alt="" /></Link>
//               <Link href={"#"}><img className="social" src="/img/icons/pintrest.svg" alt="" /></Link>
//               <Link href={"#"}><img className="social" src="/img/icons/Vector.svg" alt="" /></Link>
//             </Stack>
//           </Stack>

//           <Stack className="footer-middle">
//             <Stack className="info-texts">
//               <h4>My account</h4>
//               <span>Track my order</span>
//               <span>Terms of use</span>
//               <span>Wishlist</span>
//               <span>Submit Your feedback</span>
//             </Stack>
//           </Stack>

//           <Stack className="footer-right">
//             <Stack className="info-texts">
//               <h4>Customer sevice</h4>
//               <span>Monday to Friday</span>
//               <span>10am - 6pm( NewYork time)</span>
//               <span>Call us: 123-456-7868</span>
//               <span>Email us: info@example.com</span>
//             </Stack>
//           </Stack>
//         </Stack>

//       </Stack>
//     </>
//   )
// }

// export default Footer

