import React from 'react';
import Slider from 'react-slick';
import TopProductCard from '../../components/TopProductCard/TopProductCard';
import styles from '../FeaturedProductLayer/FeaturedProductLayer.scss';
import '../FeaturedProductLayer/FeaturedProductLayer.scss';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const TopProductLayer = () => {
    const top_products = [
        {
            'name': 'Cantilever chair',
            'code': 'Code-452301',
            'price': '$42.00'
        },
        {
            'name': 'Cantilever chair',
            'code': 'Code-452301',
            'price': '$42.00'
        },
        {
            'name': 'Cantilever chair',
            'code': 'Code-452301',
            'price': '$42.00'
        },
        {
            'name': 'Cantilever chair',
            'code': 'Code-452301',
            'price': '$42.00'
        },
        {
            'name': 'Cantilever chair',
            'code': 'Code-452301',
            'price': '$42.00'
        },
        {
            'name': 'Cantilever chair',
            'code': 'Code-452301',
            'price': '$42.00'
        },
        {
            'name': 'Cantilever chair',
            'code': 'Code-452301',
            'price': '$42.00'
        },
        {
            'name': 'Cantilever chair',
            'code': 'Code-452301',
            'price': '$42.00'
        }
    ]
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
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            }
          ]
    };

    return (
        <Slider {...settings}>
            {
                top_products.map((item, i) => <TopProductCard key={i} items={item} />)
            }
        </Slider>
    )
}

export default TopProductLayer