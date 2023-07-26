
import styled from '@emotion/styled';
import { Box,ButtonGroup, Button } from '@mui/material'
import React from 'react'

const Component = styled(ButtonGroup)`
    margin-top: 30px;
`;
const StyledButton = styled(Button)`
    border-radius: 50%;
`;


const ButtonGRP = () => {
    return (
        <Component>
            <StyledButton>-</StyledButton>
            <Button>1</Button>
            <StyledButton>+</StyledButton>

        </Component>
    )
}

export default ButtonGRP
