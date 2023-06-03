import Navbar from '@/Components/Navbar';
import ControlledCarousel from '@/Components/Carousel';
import firstImage from "../../img/genshinimpact.jpg";
import secondImage from "../../img/fallguys.jpg";
import thirdImage from "../../img/overwatch.jpg";

export default function Home () {
    const data = [
        {
            imageUrl: firstImage
        },
        {
            imageUrl: secondImage
        },
        {
            imageUrl: thirdImage
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
