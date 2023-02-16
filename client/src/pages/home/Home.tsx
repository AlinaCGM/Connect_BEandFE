import { Box } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import "./Home.css";
// import phoneHero from "../../assets/phone2.jpg";
import phone1 from "../../assets/ph1.jpg";
import phone2 from "../../assets/ph2.jpg";
import phone3 from "../../assets/ph3.jpg";
import phone4 from "../../assets/ph4.jpg";
import phone5 from "../../assets/ph5.jpg";
import phone6 from "../../assets/ph6.jpg";

const Root = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    flexWrap: "wrap",
    margin: "auto",
  },
  [theme.breakpoints.up("md")]: {
    flexWrap: "wrap",
    margin: "auto",
  },
}));
function Home() {
  return (
    <Box className="home-container">
      <Box className="hero-container"></Box>
      {/* <Typography style={{ color: "#b14848" }}>
        Get something different.
      </Typography> */}
      <Root>
        <Box
          className="image-box"
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            margin: "auto",
            justifyContent: "space-around",
            gap: 10,
          }}
          sx={{
            objectFit: "contain",
          }}
        >
          <CardMedia
            component="img"
            image={phone2}
            alt="green iguana"
            sx={{
              objectFit: "contain",
              width: {
                xs: 70,
                sm: 100,
                md: 150,
                lg: 300,
                xl: 350,
              },
            }}
          />
          <CardMedia
            component="img"
            image={phone3}
            alt="green iguana"
            sx={{
              objectFit: "contain",
              width: {
                xs: 70,
                sm: 100,
                md: 150,
                lg: 300,
                xl: 350,
              },
            }}
          />
          <CardMedia
            component="img"
            image={phone1}
            alt="green iguana"
            sx={{
              objectFit: "contain",
              width: {
                xs: 70,
                sm: 100,
                md: 150,
                lg: 300,
                xl: 350,
              },
            }}
          />
          <CardMedia
            component="img"
            image={phone4}
            alt="green iguana"
            sx={{
              objectFit: "contain",
              width: {
                xs: 70,
                sm: 100,
                md: 150,
                lg: 300,
                xl: 350,
              },
            }}
          />
          <CardMedia
            component="img"
            image={phone5}
            alt="green iguana"
            sx={{
              objectFit: "contain",
              width: {
                xs: 70,
                sm: 100,
                md: 150,
                lg: 300,
                xl: 350,
              },
            }}
          />
          <CardMedia
            component="img"
            image={phone6}
            alt="green iguana"
            sx={{
              objectFit: "contain",
              width: {
                xs: 70,
                sm: 100,
                md: 150,
                lg: 300,
                xl: 350,
              },
            }}
          />
        </Box>
      </Root>
    </Box>
  );
}

export default Home;
