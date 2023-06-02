import logo from '../../img/gameflix.jpg';
import { Link } from "@inertiajs/react";

export default function Navbar () {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/index.php">
                    <img src={ logo } height="30px" />

                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/nosotros.php">Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Catálogo</a>
                        </li>
                    </ul>
                    <a href="/login.php" className="btn btn-danger">Iniciar Sesión</a>
                </div>
            </div>
        </nav>
    );
}
