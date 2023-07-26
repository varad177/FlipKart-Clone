import styled from '@emotion/styled'
import { InputBase, Box, List, ListItem } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/actions/productAction'
import { Link } from 'react-router-dom';





const SearchContainer = styled(Box)(({ theme }) => ({
    background: '#fff',
    width: '38%',
    borderRadius: '2px',
    marginLeft: '10px',
    "@media (max-width: 950px)": {
        width: '80%',


    }

}))

const InputSearchBase = styled(InputBase)`
width: 100%;
padding-left: 20px;
font-size: unset;

`

const SearcticonWrapper = styled(Box)`
color : blue;
display:flex;
padding : 5px
`

const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 36px;
`;

export default function Search() {



    const [text, setText] = useState("");
    const [open, setOpen] = useState(false);

    const { products } = useSelector(state => state.getProducts)
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getProducts())

    }, [dispatch])


    const gettext = (text) => {
        setText(text)
        setOpen(true)
    }

    const close = () =>{
        setText('')
        setOpen(true)
    }

    return (

        <SearchContainer style={{ display: 'flex' }}>
            <InputSearchBase placeholder='search for products, brands, more'
                onChange={(e) => { gettext(e.target.value) }} />
            <SearcticonWrapper>
                <SearchIcon />
            </SearcticonWrapper>

            {
                open && <ListWrapper >
                    {
                        products.filter(products => products.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(products => (
                             <ListItem style={{ color: 'black' }}>
                                    <Link style={{ textDecoration: 'none', color: ' black' }}
                                        to={`/product/${products.id}`}
                                        onclick={()=>close}
                                        
                                    >
                                        {products.title.longTitle}
                                    </Link>
                                </ListItem>
                            
                        ))
                    }
                </ListWrapper>
            }
        </SearchContainer >

    )
}
