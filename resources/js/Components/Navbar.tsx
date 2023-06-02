import logo from '../../img/gameflix.jpg';
import { Link } from "@inertiajs/react";

export default function Navbar () {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">
                    <img src={ logo } height="30px" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link as='a' className="nav-link active" aria-current="page" href="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link as='a' className="nav-link" href="/about">Nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link as='a' className="nav-link" href="/catalog">Catálogo</Link>
                        </li>
                    </ul>
                    <Link as='a' href="/login" className="btn btn-danger">Iniciar Sesión</Link>
                </div>
            </div>
        </nav>
    );
}
