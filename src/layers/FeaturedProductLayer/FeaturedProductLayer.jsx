import React from 'react';
// import FeaturedProducts from './Carousel';
import styles from './FeaturedProductLayer.scss';
import './FeaturedProductLayer.scss';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import product from '../../assets/ProductCard/product.png';
import Slider from 'react-slick';
import FeaturedProductCard from '../../components/ProductCard/FeaturedProductCard';

const FeaturedProductLayer = () => {

    const PrevArrow = (props) => {
        const {style, onClick, btnColor } = props;

        return (
            <div
                className={`${styles["prev"]}  ${styles["slider"]}`}
                onClick={onClick}
                style={{...style}}
            >
                <ArrowBackIosIcon
                    style={{
                        color:btnColor ?? "black !important" ,
                    }}
                    className
                />
            </div>
        );
    };

    const NextArrow = (props) => {
        const { style, onClick, btnColor } = props;

        return (
            <div
                className={`${styles["next"]} ${styles["slider"]}`}
                onClick={onClick}
                style={{...style}}

            >
                <NavigateNextIcon
                    style={{
                        color: btnColor?? "black",
                    }}
                    className={styles['next_icon']}
                />
            </div>
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        slickPrev: <PrevArrow btnColor={'black'}/>,
        slickNext: <NextArrow btnColor={'black'}/>,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    const featured_products = [
        {
            'featured_image': product,
            'name': 'Cantilever chair',
            'code': 'Code-452301',
            'price': '$42.00'
        },
        {
            'featured_image': product,
            'name': 'Cantilever chair',
            'code': 'Code-452301',
            'price': '$42.00'
        },
        {
            'featured_image': product,
            'name': 'Cantilever chair',
            'code': 'Code-452301',
            'price': '$42.00'
        },
        {
            'featured_image': product,
            'name': 'Cantilever chair',
            'code': 'Code-452301',
            'price': '$42.00'
        },
        {
            'featured_image': product,
            'name': 'Cantilever chair',
            'code': 'Code-452301',
            'price': '$42.00'
        },
        {
            'featured_image': product,
            'name': 'Cantilever chair',
            'code': 'Code-452301',
            'price': '$42.00'
        },
        {
            'featured_image': product,
            'name': 'Cantilever chair',
            'code': 'Code-452301',
            'price': '$42.00'
        },
        {
            'featured_image': product,
            'name': 'Cantilever chair',
            'code': 'Code-452301',
            'price': '$42.00'
        }
    ]

    return (
        <Slider {...settings}>
            {
                featured_products.map((item, i) => <FeaturedProductCard key={i} items={item} />)
            }
        </Slider>
    )
}

export default FeaturedProductLayer