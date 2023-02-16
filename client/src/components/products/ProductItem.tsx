import React from "react";
import { Products } from "../../../../types/type";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/material";

type Props = {
  item: Products;
};

export default function ProductItem({ item }: Props) {
  return (
    <Box style={{ width: "500px", margin: "0 auto", paddingBlock: "5rem" }}>
      <Card
        sx={{
          width: 500,
          margin: "0 auto",
          height: 600,
          // marginInline: "1rem",
          marginBlock: "1rem",
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {item.category.charAt(0)}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={item.category.toUpperCase()}
        />
        <CardMedia
          component="img"
          height="194"
          image={item.thumbnail}
          alt="Paella dish"
          sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
        />
        <CardContent>
          <Typography
            style={{ height: "100px" }}
            gutterBottom
            variant="h6"
            component="div"
            fontWeight={900}
            textAlign="center"
          >
            {item.title}
          </Typography>
          <Typography textAlign="center" paragraph>
            {item.price} $
          </Typography>
          <Typography paragraph>{item.description}</Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
}
