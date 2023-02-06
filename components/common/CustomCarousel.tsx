'use client';

import {useMemo, useRef} from 'react';
import { useRouter } from 'next/navigation';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from '@/styles/carousel.module.css';

//const CustomDot = ({onClick, ...rest }) => {
    const CustomDot = ({...rest }) => {
    const {
      onMove,
      index,
      active,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      <button
        className={active ? "active" : "inactive"}
        //onClick={() => onClick()}
        style={{backgroundColor:active ?'#b4afaf':'#ece7e7'}}
      >
      </button>
    );
  };
  
export default function CustomCarousel({ children, props }: { children?: React.ReactNode, props?: any}) {
    const router = useRouter();
    const carouselRef = useRef(null);
  
    return (
        <div
            style={{
                paddingBottom: '30px',
                position: 'relative'
            }}
        >
            <Carousel ref={carouselRef}
                additionalTransfrom={0}
                arrows={false}
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass={styles.carousel_container}
                dotListClass={styles.carousel_dot}
                showDots
                customDot={<CustomDot />}
                draggable
                focusOnSelect
                infinite={false}
                itemClass={styles.carousel_li}
                keyBoardControl
                partialVisible={true}
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
                        partialVisibilityGutter: 60
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
                sliderClass=""
                slidesToSlide={1}
                swipeable
                {...props}
            >
                {children}
            </Carousel>
        </div>
    );
}
