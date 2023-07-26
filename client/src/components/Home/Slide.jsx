import React, { useEffect } from 'react'
import { Box, Button, Typography } from '@mui/material';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Divider from '@mui/material/Divider';
import CountDown from 'react-countdown'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { getProducts } from '../../redux/actions/productAction'






const responsived = {

    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
};


const Component = styled(Box)`
margin-top: 10px;
background: #FFFFFF;`

const Deal = styled(Box)`
    display: flex;    
    padding: 15px 20px;
`

const DealText = styled(Typography)`
    font-size: 22px;
    font-weight: 600;
    line-height: 32px;
    margin-right: 25px;
`

const Timer = styled(Box)`
    color: #7f7f7f;
    margin-left: 10px;
    display: flex;
    align-items: center;
`;

const ViewAllButton = styled(Button)`
    margin-left: auto;
    background-color: #2874f0;
    border-radius: 2px;
    font-size: 13px;
`;

const Image = styled('img')({
    width: 'auto',
    height: 150


})
const Text = styled(Typography)`
    font-size: 14px;
    margin-top: 5px
`

const Slide = ({ title, timer }) => {

    const dispatch = useDispatch();
    const { products } = useSelector(state => state.getProducts)
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])


    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const renderer = ({ hours, minutes, seconds }) => {
        return <Box variant="span"> {hours} : {minutes} : {seconds} Left </Box>;
    }
    return (
        <Component>
            <Deal>
                <DealText>{title}</DealText>
                {
                    timer && <Timer>
                        <img src={timerURL} style={{ width: 24 }} alt="timer" />
                        <CountDown renderer={renderer} date={Date.now() + 50400000} />
                    </Timer>

                }
                <ViewAllButton color='primary' variant='contained'>View All</ViewAllButton>
            </Deal>
            <Divider />
            <Carousel responsive={responsived}
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                slidesToSlide={1}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
            >

                {
                    products.map((p) => {
                        return <Box textAlign="center" style={{ padding: "25px 15px" }}>
                            <Link to={`product/${p.id}`} style={{ textDecoration: 'none' }}>
                                <Image src={p.url} alt="products" />
                                <Text style={{ fontWeight: 600, color: '#212121' }}>{p.title.shortTitle}</Text>
                                <Text style={{ color: 'green' }}>{p.discount}</Text>
                                <Text style={{ color: '#212121', opacity: '.6' }}>{p.tagline}</Text>
                            </Link>
                        </Box>

                    })
                }


            </Carousel>
        </Component>
    )
}


export default Slide
