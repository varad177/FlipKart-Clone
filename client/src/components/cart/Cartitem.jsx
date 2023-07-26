import styled from "@emotion/styled";
import { Box, Typography, Button } from "@mui/material";
import React from "react";
import ButtonGRP from "./ButtonGRP";
import { removedcart } from "../../redux/actions/cartAction";
import { useDispatch } from "react-redux";

const Component = styled(Box)`
  border-top: 1px solid #f0f0f0;
  border-radius: 0px;
  display: flex;
`;
const LeftComponent = styled(Box)`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

const SmallText = styled(Typography)`
  color: #878787;
  font-size: 14px;
  margin-top: 10px;
`;

const Cost = styled(Typography)`
  font-size: 18px;
  font-weight: 600;
`;

const MRP = styled(Typography)`
  color: #878787;
`;

const Discount = styled(Typography)`
  color: #388e3c;
`;

const Remove = styled(Button)`
  margin-top: 20px;
  font-size: 16px;
  coloe: black;
  font-weight: 600;
`;
const Cartitem = ({ item }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const dispatch = useDispatch();

  const removedItemfromCart = (id) => {
    dispatch(removedcart(id));
  };

  function addEllipses(text) {
    if (text.length > 50) {
      return text.substring(0, 50) + "...";
    }
  }

  return (
    <Component>
      <LeftComponent>
        <img style={{ height: 110, width: 110 }} src={item.url} alt="loading" />
        <ButtonGRP />
      </LeftComponent>
      <Box style={{ margin: 20 }}>
        <Typography>{addEllipses(item.title.longTitle)}</Typography>
        <SmallText>
          Seller:RetailNet{" "}
          <span>
            <img src={fassured} style={{ width: 50, marginLeft: 10 }} />
          </span>
        </SmallText>
        <Typography style={{ margin: "20px 0" }}>
          <Cost component="span">₹{item.price.cost}</Cost>&nbsp;&nbsp;&nbsp;
          <MRP component="span">
            <strike>₹{item.price.mrp}</strike>
          </MRP>
          &nbsp;&nbsp;&nbsp;
          <Discount component="span">{item.price.discount} off</Discount>
        </Typography>
        <Remove onClick={() => removedItemfromCart(item.id)}>Remove</Remove>
      </Box>
    </Component>
  );
};

export default Cartitem;
