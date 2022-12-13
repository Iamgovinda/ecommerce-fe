import React from 'react';
import styles from './HomeLayer.module.scss';
import UpperNavBar from '../../components/NavBar/UpperNavBar';
import LowerNavBar from '../../components/NavBar/LowerNavBar';
import MyCarousel from '../../components/Carousel/Carousel';
import { Container } from '@mui/system';
import FeaturedProductCard from '../../components/ProductCard/FeaturedProductCard';
import LatestProductCard from '../../components/ProductCard/LatestProductCard';
const HomeLayer = () => {
  return (
    <>
      <UpperNavBar />
      <LowerNavBar />
      <MyCarousel />
      <Container>
        <div className={styles['featured_section']}>
          <p className={styles['featured_text']}>Featured Product</p>
          <div className={styles['featured_parent']}>
            <FeaturedProductCard />
            <FeaturedProductCard />
            <FeaturedProductCard />
            <FeaturedProductCard />
          </div>
        </div>

        <div className={styles['latest_product_section']}>
          <p className={styles['latest_product_text']}>Latest Product</p>
          <div className={styles['latest_parent']}>
            <LatestProductCard />
            <LatestProductCard />
            <LatestProductCard />
            <LatestProductCard />
            <LatestProductCard />
            <LatestProductCard />
          </div>
        </div>
      </Container>
    </>
  )
}

export default HomeLayer