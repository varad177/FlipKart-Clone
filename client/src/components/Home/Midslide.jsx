import React from "react";
import Slide from "./Slide";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
// import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from "../../redux/actions/productAction";

const Component = styled(Box)`
    display: flex;
`

const LeftComponent = styled(Box)(({ theme }) => ({
    width: '83%',
    "@media (max-width: 900px)": {
        width: '100%'

    }
}))



const RightComponent = styled(Box)(({ theme }) => ({
    marginTop: '10px',
    background: '#FFFFFF',
    width: '17%',
    marginLeft: '10px',
    padding: '5px',
    textAlign: 'center',
    "@media (max-width: 900px)": {

        display: 'none'

    }


}))




const Midslide = ({ title, timer }) => {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    // const dispatch = useDispatch();
    // const { products } = useSelector(state => state.getProducts)
    // useEffect(() => {
    //     dispatch(getProducts())
    // }, [dispatch])

    return (
        <Component>
            <LeftComponent>
                <Slide title={title} timer={timer} />
            </LeftComponent>
            <RightComponent>
                <img src={adURL} alt="" style={{ width: " 217px" }} />
            </RightComponent>
        </Component>
    );
};

export default Midslide;
