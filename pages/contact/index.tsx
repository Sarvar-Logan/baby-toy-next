import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Breadcrumbs, Container, Link, Stack, Typography } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const Cotact: NextPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    comment: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form yuborish logikasi
    console.log('Form data:', formData);
  };
  return (
    <>
      <div className='contact'>
        <div className="container">
          <section className="contact-page">
            <div className="breadcrumb">
              <Breadcrumbs aria-label="breadcrumb">
                <Link sx={{ fontSize: "22px", fontFamily: "Chalkboard SE" }} href="/">
                  Home
                </Link>
                <Typography sx={{ fontSize: "22px", color: '#0F749D', fontFamily: "Chalkboard SE" }}>Shop</Typography>
              </ Breadcrumbs>
            </div>


            <h2 className="contact-title">Contact</h2>

            <div className="contact-info">
              <div className="info-card">
                <div className="icon">📞</div>
                <h4>Phone number</h4>
                <p>123-456-7868</p>
              </div>

              <div className="info-card">
                <div className="icon">✉️</div>
                <h4>Email</h4>
                <p>info@example.com</p>
              </div>

              <div className="info-card">
                <div className="icon">📍</div>
                <h4>Address place</h4>
                <p>
                  1930 marigold lane, way <br />
                  Miami, Florida USA
                </p>
              </div>
            </div>

            <div className="contact-body">
              <div className="map-container">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.793215936393!2d-80.197703!3d25.761681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b69f385a7b9d%3A0xf59a6b308f6b2624!2sMiami%2C%20FL%2C%20USA!5e0!3m2!1sen!2skr!4v1673983769914!5m2!1sen!2skr"
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="form-container">
                <h3>Contact Us</h3>
                <form>
                  <input type="text" placeholder="Your name" />
                  <input type="text" placeholder="Phone number" />
                  <input type="email" placeholder="Email address" />
                  <textarea placeholder="Write your comment here..." />
                  <button type="submit">Send</button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>

    </>
  );
}
export default withLayoutBasic(Cotact)