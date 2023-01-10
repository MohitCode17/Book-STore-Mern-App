import { useEffect, useState } from "react";

import { Typography, styled } from "@mui/material";
import { Box } from "@mui/system";

import { getBooks } from "../services/api";
import Book from "./Book";


const Container = styled(Box)`
  margin: 2% 5%;
`
const Title = styled(Typography)`
  margin-bottom: 20px;
  font-weight: 500;
  color: #1B262C;
`

const Wrapper = styled(Box)`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
`

const AllBooks = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAllBooks();
  }, []);

  const getAllBooks = async () => {
    const response = await getBooks();
    setBooks(response.data);
  }

  return (
    <Container>
      <Title variant="h4">Popular Books</Title>
      <Wrapper>
        {books.map(book => (
          <Book key={book._id} book={book} />
        ))}
      </Wrapper>
    </Container>
  )
}

export default AllBooks;