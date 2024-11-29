"use client";

import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";
import { Fade } from "@mui/material";

// Interfaces
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
    { name: "DLF", logoUrl: "/client_images/1.png" },
    { name: "Migsun", logoUrl: "/client_images/2.png" },
    { name: "Godrej", logoUrl: "/client_images/3.png" },
    { name: "M3M", logoUrl: "/client_images/4.png" },
    { name: "L&T", logoUrl: "/client_images/6.png" },
    { name: "Raheja Developers", logoUrl: "/client_images/5.png" },
    { name: "Supertech Limited", logoUrl: "/client_images/7.png" },
    { name: "Onefng", logoUrl: "/client_images/8.png" },
  ],
  "Technology & Digital Media": [
    { name: "Neofoxmedia", logoUrl: "/client_images/9.png" },
    { name: "XO Visuals", logoUrl: "/client_images/10.png" },
  ],
  "Automotive": [
    { name: "BMW", logoUrl: "/client_images/11.png" },
    { name: "MERCEDES", logoUrl: "/client_images/12.png" },
    { name: "AUDI", logoUrl: "/client_images/13.png" },
    { name: "HYUNDAI", logoUrl: "/client_images/16.png" },
    { name: "MOTOGP", logoUrl: "/client_images/14.png" },
    { name: "HERO", logoUrl: "/client_images/15.png" },
  ],
  "Educational Institutions": [{ name: "IIT Mandi", logoUrl: "/client_images/17.png" }],
  "Entertainment & Music": [
    { name: "Diljit Dosanjh", logoUrl: "/client_images/18.png" },
    { name: "King", logoUrl: "/client_images/20.png" },
    { name: "Raga", logoUrl: "/client_images/19.png" },
    { name: "Badshah", logoUrl: "/client_images/25.png" },
    { name: "B Praak", logoUrl: "/client_images/21.png" },
    { name: "Armaan Malik", logoUrl: "/client_images/22.png" },
  ],
  "Military & Defense": [{ name: "ARMY", logoUrl: "/client_images/23.png" }],
};

// Styled Components
const StyledCard = styled(Card)(({  }) => ({
  borderRadius: "16px",
  transition: "transform 0.4s ease, box-shadow 0.4s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },
  backgroundColor: 'white',
  overflow: "hidden",
}));

const PageContainer = styled(Container)({
  background: "linear-gradient(to bottom, #f0f4f8, #ffffff)",
  minHeight: "100vh",
  paddingTop: "4rem",
  paddingBottom: "4rem",
});

const HeaderTitle = styled(Typography)(({  }) => ({
  fontWeight: 800,
  textTransform: "uppercase",
  textAlign: "center",
  background: `linear-gradient(90deg, `,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontSize: "2.5rem",
  animation: "fadeIn 2s ease-in-out",
  "@keyframes fadeIn": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
}));

const CategoryTitle = styled(Typography)(({ theme }) => ({
  color: "black",
  fontWeight: "700",
  textTransform: "uppercase",
  marginBottom: theme.spacing(3),
  letterSpacing: "1.5px",
}));

// Component
const ClientsPage: React.FC = () => {
  return (
    <PageContainer>
     

      {/* Header Section */}
      <HeaderTitle variant="h2" sx={{ mb: 6 }}>
        Our Clients
      </HeaderTitle>

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
                      style={{
                        height: "150px",
                        width: "100%",
                        objectFit: "contain",
                        padding: "16px",
                      }}
                      alt={`${client.name} logo`}
                    />
                    <CardContent>
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{
                          fontWeight: "600",
                          textAlign: "center",
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
    </PageContainer>
  );
};

export default ClientsPage;
