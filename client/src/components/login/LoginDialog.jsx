import React, { useContext, useState } from 'react';
import styled from '@emotion/styled'
import { Box, Button, Dialog, TextField, Typography } from '@mui/material'
import { authentiCateLogin, authentiCateSignUp } from '../../service/api';
import { DataContext } from '../../context/DataProvider';





const Component = styled(Box)`
height : 70vh;
width : 90vh;


`

const Image = styled(Box)`
background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
width: 28%;
height: 83%;
padding: 45px 35px;
& > p, & > h5 {
    color: #FFFFFF;
    font-weight: 600
}
`

const Wrapper = styled(Box)`
padding: 25px 35px;
display: flex;
flex: 1;
overflow: auto;
flex-direction: column;
& > div, & > button, & > p {
    margin-top: 20px;
}
`
const LoginBTN = styled(Button)`
text-transform: none;
background: #FB641B;
color: #fff;
height: 48px;
border-radius: 2px;
`

const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const CreateAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer
`

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`
function LoginDialog({ open, setOpen }) {

    const handleClose = () => {
        setOpen(false)
        toggleAccount(accountinitialValues.login)
        setAleart(false)
    }

    const accountinitialValues = {
        login: {
            view: 'login',
            heading: "Login",
            subheading: "Get access to your Orders, Wishlist and Recommendations"
        },
        signup: {
            view: 'signup',
            heading: "Looks like you're new here!",
            subheading: "Sign up with your mobile number to get started"
        }
    }

    const SignUpInitialValue = {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        phone: '',

    }

    const toggleSignup = () => {
        toggleAccount(accountinitialValues.signup)
    }

    const [account, toggleAccount] = useState(accountinitialValues.login)


    const onchange = (e) => {
        setSignup({ ...signUp, [e.target.name]: e.target.value })
        console.log(signUp);
    }

    const [signUp, setSignup] = useState(SignUpInitialValue)

    const signupUser = async () => {
        let response = await authentiCateSignUp(signUp)
        if (!response) return;
        handleClose()
        console.log(response);
        setAccount(signUp.firstname)
    }



    const { setAccount } = useContext(DataContext)
    //login

    const LoginInitialValue = {
        username: "",
        password: ""
    }

    const [login, setLogin] = useState(LoginInitialValue)
    const onvaluechange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }

    const [aleart, setAleart] = useState(false)

    const LoginUser = async () => {
        let responce = await authentiCateLogin(login)
        console.log(responce);
        if (responce.status === 200) {
            console.log(responce.status);
            setAccount(responce.data.data.firstname)
            handleClose()
        }
        else if(responce.status === 400){
            setAleart(true)

        }
    }
    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component>
                <Box style={{ display: 'flex', height: '100%' }}>
                    <Image><Typography variant="h5">
                        {account.view === 'login' ? accountinitialValues.login.heading : accountinitialValues.signup.heading}
                    </Typography>
                        <Typography style={{ marginTop: 20 }} >
                            {account.view === 'login' ? accountinitialValues.login.subheading : accountinitialValues.signup.subheading}

                        </Typography>
                    </Image>


                    {account.view === 'login' ?
                        <Wrapper>
                            <TextField name="username" onChange={(e) => { onvaluechange(e) }} id="standard-basic" label="Enter username" variant="standard" />
                            {
                                aleart ? <Error>Please enter valid username or password</Error> : ""
                            }
                            <TextField name="password" onChange={(e) => { onvaluechange(e) }} id="standard-basic" label="Enter Password" variant="standard" />
                            <Typography>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                            <LoginBTN onClick={LoginUser}>Login</LoginBTN>
                            <Typography style={{ textAlign: "center" }}>OR</Typography>
                            <RequestOTP>Request OTP</RequestOTP>
                            <CreateAccount onClick={toggleSignup}>New to Flipkart? Create an account</CreateAccount>


                        </Wrapper>
                        :
                        <Wrapper>
                            <TextField name="firstname" onChange={(e) => { onchange(e) }} id="standard-basic" label="Enter Firstname" variant="standard" />
                            <TextField name="lastname" onChange={(e) => { onchange(e) }} id="standard-basic" label="Enter Lastname" variant="standard" />
                            <TextField name="username" onChange={(e) => { onchange(e) }} id="standard-basic" label="Enter username" variant="standard" />
                            <TextField name="email" onChange={(e) => { onchange(e) }} id="standard-basic" label="Enter Email" variant="standard" />
                            <TextField name="password" onChange={(e) => { onchange(e) }} id="standard-basic" label="Enter Password" variant="standard" />
                            <TextField name="phone" onChange={(e) => { onchange(e) }} id="standard-basic" label="Enter PhoneNo" variant="standard" />

                            <LoginBTN onClick={signupUser}>Continue</LoginBTN>



                        </Wrapper>


                    }
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog
