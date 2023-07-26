import React, { useEffect } from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import { Box } from '@mui/material'
import styled from '@emotion/styled'
import { getProducts } from '../../redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux'
import Slide from "./Slide";
import Midslide from './Midslide'
import MidSection from './MidSection'


const Component = styled(Box)`
padding :10px;
background : #F2F2F2; 

`


function Home() {
    const dispatch = useDispatch();

    const { products } = useSelector(state => state.getProducts)
    console.log("i am ",products);


    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return (
        <>
        <NavBar />
            <Component>
                <Banner  />
                <Midslide  title="Deals Of The Day" timer={true} />
                <MidSection />
                <Slide  title="Discount For You" timer={false} />
                <Slide  title="Top Selection" timer={false} />
                <Slide  title="Recommended Items" timer={false} />
                <Slide  title="Trending Offers" timer={false} /> 
                <Slide  title="Season's Top Pics" timer={false} />
                <Slide  title="Top Deals Of Accessories" timer={false} />
            </Component>
        </>
    )
}

export default Home
