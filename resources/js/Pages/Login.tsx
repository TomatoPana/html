import Navbar from '@/Components/Navbar';
import Alert from 'react-bootstrap/cjs/Alert';

interface LoginProps {
    message?: {
        "type": string,
        "message": string,
    };
}

export default function Login ( { message }: LoginProps ) {
    return (
        <>
            <Navbar />
            <main className='py-56'>
                <div className="container">
                    { ( message !== undefined ) ? <Alert variant={ message.type }>{ message.message }</Alert> : null }
                    <div className="row">
                        <div className="col-5">
                            <div className="login-form">
                                <form action="/examples/actions/confirmation.php" method="post">
                                    <h2>Iniciar Sesión</h2>
                                    <p className="hint-text">Bienvenido a Gameflix</p>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="username" placeholder="Usuario" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" name="password" placeholder="Contraseña" required />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-danger btn-lg btn-block">Iniciar Sesión</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="signup-form">
                                <form action="/examples/actions/confirmation.php" method="post">
                                    <h2>Registrarse</h2>
                                    <p className="hint-text">Crea tu cuenta. Es gratis y solo tomará un minuto.</p>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="name" placeholder="Nombre" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="usuario" placeholder="Usuario" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" name="email" placeholder="Correo" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" name="password" placeholder="Contraseña" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" name="confirm_password" placeholder="Confirme su contraseña" required />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-check-label">
                                            <input type="checkbox" required /> Acepto los
                                            <a href="#">Términos y condiciones</a>;
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-danger btn-lg btn-block">Registrarse</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
