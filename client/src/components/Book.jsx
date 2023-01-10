import { NavLink, useNavigate } from "react-router-dom";

import { Typography, styled, Button } from "@mui/material";
import { Box } from "@mui/system";
import { deleteBook } from "../services/api";


const Container = styled(Box)`
    width: 200px;

    & > img{
        width: 100%;
    }
`
const Title = styled(Typography)`
    font-weight: 500;
    font-size: 18px;
`
const Description = styled(Typography)`
    font-size: 13px;
    color: #696969;
`
const Author = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    color: #696969;
    margin-bottom: 2px;
`
const Price = styled(Typography)`
    margin-top: 4px;
    color: #696969;
    font-size: 15px;
    font-weight: 500;
`
const Wrapper = styled(Box)`
    margin-left: -7px;
`
const CustomButton = styled(Button)`
    color: #1B262C;
    &:hover{
        text-decoration: underline;
    }
`

const Book = ({ book }) => {

    const navigate = useNavigate();
    const {_id, name, author, description, price, coverImg} = book;
    
    const deleteBookData = async (id) => {
        await deleteBook(id);
        navigate('/');
    }



  return (
    <Container>
        <img src={coverImg}  />
        <Box>
            <Title>{name}</Title>
            <Author>Author - {author}</Author>
            <Description>{description}</Description>
            <Price>Price: ₹{price}</Price>
        </Box>
        <Wrapper>
            <CustomButton onClick={() => deleteBookData(_id)} >Delete</CustomButton>
            <CustomButton LinkComponent={NavLink} to={`/edit/${_id}`} >Update</CustomButton>
        </Wrapper>
    </Container>
  )
}

export default Book;