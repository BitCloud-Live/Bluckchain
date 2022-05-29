import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Box, { BoxProps } from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import { INFTCardProps } from "../../utils/types";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


export default function NFTCard(props: INFTCardProps) {
  const [isClick, setClick] = React.useState(false);

  function voteUpClick() {
    setClick(!isClick);
  }

  return (
    <Card  sx={{ maxWidth: 345 }} className={props.nftModel.isSelected ? "nft-card nft-selected" : "nft-card nft-not-selected"}>
      <CardHeader title={props.nftModel.name} subheader="September 14, 2016" />
      <CardMedia
        component="img"
        height="194"
        image={props.nftModel.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.nftModel.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
            width: '100%',
          }}
        >
          <Button variant="contained" endIcon={<SendIcon />}>{
            props.nftModel.isSelected ? "Send" : "Select"
          }</Button>
        </Box>
      </CardActions>
    </Card>
  );
}
