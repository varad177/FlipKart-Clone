import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Cartitem from "./Cartitem";
import TotalBalance from "./TotalBalance";
import styled from "@emotion/styled";
import EmptyCart from "./EmptyCart";
import { Link, useNavigate } from "react-router-dom";


const Component = styled(Grid)(({ theme }) => ({
  padding: '30px 135px',
  display: 'flex',

  "@media (max-width: 900px)": {
    padding: '15px 0'
  }
}));

const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
`;

const BottomWrapper = styled(Box)`
    padding: 16px 22px;
    background: #fff;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
    border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    background: #fb641b;
    color: #fff;
    border-radius: 2px;
    width: 250px;
    height: 51px;
`;
const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: 15,
  '@media(max-width:900px)': {
      marginBottom: 15
  }
}));
const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const navigate = useNavigate()

  const onpayment = () =>{
    navigate('/pay')
  }
  return (
    <>
      {cartItems.length ? (
        <Component container>
          <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography>My cart ({cartItems.length})</Typography>
            </Header>
            {

              cartItems.map((item) => {

                return (

                  <Cartitem item={item}/>
                )
              })
            }
            <BottomWrapper>
            <Link to={'/pay'} style={{textDecoration:'none'}}>
            <StyledButton onClick={()=>onpayment}>Place Order</StyledButton>
            </Link>
            </BottomWrapper>
          </LeftComponent>

          <Grid lg={3} md={3} sm={12} xs={12}>
            <TotalBalance cartItems = {cartItems} />
          </Grid>

        </Component>
      ) : (
        <EmptyCart/>
      )}
    </>
  );
};

export default Cart;
