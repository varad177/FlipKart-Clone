import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductDetails } from '../../redux/actions/productAction';
import { Box, Grid } from '@mui/material'
import ActionItem from './ActionItem';
import styled from '@emotion/styled';
import ProductDatail from './ProductDatail';



const Component = styled(Box)
  `
background : #f2f2f2;
margin-top : 0px;
width : 100vw;


`

const Container = styled(Grid)(({ theme }) => ({
  background: '#FFFFFF',
  display: 'flex',

  "@media (max-width: 900px)": {



  }

}))

const ProRes = styled(Box)(({ theme }) => ({

  display: 'flex',
  gap: '2rem',
  width: '100vw',
  //  overflow : 'overlay',
  "@media (max-width: 950px)": {


    flexDirection: 'column'


  }

}))

const RightContainer = styled(Box)(({ theme }) => ({
  marginTop: '50px',


}))

function DetailsView() {
  const { id } = useParams();
  const dispatch = useDispatch()
  const { loading, Product } = useSelector(state => state.getProductDetails)



  useEffect(() => {
    console.log(Product);

    if (Product && id !== Product.id)
      dispatch(getProductDetails(id))
  }, [dispatch, id, Product, loading]);




  return (

    <Component>
      {
        Product && Object.keys(Product).length &&
        <Container container>
          <ProRes>
            <Grid item lg={4} md={4} sm={8} xs={12}>
              <ActionItem Product={Product} />
            </Grid>

            <RightContainer item lg={8} md={8} sm={8} xs={12}>

              <ProductDatail Product={Product} />

            </RightContainer>
          </ProRes>

        </Container>
      }
    </Component>
  )
}

export default DetailsView
