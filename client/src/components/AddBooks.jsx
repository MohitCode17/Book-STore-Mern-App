import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, FormControl, FormGroup, Input, InputLabel, Typography, styled, FormLabel } from '@mui/material';
import { addBook } from '../services/api';


const Container = styled(FormGroup)`
  width: 50%;
  margin: 3% auto 0 auto;
  & > div{
    margin-top: 15px;
  }
`
const Title = styled(Typography)`
  color: #1B262C;
  font-weight: 600;  
`

const CustomButton = styled(Button)`
  background-color: #1B262C;
  height: 40px;
  margin-top: 10px;
  &:hover{
    background-color: #1B262C;
    opacity: 0.8;
  }
`


const bookInitialValue = {
  name: '',
  author: '',
  description: '',
  price: '',
  coverImg: '',
}

const AddBooks = () => {

    const navigate = useNavigate();
    const [book, setBook] = useState(bookInitialValue);

    const handleInputChange = (e) => {
      setBook({...book, [e.target.name]: e.target.value});
    }

    const addBookDetails = async () => {
      await addBook(book);
      navigate('/all');
    }

    return (
      <Container>
        <Title variant='h4'>Add Book 📚</Title>
        <FormControl>
          <InputLabel>Book Name</InputLabel>
          <Input onChange={handleInputChange} name='name' value={book.name} />
        </FormControl>
        <FormControl>
          <InputLabel>Author</InputLabel>
          <Input onChange={handleInputChange} name='author' value={book.author} />
        </FormControl>
        <FormControl>
          <InputLabel>Description</InputLabel>
          <Input onChange={handleInputChange} name='description' value={book.description} />
        </FormControl>
        <FormControl>
          <InputLabel>Price</InputLabel>
          <Input onChange={handleInputChange} name='price' value={book.price} />
        </FormControl>
        <FormControl>
          <InputLabel>Book Cover</InputLabel>
          <Input onChange={handleInputChange} name='coverImg' value={book.coverImg} />
        </FormControl>
        <FormControl>
          <CustomButton variant="contained" onClick={addBookDetails} >Add Book</CustomButton>
        </FormControl>
      </Container>
    )
  }
  
  export default AddBooks;