import { NavLink } from 'react-router-dom';

import { AppBar, Toolbar, styled, Typography, Tab } from '@mui/material';
import { AutoStories } from '@mui/icons-material';
import { Box } from '@mui/system';


const Header = styled(AppBar)`
    background-color: #1B262C;
`
const Logo = styled(Typography)`
    margin-left: 10px;
    font-size: 22px;
    font-weight: 600;
`
const Links = styled(Box)`
    margin-left: auto;
`


const Navbar = () => {
    return (
        <Header position='static' >
            <Toolbar>
                <AutoStories/>
                <Logo>Book STore</Logo>
                 <Links>
                    <Tab LinkComponent={NavLink} to="/" label="Home"/>
                    <Tab LinkComponent={NavLink} to="/all" label="All Books" />
                    <Tab LinkComponent={NavLink} to="/add" label="Add Books" />
                 </Links>                   
            </Toolbar>
        </Header>
    )
}

export default Navbar;