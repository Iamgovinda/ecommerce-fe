import React, { useEffect, useState } from 'react';
import styles from './HomeLayer.module.scss';
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
import ProductFeatureCard from '../../components/ProductFeatureCard/ProductFeatureCard';
import TrendingProductLayer from '../TrendingProductLayer/TrendingProductLayer';
import DiscountLayer from '../DiscountLayer/DiscountLayer';
import TopProductLayer from '../TopProductLayer/TopProductLayer';
import BlogCard from '../../components/BlogCard/BlogCard';
import BlogImage from '../../assets/BlogCard/Blog.png';
import { Grid } from '@mui/material';
import { get, post } from '../../API/axios';

const HomeLayer = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [latestProducts, setLatestProducts] = useState([]);
  const [topDiscountedProducts, setTopDiscountedProducts] = useState([]);
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    if (isLoading) {
      get(`product/latest-products/`).then((response)=>{
        setLatestProducts(response.data);
      }).catch((err)=>{
        setIsError(false);
        setIsLoading(false);
      })
      get(`product/featured-products/`).then((response)=>{
        setFeaturedProducts(response.data);
      }).catch((err)=>{
        setIsError(false);
        setIsLoading(false);
      })
      get(`product/top-discount-products/`).then((response)=>{
        setTopDiscountedProducts(response.data);
      }).catch((err)=>{
        setIsError(false);
        setIsLoading(false);
      })
      get(`/product/trending-products/`).then((response)=>{
        if(response.status===200){
          setTrendingProducts(response.data.results);
        }
      }).catch((err)=>{
        setIsError(false);
        setIsLoading(false);
      })
    }
    
  }, [isLoading])

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

  const blogs = [
    {
      'image': BlogImage,
      'author': 'SaberAli',
      'date': '21 August,2020',
      'topic': "Top esssential Trends in 2021",
      'description': 'More off this less hello samlande lied much over tightly circa horse taped mightly'
    },
    {
      'image': BlogImage,
      'author': 'SaberAli',
      'date': '21 August,2020',
      'topic': "Top esssential Trends in 2021",
      'description': 'More off this less hello samlande lied much over tightly circa horse taped mightly'
    },
    {
      'image': BlogImage,
      'author': 'SaberAli',
      'date': '21 August,2020',
      'topic': "Top esssential Trends in 2021",
      'description': 'More off this less hello samlande lied much over tightly circa horse taped mightly'
    }
  ]


  return (
    <>
      <MyCarousel items={topDiscountedProducts}/>
      <Container>
        <div className={styles['featured_section']}>
          <p className={styles['featured_text']}>Featured Product</p>
          <div><FeaturedProductLayer products = {featuredProducts} setIsLoading={setIsLoading}/></div>
        </div>
        <div className={styles['latest_product_section']}>
          <p className={styles['latest_product_text']}>Latest Product</p>
          <Grid container justifyContent='flex-start' spacing={2} columnSpacing={{ xs: 4, sm: 2, md: 3 }}>
            {
              latestProducts.map((item, index) => {
                return (
                  <Grid item key={index} md={3} lg={3}>
                    <LatestProductCard item={item} key={index} />
                  </Grid>
                )
              })
            }
          </Grid>
        </div>

        <div className={styles["offer_section"]}>
          <p className={styles["offer_text"]}>What Shopex Offer!</p>
          <Grid container alignItems='center' justifyContent='center' spacing={4}>
            {
              offers.map((item, index) => {
                return (
                  <Grid item key={index} lg={3} md={6} sm={6}>
                    <OfferCard
                      item={item}
                    />
                  </Grid>
                )
              })
            }
          </Grid>
        </div>
      </Container>

      {/* <ProductFeatureCard /> */}
      <div className={styles['trending_product_section']}>
        <p className={styles['trending_product']}>Trending Products</p>
        <div>
          <TrendingProductLayer item={trendingProducts}/>
        </div>
      </div>

      <div className={styles['trending_product_section']}>
        <p className={styles['trending_product']}>Discount Item</p>
        <Container>
          <DiscountLayer />
        </Container>
      </div>

      <Container>
        <div className={styles['featured_section']}>
          <p className={styles['featured_text']}>Top Categories</p>
          <div>
            <TopProductLayer />
          </div>
        </div>

        <div className={styles['featured_section']}>
          <p className={styles['featured_text']}>Latest Blog</p>
          <Grid container justifyContent={'center'} spacing={4} >
            {
              blogs.map((item, index) => {
                return (
                  <Grid item key={index}>
                    <BlogCard item={item} key={index} />
                  </Grid>
                )
              })
            }
          </Grid>
        </div>
      </Container>

    </>
  )
}

export default HomeLayer