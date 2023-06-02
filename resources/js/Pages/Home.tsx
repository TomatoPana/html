import Navbar from '@/Components/Navbar';
import ControlledCarousel from '@/Components/Carousel';
import image from "../../img/genshinimpact.jpg";

export default function Home () {
    const data = [
        {
            imageUrl: image
        },
        {
            imageUrl: image
        },
        {
            imageUrl: image
        }
    ];
    return (
        <>
            <Navbar />
            <main className='py-56'>
                <ControlledCarousel data={ data } />
                <h1>Main</h1>
            </main>
        </>
    )
}
