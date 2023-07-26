import { Box, Typography } from "@mui/material";
import React from "react";
import { navData } from "../../constants/data";
import styled from "@emotion/styled";

const Component = styled(Box)(({theme})=>({


  display: 'flex',
   margin : '0px 130px 0 130px',
  justifyContent: 'space-between',
overflow : 'overlay',

  "@media (max-width: 900px)": {
    margin : 0

}

}))



const Container  = styled(Box)`
padding : 12px 8px ;
text-align: center;
`
const Text =styled(Typography)`
font-size: 14px;
font-weight: 600;
font-family: inherit;

`


function NavBar() {
  
  return (
    <Component>
      {navData.map(data => {
        return  <Container  >
            <img   src={data.url} style={{width:64}} alt="nav data" />
            <Text>{data.text}</Text>
          </Container>
        
      })}
    </Component>
  );
}

export default NavBar;
