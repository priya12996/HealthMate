import {
  Avatar,
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
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { useParams } from "react-router-dom";
import useData from "../../../Hooks/useData";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const ServiceDetails = () => {
  const { servId } = useParams();
  const [service, setService] = useState(null);
  const mainData = useData();

  useEffect(() => {
    if (mainData && mainData.length > 0) {
      const allServices = mainData[0]; // assuming first element is array of services
      const servDetails = allServices.find(
        (service) => service.id === parseInt(servId)
      );
      setService(servDetails);
    }
  }, [mainData, servId]);

  if (!service) {
    return (
      <p style={{ textAlign: "center", marginTop: "50px", fontSize: "18px" }}>
        Loading...
      </p>
    );
  }

  return (
    <Box
      sx={{
        bgcolor: "#fce4ec",
        color: "primary.main",
        p: 3,
        mb: 3,
        textAlign: "center",
      }}
    >
      <Container maxWidth="xl">
        <Typography
          sx={{ mt: 2, mb: 2, fontWeight: 600 }}
          variant="h6"
          color="secondary"
        >
          Why Choose Our Medical
        </Typography>

        <Typography sx={{ mb: 8, fontWeight: 600 }} variant="h5">
          Breakthrough in Comprehensive, Flexible Care Delivery Models
        </Typography>

        {service && (
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={8} lg={6} key={service.id}>
              <Card
                sx={{
                  mx: "auto",
                  borderRadius: 3,
                  transition: "0.5s all ease-in-out",
                  ":hover": {
                    boxShadow: 12,
                  },
                  img: { transition: "0.5s all ease-in-out" },
                  ":hover img": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    width="100%"
                    height="400px"
                    image={service?.service_img}
                    alt={`Image of ${service.treatment}`}
                  />
                  <CardContent
                    sx={{ display: "flex", alignItems: "center", gap: 2 }}
                  >
                    <Avatar
                      alt="service icon"
                      src={service?.icon}
                      sx={{ width: 50, height: 50 }}
                    />
                    <Typography variant="h5" component="div">
                      Consult for {service.treatment}
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardActions>
                  <Typography
                    sx={{ p: 2 }}
                    align="justify"
                    gutterBottom
                    variant="body1"
                    component="p"
                  >
                    {service.description}
                  </Typography>
                </CardActions>

                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ p: 2 }}
                >
                  Consult fee: {service.price}
                </Typography>

                <HashLink smooth to="/appointment" className="text-style">
                  <Button
                    sx={{ mt: 2, mb: 2 }}
                    variant="contained"
                    color="secondary"
                    endIcon={<AddCircleIcon />}
                    fullWidth
                  >
                    Make an Appointment
                  </Button>
                </HashLink>
              </Card>
            </Grid>
          </Grid>
        )}

        <HashLink smooth to="/home#home" className="text-style">
          <Button
            variant="contained"
            color="primary"
            startIcon={<HomeIcon />}
            sx={{ mb: 5, mt: 5 }}
          >
            Back to Home
          </Button>
        </HashLink>
      </Container>
    </Box>
  );
};

export default ServiceDetails;
