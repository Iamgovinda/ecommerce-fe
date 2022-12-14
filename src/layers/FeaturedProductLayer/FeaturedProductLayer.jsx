import React from 'react';
import FeaturedProducts from './FeaturedProducts';

import styles from './FeaturedProductLayer.module.scss';
import Carousel from 'react-material-ui-carousel';

const FeaturedProductLayer = () => {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }

    ]
    return (
        <Carousel className={styles['carousell']} >
            {
                items.map( (item, i) => <FeaturedProducts key={i} /> )
            }
        </Carousel>
    )
}

export default FeaturedProductLayer