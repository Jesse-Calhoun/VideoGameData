import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import './NavBar.css'

const NavBar = ({}) => {
    return ( 
        <Navbar fixed='top' sticky='top' className='bg' >
            <Container>
                <Navbar.Brand href='/' className='text-color'>Home</Navbar.Brand>
            </Container>
        </Navbar>
     );
}
 
export default NavBar;