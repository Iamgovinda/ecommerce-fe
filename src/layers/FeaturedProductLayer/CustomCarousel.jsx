import React from 'react';
import styles from './FeaturedProductLayer.module.scss';
import { IoChevronBackCircle, IoChevronForwardCircle } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaturedProductCard from '../../components/ProductCard/FeaturedProductCard';
import product from '../../assets/ProductCard/product.png';
import Slider from 'react-slick';
const CustomCarousel = (props) => {
    console.log(props.children)
    const PrevArrow = (props) => {
        const { style, onClick, btnColor } = props;

        return (
            <div
                className={`${styles["prev"]}  ${styles["slider"]}`}
                style={{ ...style }}
                onClick={onClick}
            >
                <IoChevronBackCircle
                    style={{
                        color: "red" ?? "#ffffff",
                    }}
                />
            </div>
        );
    };

    const NextArrow = (props) => {
        const { style, onClick, btnColor } = props;

        return (
            <div
                className={`${styles["next"]} ${styles["slider"]}`}
                style={{ ...style }}
                onClick={onClick}
            >
                <IoChevronForwardCircle
                    style={{
                        color: "red" ?? "#ffffff",
                    }}
                />
            </div>
        );
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        variableWidth: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        // responsive: [
        //   {
        //     breakpoint: 1024,
        //     settings: {
        //       slidesToShow: 3,
        //       slidesToScroll: 1,
        //     },
        //   },
        //   {
        //     breakpoint: 820,
        //     settings: {
        //       slidesToShow: 2,
        //       slidesToScroll: 2,
        //     },
        //   },
        //   {
        //     breakpoint: 480,
        //     settings: {
        //       slidesToShow: 1,
        //       slidesToScroll: 1,
        //     },
        //   },
        // ],
    };
    // const featured_products = [
    //     {
    //         'featured_image': product,
    //         'name': 'Cantilever chair',
    //         'code': 'Code-452301',
    //         'price': '$42.00'
    //     },
    //     {
    //         'featured_image': product,
    //         'name': 'Cantilever chair',
    //         'code': 'Code-452301',
    //         'price': '$42.00'
    //     },
    //     {
    //         'featured_image': product,
    //         'name': 'Cantilever chair',
    //         'code': 'Code-452301',
    //         'price': '$42.00'
    //     },
    //     {
    //         'featured_image': product,
    //         'name': 'Cantilever chair',
    //         'code': 'Code-452301',
    //         'price': '$42.00'
    //     }
    // ]
    return (
        <Slider {...settings}>{props.children}</Slider>
    )
}

export default CustomCarousel