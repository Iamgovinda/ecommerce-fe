import React from 'react';
import { Grid, Container, Stack } from '@mui/material';
import logo from '../../assets/Nav/logo.png';
import styles from './FooterLayer.module.scss';
import SearchBar from '../SearchBar/SearchBar';
const FooterLayer = () => {
    return (
        <div className={styles['footer']}>
            <Container >
                <Grid container direction='horizontal' gap={6}>

                    <Grid item md={3}>
                        <Stack gap={4}>
                            <div className="logo">
                                <img src={logo} alt="logo" />
                            </div>
                            <SearchBar />
                            <div>
                                <p className={styles['info']}>Contact Info</p>
                                <p className={styles['info']}>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                            </div>
                        </Stack>
                    </Grid>
                    <Grid item md={2}>
                        <p className={styles["catagories"]}>
                            Catagories
                        </p>
                        <p className={styles['catagory']}>Laptops & Computers</p>
                        <p className={styles['catagory']}>Cameras & Photography</p>
                        <p className={styles['catagory']}>Smart Phones & Tablets</p>
                        <p className={styles['catagory']}>Video Games & Consoles</p>
                        <p className={styles['catagory']}>Waterproof Headphones</p>
                    </Grid>
                    <Grid item md={2}>
                        <p className={styles["customer-care"]}>
                            Customer Care
                        </p>
                        <p className={styles["customer-care-item"]}>My Account</p>
                        <p className={styles["customer-care-item"]}>Discount</p>
                        <p className={styles["customer-care-item"]}>Returns</p>
                        <p className={styles["customer-care-item"]}>Order History</p>
                        <p className={styles["customer-care-item"]}>Order Tracking</p>
                    </Grid>
                    <Grid item md={3}>
                        <p className={styles["pages"]}>
                            Pages
                        </p>
                        <p className={styles["page"]}>Blog</p>
                        <p className={styles["page"]}>Browse the Shop</p>
                        <p className={styles["page"]}>Category</p>
                        <p className={styles["page"]}>Returns</p>
                        <p className={styles["page"]}>Orders History</p>
                        <p className={styles["page"]}>Order Tracking</p>
                    </Grid>

                </Grid>
            </Container>
        </div>
    )
}

export default FooterLayer