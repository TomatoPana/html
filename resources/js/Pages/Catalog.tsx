import Navbar from '@/Components/Navbar';

export default function Catalog () {
  return (
    <>
      <Navbar />
      <main>
        <section id="productos-container">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-3 listado-filtros">
                <div id="filtros-container">
                  <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action active">
                      <h5 className="list-group-item-heading">Precio</h5>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                      De menor a mayor
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                      De mayor a menor
                    </a>
                  </div>
                  <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action active">
                      <h5 className="list-group-item-heading">Calificación</h5>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                      De mayor a menor
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                      De menor a mayor
                    </a>
                  </div>
                  <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action active">
                      <h5 className="list-group-item-heading">Categoría</h5>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                      <div className="form-check">
                        <label htmlFor="" className="form-check-label">
                          <input type="checkbox" value="carreras" className="form-check-input" />
                          Carreras
                        </label>
                      </div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                      <div className="form-check">
                        <label htmlFor="" className="form-check-label">
                          <input type="checkbox" value="shooter" className="form-check-input" />
                          Shooter
                        </label>
                      </div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                      <div className="form-check">
                        <label htmlFor="" className="form-check-label">
                          <input type="checkbox" value="survival" className="form-check-input" />
                          Survival
                        </label>
                      </div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                      <div className="form-check">
                        <label htmlFor="" className="form-check-label">
                          <input type="checkbox" value="Terror" className="form-check-input" />
                          Terror
                        </label>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-md-9 listado-productos">
                <div className="row">
                  <div className="col-xs-12 col-sm-6 col-lg-4">
                    <div className="card">
                      <img src="https://th.bing.com/th/id/OIP.hJ1c37JAEFTr-zJ3kDXIqAHaGe?pid=ImgDet&rs=1" alt="Producto 1" className="card-img-top img-fluid" />
                      <div className="card-block">
                        <h4 className="card-title">Producto 1</h4>
                        <p className="card-text">$000.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-lg-4">
                    <div className="card">
                      <img src="https://th.bing.com/th/id/OIP.hJ1c37JAEFTr-zJ3kDXIqAHaGe?pid=ImgDet&rs=1" alt="Producto 1" className="card-img-top img-fluid" />
                      <div className="card-block">
                        <h4 className="card-title">Producto 1</h4>
                        <p className="card-text">$000.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-lg-4">
                    <div className="card">
                      <img src="https://th.bing.com/th/id/OIP.hJ1c37JAEFTr-zJ3kDXIqAHaGe?pid=ImgDet&rs=1" alt="Producto 1" className="card-img-top img-fluid" />
                      <div className="card-block">
                        <h4 className="card-title">Producto 1</h4>
                        <p className="card-text">$000.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-lg-4">
                    <div className="card">
                      <img src="https://th.bing.com/th/id/OIP.hJ1c37JAEFTr-zJ3kDXIqAHaGe?pid=ImgDet&rs=1" alt="Producto 1" className="card-img-top img-fluid" />
                      <div className="card-block">
                        <h4 className="card-title">Producto 1</h4>
                        <p className="card-text">$000.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-lg-4">
                    <div className="card">
                      <img src="https://th.bing.com/th/id/OIP.hJ1c37JAEFTr-zJ3kDXIqAHaGe?pid=ImgDet&rs=1" alt="Producto 1" className="card-img-top img-fluid" />
                      <div className="card-block">
                        <h4 className="card-title">Producto 1</h4>
                        <p className="card-text">$000.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-lg-4">
                    <div className="card">
                      <img src="https://th.bing.com/th/id/OIP.hJ1c37JAEFTr-zJ3kDXIqAHaGe?pid=ImgDet&rs=1" alt="Producto 1" className="card-img-top img-fluid" />
                      <div className="card-block">
                        <h4 className="card-title">Producto 1</h4>
                        <p className="card-text">$000.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-lg-4">
                    <div className="card">
                      <img src="https://th.bing.com/th/id/OIP.hJ1c37JAEFTr-zJ3kDXIqAHaGe?pid=ImgDet&rs=1" alt="Producto 1" className="card-img-top img-fluid" />
                      <div className="card-block">
                        <h4 className="card-title">Producto 1</h4>
                        <p className="card-text">$000.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-lg-4">
                    <div className="card">
                      <img src="https://th.bing.com/th/id/OIP.hJ1c37JAEFTr-zJ3kDXIqAHaGe?pid=ImgDet&rs=1" alt="Producto 1" className="card-img-top img-fluid" />
                      <div className="card-block">
                        <h4 className="card-title">Producto 1</h4>
                        <p className="card-text">$000.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-lg-4">
                    <div className="card">
                      <img src="https://th.bing.com/th/id/OIP.hJ1c37JAEFTr-zJ3kDXIqAHaGe?pid=ImgDet&rs=1" alt="Producto 1" className="card-img-top img-fluid" />
                      <div className="card-block">
                        <h4 className="card-title">Producto 1</h4>
                        <p className="card-text">$000.00</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 text-center" id="paginator-container">
                    <nav>
                      <ul className="pagination">
                        <li className="page-item disabled">
                          <a href="#" className="page-link">
                            &laquo;
                          </a>
                        </li>
                        <li className="page-item active">
                          <a href="#" className="page-link">1</a>
                        </li>
                        <li className="page-item">
                          <a href="#" className="page-link">2</a>
                        </li>
                        <li className="page-item">
                          <a href="#" className="page-link">3</a>
                        </li>
                        <li className="page-item">
                          <a href="#" className="page-link">4</a>
                        </li>
                        <li className="page-item">
                          <a href="#" className="page-link">
                            &raquo;
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </section>
      </main>
    </>
  );
}
