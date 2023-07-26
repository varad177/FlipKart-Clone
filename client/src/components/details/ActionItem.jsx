import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { addcart } from "../../redux/actions/cartAction";

const LeftContainer = styled(Box)(({ theme }) => ({
    Width: "40%",
    padding: "20px 0 0 40px",
    "@media (max-width: 900px)": {
        padding: "0 0 0 10px",
        Width: "100%",
    }

}));

const ImgRes = styled(Box)(({ theme }) => ({
    "@media (max-width: 900px)": {
        display: 'flex',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center',


    },
}));

const ResBTN = styled(Box)(({ theme }) => ({

    "@media (max-width: 900px)": {
        display: 'flex',
        width: '100vw',
        padding: '4px',
        justifyContent: 'center',
        alignItems: 'center',
        // flexDirection : 'column',
        gap: '1rem',




    },
}));



const Image = styled("img")({
    padding: "15px",

});

const StyBTN = styled(Button)`
  width: 46%;
  border-radius: 2px;
  height: 50px;
  color: #fff;
`;

const ActionItem = ({ Product }) => {

    const { id } = Product;

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [quantity, setQuantity] = useState(1)
    const addtocart = () => {
        dispatch(addcart(id, quantity))

        navigate('/cart')
    }

    return (
        <LeftContainer>
            <Box
                style={{
                    padding: "15px 20px",
                    border: " 1px solid #f0f0f0",
                    width: "90%",
                }}
            >
                <ImgRes>
                    <Image src={Product.detailUrl} alt="" />
                </ImgRes>
            </Box>
            <ResBTN>
                <StyBTN
                    style={{ marginRight: 10, background: "#ff9f00" }}
                    variant="contained"
                    onClick={addtocart}
                >
                    <ShoppingCartIcon />
                    Add To Cart
                </StyBTN>
                <Link to={'/pay'} style={{textDecoration:'none'}}>
                    <StyBTN style={{ background: "#fb641b" }} variant="contained">
                        <FlashOnIcon />
                        Buy Now
                    </StyBTN>
                </Link>
            </ResBTN>
        </LeftContainer>
    );
};

export default ActionItem;
