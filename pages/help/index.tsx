import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Breadcrumbs, Container, Link, Stack, Typography } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const faqs = [
  {
    question: "How will my order be delivered to me?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  { question: "What do I need to know?", answer: "Answer for this question goes here." },
  { question: "How will I know if order is placed successfully?", answer: "Answer for this question goes here." },
  { question: "How do I check the status of my order?", answer: "Answer for this question goes here." },
  { question: "Can I cancel my order?", answer: "Answer for this question goes here." },
];

const Help: NextPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className="help">
        <div className="container">
          <Stack>
            <Breadcrumbs aria-label="breadcrumb">
              <Link sx={{ fontSize: "22px", fontFamily: "Chalkboard SE" }} href="/">
                Home
              </Link>
              <Typography sx={{ fontSize: "22px", color: '#0F749D', fontFamily: "Chalkboard SE" }}>Shop</Typography>
            </ Breadcrumbs>
          </Stack>
          <h2 className="help-header">
            FAQ’S
          </h2>
          {faqs.map((faq, index) => (
            <div key={index} className="help-toggle">
              <button
                onClick={() => toggle(index)}
                className="toggle-btn"
              >
                <span>{faq.question}</span>
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && <p>{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
}
export default withLayoutBasic(Help)