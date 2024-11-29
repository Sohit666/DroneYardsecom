"use client";

import React from "react";
import { Container, Grid, Card, CardContent, CardMedia, Typography, Box, Divider } from "@mui/material";
import { styled } from "@mui/system";
import { Fade } from "@mui/material";



interface Client {
  name: string;
  logoUrl: string;
}

interface ClientCategory {
  [key: string]: Client[];
}

// Client categories
const clients: ClientCategory = {
  "Real Estate & Construction": [
    { name: "DLF", logoUrl: "https://via.placeholder.com/150" },
    { name: "Migsun", logoUrl: "https://via.placeholder.com/150" },
    { name: "Godrej", logoUrl: "https://via.placeholder.com/150" },
    { name: "M3M", logoUrl: "https://via.placeholder.com/150" },
    { name: "L&T", logoUrl: "https://via.placeholder.com/150" },
    { name: "Raheja Developers", logoUrl: "https://via.placeholder.com/150" },
    { name: "Supertech Limited", logoUrl: "https://via.placeholder.com/150" },
    { name: "Onefng", logoUrl: "https://via.placeholder.com/150" },
  ],
  "Technology & Digital Media": [
    { name: "Dawn Digital", logoUrl: "https://via.placeholder.com/150" },
    { name: "Neofoxmedia", logoUrl: "https://via.placeholder.com/150" },
    { name: "XO Visuals", logoUrl: "https://via.placeholder.com/150" },
  ],
  "Automotive": [
    { name: "BMW", logoUrl: "https://via.placeholder.com/150" },
    { name: "MERCEDES", logoUrl: "/client/mer.jpg" },
    { name: "AUDI", logoUrl: "https://via.placeholder.com/150" },
    { name: "HYUNDAI", logoUrl: "https://via.placeholder.com/150" },
    { name: "MOTOGP", logoUrl: "https://via.placeholder.com/150" },
    { name: "HERO", logoUrl: "https://via.placeholder.com/150" },
  ],
  "Educational Institutions": [
    { name: "IIT Mandi", logoUrl: "https://via.placeholder.com/150" },
  ],
  "Entertainment & Music": [
    { name: "Diljit Dosanjh", logoUrl: "https://via.placeholder.com/150" },
    { name: "King", logoUrl: "https://via.placeholder.com/150" },
    { name: "Raga", logoUrl: "https://via.placeholder.com/150" },
    { name: "Badshah", logoUrl: "https://via.placeholder.com/150" },
    { name: "B Praak", logoUrl: "https://via.placeholder.com/150" },
    { name: "Armaan Malik", logoUrl: "https://via.placeholder.com/150" },
  ],
  "Military & Defense": [
    { name: "ARMY", logoUrl: "https://via.placeholder.com/150" },
  ],
};

// Styled Components
const StyledCard = styled(Card)(({ }) => ({
  borderRadius: "16px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
  },
  backgroundColor: "white",
  overflow: "hidden",
}));

const StyledVideo = styled("video")(({ theme }) => ({
  width: "100%",
  height: "auto",
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(4),
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
}));



const CategoryTitle = styled(Typography)(({ theme }) => ({
  color: "black",
  fontWeight: "700",
  textTransform: "uppercase",
  marginBottom: theme.spacing(3),
  letterSpacing: "1.5px",
}));

const ClientsPage: React.FC = () => {
  return (
    <Container sx={{ mt: 4 }}>
      {/* Video Section */}
      <Box sx={{ position: "relative" }}>
        <StyledVideo autoPlay loop muted>
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </StyledVideo>
      </Box>

      {/* Header Section */}
      <Typography
        variant="h2"
        align="center"
        sx={{
          color: "text.primary",
          fontWeight: "bold",
          mb: 6,
          textTransform: "uppercase",
        }}
      >
        Our Clients
      </Typography>

      {/* Clients Grid */}
      {Object.keys(clients).map((category) => (
        <Box key={category} sx={{ mb: 8 }}>
          <CategoryTitle variant="h4">{category}</CategoryTitle>
          <Grid container spacing={4}>
            {clients[category].map((client, index) => (
              <Fade in={true} timeout={500 + index * 100} key={client.name}>
                <Grid item xs={12} sm={6} md={3}>
                  <StyledCard>
                    <img
                      src={client.logoUrl}
                      style={{ height: "150px", width: "100%", objectFit: "contain" }}
                      alt={`${client.name} logo`}
                    />
                    <CardContent>
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{
                          fontWeight: "600",
                          textAlign: "center",
                          mb: 1,
                        }}
                      >
                        {client.name}
                      </Typography>
                    </CardContent>
                  </StyledCard>
                </Grid>
              </Fade>
            ))}
          </Grid>
          <Divider sx={{ my: 6 }} />
        </Box>
      ))}
    </Container>
  );
};

export default ClientsPage;
