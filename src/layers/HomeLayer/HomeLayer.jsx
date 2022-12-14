import React from 'react';
import styles from './HomeLayer.module.scss';
import UpperNavBar from '../../components/NavBar/UpperNavBar';
import LowerNavBar from '../../components/NavBar/LowerNavBar';
import MyCarousel from '../../components/Carousel/Carousel';
import { Container } from '@mui/system';
import LatestProductCard from '../../components/ProductCard/LatestProductCard';
import OfferCard from '../../components/OfferCard/OfferCard';
import firstOfferImage from '../../assets/OfferCard/cashback.png';
import secondOfferImage from '../../assets/OfferCard/Frame.png';
import thirdOfferImage from '../../assets/OfferCard/offer3.png';
import fourthOfferImage from '../../assets/OfferCard/offer4.png';
import latest_product from '../../assets/ProductCard/latest_product.png';
import FeaturedProductLayer from '../FeaturedProductLayer/FeaturedProductLayer';
import FooterLayer from '../../components/Footer/FooterLayer';
import ProductFeatureCard from '../ProductFeatureCard/ProductFeatureCard';
const HomeLayer = () => {
  const latest_products = [
    {
      'image': latest_product,
      'name': 'Comfort Handy Craft',
      'current_price': '$42',
      'initial_price': '$65'
    },
    {
      'image': latest_product,
      'name': 'Comfort Handy Craft',
      'current_price': '$42',
      'initial_price': '$65'
    },
    {
      'image': latest_product,
      'name': 'Comfort Handy Craft',
      'current_price': '$42',
      'initial_price': '$65'
    },
    {
      'image': latest_product,
      'name': 'Comfort Handy Craft',
      'current_price': '$42',
      'initial_price': '$65'
    },
    {
      'image': latest_product,
      'name': 'Comfort Handy Craft',
      'current_price': '$42',
      'initial_price': '$65'
    },
    {
      'image': latest_product,
      'name': 'Comfort Handy Craft',
      'current_price': '$42',
      'initial_price': '$65'
    }
  ]
  const offers = [
    {
      'image': firstOfferImage,
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'
    },
    {
      'image': secondOfferImage,
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'
    },
    {
      'image': thirdOfferImage,
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'
    },
    {
      'image': fourthOfferImage,
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'
    }
  ]
  return (
    <>
      <UpperNavBar />
      <LowerNavBar />
      <MyCarousel />
      <div className={styles['featured_section']}>
        <p className={styles['featured_text']}>Featured Product</p>
        <div><FeaturedProductLayer /></div>
      </div>

      <Container>

        <div className={styles['latest_product_section']}>
          <p className={styles['latest_product_text']}>Latest Product</p>
          <div className={styles['latest_parent']}>
            {
              latest_products.map((item) => {
                return (
                  <LatestProductCard
                    image={item.image}
                    name={item.name}
                    current_price={item.current_price}
                    initial_price={item.initial_price}
                  />
                )
              })
            }
          </div>
        </div>
      </Container>

      <div className={styles["offer_section"]}>
        <p className={styles["offer_text"]}>What Shopex Offer!</p>
        <div className={styles["offer_parent"]}>
          {
            offers.map((item) => {
              return (
                <OfferCard
                  image={item.image}
                  description={item.description}
                />
              )
            })
          }
        </div>
      </div>
      <ProductFeatureCard />
      <FooterLayer />

    </>
  )
}

export default HomeLayer