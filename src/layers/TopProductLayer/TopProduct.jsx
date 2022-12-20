import React from 'react';
import TopProductCard from '../../components/TopProductCard/TopProductCard';
import styles from './TopProductLayer.module.scss';

const TopProduct = () => {
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
        }
    ]
  return (
    <div className={styles['top_product_parent']}>
        {
                top_products.map((item)=>{
                    return (
                        <TopProductCard />
                    )
                })
        }
    </div>
  )
}

export default TopProduct