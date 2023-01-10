import { Button, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { NavLink } from "react-router-dom";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 70px);
`
const CustomButton = styled(Button)`
  padding: 25px 45px;
  font-size: 22px;
  background-color: #1B262C;
  transition: opacity 0.3s ease;
  &:hover{
    background-color: #1B262C;
    opacity: 0.8;
  }
`

const Text = styled(Typography)`
  color; #1B262C;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 15px;
`

const Home = () => {
  return (
    <Container>
      <Text>This is Book STore Application Crated Using Mern Stack</Text>
      <CustomButton LinkComponent={NavLink} to='/all' variant="contained">All Books 👉 </CustomButton>
    </Container>
  )
}

export default Home;