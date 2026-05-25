
import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { HashLink } from "react-router-hash-link";
import PeriodTracker from "../PeriodTracker/PeriodTracker.js";

import useData from "../../Hooks/useData";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

const Services = () => {
  const services = useData();

  // 🔥 NEW STATE (for opening description)
  const [openIndex, setOpenIndex] = useState(null);

  // 🔥 TOGGLE FUNCTION
  const handleToggle = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    
    <Box
      id="services"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        bgcolor: "#fce4ec",
        color: "primary.main",
        p: 2,
        mb: 2,
        mt: 6,
        textAlign: "center",
      }}
    >
      {services[0]?.length > 0 ? (
        <Container maxWidth="xl">
          <Typography sx={{ mt: 2, mb: 2, fontWeight: 600 }} variant="h6">
            Our Services
          </Typography>
          <Box mt={5}>
  <Typography variant="h4" textAlign="center" mb={3}>
    Women's Health 🌸
  </Typography>

  <PeriodTracker />
</Box>

          <Grid container spacing={3} justifyContent="center">
            {services[0].map((service) => (
              <Grid key={service.id} item xs={12} sm={6} md={6} lg={4}>
                <Card
                  sx={{
                    mx: "auto",
                    maxWidth: 345,
                    transition: "0.5s",
                    ":hover": {
                      boxShadow: 10,
                      color: "#e91e63",
                    },
                    ":hover img": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="240"
                      image={service.service_img}
                      alt="service"
                    />
                    <CardContent sx={{ textAlign: "center" }}>
                      <CardMedia
                        component="img"
                        sx={{ width: 40, mb: 1 }}
                        image={service.icon}
                        alt="icon"
                      />
                      <Typography gutterBottom variant="h5">
                        Consult for {service.treatment}
                      </Typography>

                      {/* 🔥 DESCRIPTION SHOW */}
                      {openIndex === service.id && (
                        <Typography
                          variant="body2"
                          sx={{ mt: 2, color: "text.secondary" }}
                        >
                          {service.description ||
                            `This department specializes in ${service.treatment} related treatments. 
                            It provides expert consultation, diagnosis, and advanced medical care. 
                            Our experienced doctors ensure proper guidance, medication, and support 
                            for patients to maintain a healthy life. Regular checkups and early 
                            detection help prevent serious issues.`}
                        </Typography>
                      )}
                    </CardContent>
                  </CardActionArea>

                  <CardActions sx={{ justifyContent: "center" }}>
                    <Button
                      onClick={() => handleToggle(service.id)}
                      variant="contained"
                      startIcon={<ReadMoreIcon />}
                    >
                      {openIndex === service.id
                        ? "Hide Details"
                        : "See More Details"}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          <HashLink smooth to="/home#home" className="text-style">
            <Button
              variant="contained"
              startIcon={<HomeIcon />}
              sx={{ mt: 5 }}
            >
              Back to Home
            </Button>
          </HashLink>
        </Container>
      ) : (
        <LoadingScreen />
      )}
    </Box>
  );
};

export default Services;