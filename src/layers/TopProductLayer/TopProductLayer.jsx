import React from 'react';
import Carousel from 'react-material-ui-carousel';
import TopProduct from './TopProduct';
const TopProductLayer = () => {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        }
    ]

    return (
        <Carousel  autoPlay={true}>
            {
                items.map((item, i) => <TopProduct key={i} item={item} />)
            }
        </Carousel>
    )
}

export default TopProductLayer