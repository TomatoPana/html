import Navbar from '@/Components/Navbar';
import Logo from '../../img/logoGameflix.png'

export default function AboutUs () {
    return (
        <>
            <Navbar />
            <main className='py-56'>
                <div className="nosotros">
                    <img src={ Logo } alt="Logo Gameflix" height="100px" />
                    <div className="linea"></div>
                    <br />
                    <div className="us" >
                        <h4>Bienvenido/a a nuestra página web, el destino definitivo para los amantes de los videojuegos en línea.
                            Aquí en nuestra tienda virtual, nos apasiona brindarte una experiencia de juego inigualable directamente
                            desde la comodidad de tu hogar. Con una amplia selección de títulos de última generación, desde emocionantes
                            aventuras de acción hasta cautivadores juegos de rol y emocionantes desafíos multijugador, nuestro catálogo está
                            diseñado para satisfacer las necesidades de todos los jugadores. Nuestro objetivo es ofrecerte la mejor variedad
                            de videojuegos, garantizando la calidad y la diversión en cada experiencia de juego. Sumérgete en nuestro mundo
                            virtual y descubre el poder de los videojuegos en línea. ¡Prepárate para vivir emociones intensas y desafíos
                            emocionantes en cada clic!</h4>
                    </div>
                    <div className="linea"></div>
                    <br />
                    <h5>Centro de Enseñanza Técnica Industrial <br />
                        Plantel Colomos <br />
                        Desarrollo de Software <br />
                        <br /> EQUIPO: <br />
                        Moises David Lozano Bobadilla   18310167 <br />
                        Janne Oman Herrera Pineda       18310146 <br />
                        Jacqueline López Rios           21310437 <br />
                        <br /> CONTACTO: <br />
                        <a href="mailto:a21310437@ceti.mx">e-mail a Jacqueline</a><br />
                        <a href="mailto:a18310146@ceti.mx">e-mail a Janne</a><br />
                        <a href="mailto:a18310167@ceti.mx">e-mail a Moises</a><br />
                        <div className="linea"></div>
                        <br />
                    </h5>
                </div>
            </main>
        </>
    );
}
