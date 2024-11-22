"use client";

import React from "react";
import { Container, Grid, Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import { Fade } from "@mui/material";

const clients = [
  {
    id: 1,
    name: "Client A",
    description: "Description for Client A",
    logoUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Client B",
    description: "Description for Client B",
    logoUrl: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Client C",
    description: "Description for Client C",
    logoUrl: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Client D",
    description: "Description for Client D",
    logoUrl: "https://via.placeholder.com/150",
  },
];

// Styled Components
const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: "16px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 6px 30px rgba(0,0,0,0.15)",
  },
}));

const StyledVideo = styled("video")(({ theme }) => ({
  width: "100%",
  height: "auto",
  borderRadius: theme.shape.borderRadius,
  
  marginBottom: theme.spacing(4),
}));

const ClientsPage = () => {
  return (
    <Container sx={{ mt: 4 }}>
      {/* Video Section */}
      <Box sx={{ position: "relative" }}>
        <StyledVideo autoPlay loop muted>
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
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
      <Grid container spacing={4}>
        {clients.map((client, index) => (
          <Fade in={true} timeout={500 + index * 100} key={client.id}>
            <Grid item xs={12} sm={6} md={3}>
              <StyledCard>
                <CardMedia
                  component="img"
                  height="150"
                  image={client.logoUrl}
                  alt={`${client.name} logo`}
                  sx={{
                    objectFit: "contain",
                    p: 2,
                    backgroundColor: "#f9f9f9",
                  }}
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
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: "center" }}
                  >
                    {client.description}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          </Fade>
        ))}
      </Grid>
    </Container>
  );
};

export default ClientsPage;
