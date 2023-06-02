import { FC, useState } from 'react';
import Carousel from 'react-bootstrap/cjs/Carousel';

export interface PromoCarouselItems {
    imageUrl: string;
    imageAlt?: string;
    promoName?: string;
    promoDescription?: string;
}

export default function ControlledCarousel ( { data }: { data: PromoCarouselItems[] } ) {
    const [ index, setIndex ] = useState( 0 );

    const handleSelect = ( selectedIndex: number ) => {
        setIndex( selectedIndex );
    };

    return (
        <Carousel activeIndex={ index } onSelect={ handleSelect } fade>
            { data.map( ( value, index ) => (
                <Carousel.Item key={ index }>
                    <img
                        className="d-block w-100"
                        src={ value.imageUrl }
                        alt={ value.imageAlt }
                    />
                    {
                        ( value.promoName !== undefined || value.promoDescription !== undefined ) ? (
                            <Carousel.Caption>
                                <h3>{ value.promoName ?? '' }</h3>
                                <p>{ value.promoDescription ?? '' }</p>
                            </Carousel.Caption>
                        ) : null
                    }

                </Carousel.Item>
            ) ) }
        </Carousel>
    );
}
