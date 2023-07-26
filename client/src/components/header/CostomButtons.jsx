import { Box, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom'
import LoginDialog from '../login/LoginDialog';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import './btn.css'
import { useSelector } from 'react-redux';
const Wrapper = styled(Box)`
display : flex;
margin : 0 3% 0 auto;
& > button, & > p, & > div {
    margin-right : 40px;
    font-size : 16px;
    align-items: center;
},



`

const Container = styled(Link)(({ theme }) => ({
    display: 'flex',
    textDecoration: 'none',
    color: 'inherit'
}))
const LoginBtn = styled(Button)`
color : #2874f0;
background : #FFFFFF;
text-transform: none;
padding : 5px 40px;
border-radius : 2px;
box-shadoq : none;
font-weight ; 600;
height : 32px

`

function CostomButtons() {
   
 

    const [open, setOpen] = useState(false)
    const { account, setAccount } = useContext(DataContext)

    const openDialog = () => {
        setOpen(true)
    }

    const {cartItems} = useSelector(state => state.cart)
    return (
        <Wrapper className='resBtn' >
            {
                account ? <Profile account={account} setAccount={setAccount} /> :
                    <LoginBtn variant="contained" onClick={openDialog}>Login</LoginBtn>
            }
            <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
            <Typography style={{ marginTop: 3 }}>More</Typography>


            <Container to='/cart'>
            <Badge badgeContent={cartItems.length} color='secondary'>
            <ShoppingCartIcon />
            </Badge>
                <Typography  style={{ marginLeft: 10 }}>Card </Typography>
            </Container>

            <LoginDialog open={open} setOpen={setOpen} />


        </Wrapper>
    )
}

export default CostomButtons
