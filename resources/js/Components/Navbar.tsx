import { default as BootstrapNavbar } from 'react-bootstrap/cjs/Navbar';
import Nav from 'react-bootstrap/cjs/Nav';
import NavDropdown from 'react-bootstrap/cjs/NavDropdown';
import logo from '../../img/gameflix.jpg';
import { Link } from "@inertiajs/react";
import Container from 'react-bootstrap/cjs/Container';

type NavbarItem = {
  name: string,
  href: string,
};

export type NavbarProps = {
  items: NavbarItem[],
  currentItem: number,
  isLoggedIn: boolean,
  isAdmin?: boolean,
}

// export default function Navbar () {
//   return (
//     <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <Link className="navbar-brand" href="/">
//           <img src={ logo } height="30px" />
//         </Link>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarText">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link as='a' className="nav-link active" aria-current="page" href="/">Inicio</Link>
//             </li>
//             <li className="nav-item">
//               <Link as='a' className="nav-link" href="/about">Nosotros</Link>
//             </li>
//             <li className="nav-item">
//               <Link as='a' className="nav-link" href="/catalog">Catálogo</Link>
//             </li>
//           </ul>
//           <Link as='a' href="/login" className="btn btn-danger">Iniciar Sesión</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

const AdminNavigation = () => (
  <NavDropdown title="AdminDropdown">
    <NavDropdown.Item href="/admin/dashboard">
      Dashboard
    </NavDropdown.Item>
    <NavDropdown.Item href="/admin/create">
      Subir juego
    </NavDropdown.Item>
    <NavDropdown.Item href="/admin/games">
      Lista de juegos
    </NavDropdown.Item>
  </NavDropdown>
);

const NavLink = ( props: { item: NavbarItem, index: number, currentItem: number } ) => (
  <Nav.Link
    as={ Link }
    active={ props.index === props.currentItem }
    href={ props.item.href }
  >
    { props.item.name }
  </Nav.Link>
);

const AuthLink = ( props: { isLoggedIn: boolean } ) => (
  <Link
    className='btn btn-danger'
    as="button"
    href={ props.isLoggedIn ? '/logout' : '/login' }
    method={ props.isLoggedIn ? 'post' : undefined }>
    { props.isLoggedIn ? 'Cerrar' : 'Iniciar' } Sesión
  </Link>
);

export default function Navbar ( props: NavbarProps ) {
  return (
    <BootstrapNavbar expand="lg" fixed="top" bg="light" variant="light">
      <Container fluid>
        <BootstrapNavbar.Brand as={ Link } href='/'>
          <img src={ logo } height="30px" alt='Gameflix Logo' />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <BootstrapNavbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            { props.items.map( ( item: NavbarItem, index ) => <NavLink
              key={ index }
              item={ item }
              index={ index }
              currentItem={ props.currentItem }
            /> ) }
            { props.isAdmin ? <AdminNavigation /> : null }
          </Nav>
          <Nav>
            <Nav.Link>
              <AuthLink isLoggedIn={ props.isLoggedIn } />
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}
