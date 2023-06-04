import Navbar from '@/Components/Navbar';

export default function GameForm () {
  // Formulario del juego
  return (
    <>
      <Navbar />
      <main className='py-56'>
        <div className="nosotros">
          <img src="/img/logoGameflix.png" alt="" height="100px" />
          <div className="linea"></div>
          <br />
          <div className="container">
            <div className="row">
              <div>
                <div className="login-form">
                  <form action="/examples/actions/confirmation.php" method="post">
                    <h2>Agregar juego nuevo</h2>
                    <div className="mb-3">
                      <label htmlFor="formFile" className="form-label">Ingrese la imagen del juego</label>
                      <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="form-group purple-border">
                      <label htmlFor="exampleFormControlTextarea4">Descripción del juego</label>
                      <textarea className="form-control" id="exampleFormControlTextarea4" rows={ 3 }></textarea>
                    </div>
                    <p className="hint-text">ingrese el nombre del empleado que realizara el cambio</p>
                    <div className="form-group">
                      <input type="text" className="form-control" name="user" placeholder="Nombre del empleado" required />
                    </div>
                    <p className="hint-text">ingrese el nombre del juego</p>
                    <div className="form-group">
                      <input type="text" className="form-control" name="name" placeholder="nombre del juego" required />
                    </div>
                    <p className="hint-text">ingrese el precio del juego</p>
                    <div className="form-group">
                      <input type="number" className="form-control" name="precio" placeholder="precio del juego" required />
                    </div>
                    <div>
                      <p className="hint-text">agregar todas las plataformas donde estará el juego</p>
                      <input name="playStation" type="checkbox" />
                      <h5>PlayStation</h5>
                      <input name="xbox" type="checkbox" />
                      <h5>Xbox</h5>
                      <input name="pc" type="checkbox" />
                      <h5>PC</h5>
                      <input name="switch" type="checkbox" />
                      <h5>Nintendo Switch</h5>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-success btn-lg btn-block">agregar</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
