import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Typography,

} from "@mui/material";
import React from "react";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import styled from "@emotion/styled";

const SmallText = styled(Box)`
  font-size: 14px;
  & > p {
    font-size: 14px;
    margin-top: 10px;
  }
`;
const StyleBg = styled(LocalOfferIcon)`
  margin-right: 10px;
  color: #00cc00;
  font-size: 15px;
`;

const Comp = styled(Box)(({ theme }) => ({
  marginLeft: '3rem',

  

  "@media (max-width: 900px)": {
    
    padding : '0 1rem 0 0' ,

},
 "@media (max-width: 1000px)": {
   
    padding : '0 1rem 0 0' ,

},

  
}))

const ColumnText = styled(TableRow)`
    font-size: 14px;
   
    & > td {
        font-size: 14px;
        margin-top: 10px;
    }
`

const TbL = styled(Table)`
width : unset;
`

const Timg = styled('img')(({theme})=>({
    width : '390px',
    "@media (max-width: 1000px)": {
       width : '290px'
    },
    

}))


const ProductDatail = ({ Product }) => {
    const fassured =
        "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
    return (
        <Comp>
            <Typography>{Product.title.longTitle}</Typography>
            <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }}>
                8 Rating & 1 review
                <Box component="span">
                    <img 
                        src={fassured}
                        alt="loading"
                        style={{ width: 77, marginLeft: 20 }}
                    />
                </Box>
            </Typography>
            <Typography>
                <span style={{ fontSize: 28 }}>₹{Product.price.cost}</span>
                &nbsp;&nbsp;&nbsp;
                <span style={{ color: "#878787" }}>
                    <strike>₹{Product.price.mrp}</strike>
                </span>
                &nbsp;&nbsp;&nbsp;
                <span style={{ color: "#388E3C" }}>{Product.price.discount} off</span>
            </Typography>

            <Typography>Available Offers</Typography>
            <SmallText>
                <Typography>
                    <StyleBg /> Bank Offer5% Cashback on Flipkart Axis Bank CardT&C
                </Typography>
                <Typography>
                    <StyleBg /> Special PriceGet extra 29% off (price inclusive of
                    cashback/coupon)T&C
                </Typography>
                <Typography>
                    <StyleBg /> Bank OfferFlat ₹1,250 Off on HDFC Bank Credit Card EMI
                    Trxns on orders priced between ₹15,000 to ₹39,999T&C
                </Typography>
                <Typography>
                    <StyleBg /> Bank OfferFlat ₹3,000 Off on HDFC Bank Credit Card EMI
                    Trxns on orders priced between ₹40,000 to ₹49,999T&C
                </Typography>
                <Typography>
                    <StyleBg /> Bank OfferFlat ₹4,000 Off on HDFC Bank Credit Card EMI
                    Trxns on orders of ₹50,000 and aboveT&C
                </Typography>
            </SmallText>

            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell>
                            <span style={{ color: '#2874f0' }}>SuperComNet</span>
                            <Typography>GST invoice available</Typography>
                            <Typography>View more sellers starting from ₹329</Typography>
                        </TableCell>
                    </ColumnText>
                    <TableRow>
                        <TableCell colSpan={2}>
                            <Timg src={adURL}  />
                        </TableCell>
                    </TableRow>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Description</TableCell>
                        <TableCell>{Product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
        </Comp>
    );
};

export default ProductDatail;
