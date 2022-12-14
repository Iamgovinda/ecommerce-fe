import React from 'react';
import styles from './FeaturedProductLayer.module.scss';
import FeaturedProductCard from '../../components/ProductCard/FeaturedProductCard';
import product from '../../assets/ProductCard/product.png';
const FeaturedProducts = () => {
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
        }
    ]
    return (
        <div className={styles['featured_parent']}>
            {
                featured_products.map((item) => {
                    return (
                        <FeaturedProductCard
                            name={item.name}
                            featured_image={item.featured_image}
                            code={item.code}
                            price={item.price}

                        />
                    )

                })
            }
        </div>
    )
}

export default FeaturedProducts