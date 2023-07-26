import React, { useState } from 'react'

import { AppBar, Toolbar, Box, Typography, IconButton } from "@mui/material";
import { styled } from '@mui/material/styles';
//components 
import Search from './Search';
import CostomButtons from './CostomButtons';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const StyledHeader = styled(AppBar)`
background : #2874f0;
height : 55px;
width : 100%;
margin : 0;

`

const Component = styled(Box)`
margin-left : 12%;
line-height : 0;
`
const Subheading = styled(Typography)`
font-size:10px;
font-style :italic;
`

const PlusImg = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4

})

const CostonBTNWrapper = styled(Box)(({ theme }) => ({
    margin: '0 5% 0 auto',
    "@media (max-width: 900px)": {
        display: 'none',
    }
}))
const Nav = styled(Box)(({ theme }) => ({
    width: '100vw',

}))

const MenyBTN = styled(IconButton)(({ theme }) => ({
    display: 'none',

    "@media (max-width: 900px)": {
        display: 'block',
    }
}))







function Header() {
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    const LogoURL = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const list = () => (
        <Box style={{width : 200}} onClick={handleClose}>
            <List>
                <ListItem button>
                    <CostomButtons />
                </ListItem>
            </List>
        </Box>
    )
    return (

        <Nav>
            <StyledHeader>
                <Toolbar style={{ minHeight: 55 }}>
                    <MenyBTN color='inherit' onClick={handleOpen}>
                        <MenuIcon />
                    </MenyBTN>
                    <Drawer open={open} onClose={handleClose}>
                    {list()}
                    </Drawer>
                    <Component>
                        <Link to={'/'} style={{ textDecoration: 'none' }}>
                            <img src={LogoURL} alt="Loading LOGO" style={{ width: 75 }} />
                            <Box style={{ display: 'flex' }}>
                                <Subheading style={{ color: 'white' }}>Explore&nbsp;
                                    <Box component="span" style={{ color: '#FFE500' }}>Plus</Box>
                                </Subheading>
                                <PlusImg src={subURL} alt="sublogo" />
                            </Box>
                        </Link>
                    </Component>
                    <Search />
                    <CostonBTNWrapper>
                        <CostomButtons />
                    </CostonBTNWrapper>
                </Toolbar>

            </StyledHeader>
        </Nav>

    )
}

export default Header
