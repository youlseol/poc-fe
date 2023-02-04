'use client';

import { useRouter } from 'next/navigation';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function CustomCarousel({ children }: { children?: React.ReactNode }) {
    const router = useRouter();

    return (
        <div
            style={{
                paddingBottom: '30px',
                position: 'relative'
            }}
        >
            <Carousel
                additionalTransfrom={0}
                arrows={false}
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container-padding-bottom"
                dotListClass=""
                draggable
                focusOnSelect
                infinite={false}
                itemClass="carousel-item-padding-10-px"
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 3,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                {children}
            </Carousel>
        </div>
    );
}
