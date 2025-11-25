import { Box, Container, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "70vh",
      }}
      points="0,100 50,00, 100,100"
    >
      <Container maxWidth="xl">
        <Typography
          sx={{ color: "primary.main", mx: 2, p: 2, textAlign: "center" }}
          variant="h4"
        >
          All-in-One Website Health Solution
        </Typography>

      
        <Typography
          sx={{ mx: 2, p: 2, mb: 4, textAlign: "justify" }}
          variant="p"
        >At HealthCares, we believe that access to reliable and timely healthcare should be simple,
         safe, and stress-free. Our mission is to connect patients with trusted doctors, 
         provide easy appointment scheduling, and ensure that everyone receives the care they deserve — anytime,
          anywhere. <br />
          <br />
          We think something between 8 to 9 out of 10 patients walks out of the
          hospital satisfied, but typical web reviews make hospitals look much
          worse. This negative bias in hospital reviews is a big deal because
          people are walking into their care journey with a negative mindset
          about the care they are going to get, and that’s not good. The scale
          is just off because of the motivated complainers.
          <br />
          <br />
          Be sure to leave a review on 
 <strong>Health Care</strong> of any
          hospital you’ve visited, whether you’ve had a negative or a positive
          experience. Share your suggestions about writing hospital reviews in
          the comments below or message us on LINKEDIN{" "}
          <a
            href="https://www.linkedin.com/in/priya-bharti-389856282/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong> @Priya</strong>
          </a>
          .
          <br />
          <br />
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
