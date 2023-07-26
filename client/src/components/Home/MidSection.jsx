

import styled from '@emotion/styled';
// import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react'

// import { ThemeProvider } from "@mui/styles";

// import { createTheme, responsiveFontSizes } from '@mui/material/styles';
// let theme = createTheme();
// theme = responsiveFontSizes(theme);

const ImageURL = [
    'https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50',
    'https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg',
    'https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50'
];

const Wrapper = styled(Grid)`
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
`;

const Image = styled('img')(({ theme }) => (
    {
        marginTop: 10,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        
        "@media (max-width: 900px)": {
           
            objectFit: 'cover',
            height: 150
             
        }
    }
))


const MidSection = () => {
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

    return (
        <>
            <Wrapper lg={12} sm={12} md={12} xs={12} container>
                {
                    ImageURL.map((im) => {
                        return (
                            <Grid item lg={4} md={4} sm={12} xs={12}>
                                <img src={im} alt="products" style={{ width: "100%" }} />
                            </Grid>
                        )
                    })
                }

            </Wrapper>
            <Image src={url} alt="" srcset="" />
        </>
    )
}

export default MidSection
