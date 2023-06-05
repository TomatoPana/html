import Navbar, { NavbarProps } from '@/Components/Navbar';
import ControlledCarousel, { PromoCarouselItem } from '@/Components/Carousel';

export type HomeProps = {
    carouselInfo: PromoCarouselItem[],
    navbarInfo: NavbarProps
};

export default function Home ( props: HomeProps ) {
    return (
        <>
            <Navbar
                isLoggedIn={ props.navbarInfo.isLoggedIn }
                items={ props.navbarInfo.items }
                currentItem={ props.navbarInfo.currentItem }
            />
            <main className='py-56'>
                <ControlledCarousel data={ props.carouselInfo } />
                <h1>Main</h1>
            </main>
        </>
    )
}
