import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

const NavBar = ({}) => {
    return ( 
        <Navbar fixed='top' bg='light' sticky='top' >
            <Container>
                <Navbar.Brand href='/'>Home</Navbar.Brand>
            </Container>
        </Navbar>
     );
}
 
export default NavBar;