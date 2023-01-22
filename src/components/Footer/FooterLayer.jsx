import React from 'react';
import { Grid, Container, Stack } from '@mui/material';
import logo from '../../assets/Nav/logo.png';
import styles from './FooterLayer.module.scss';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
const FooterLayer = () => {
    return (
        <div className={styles['footer']}>
            <Container >
                <Grid container gap={6}>

                    <Grid item md={3}>
                        <Stack gap={4}>
                            <div className="logo">
                                <img src={logo} alt="logo" />
                            </div>
                            <SearchBar />
                            <div>
                                <p className={styles['info']}>Contact Info</p>
                                <p className={styles['info']}>Ekantakuna, Lalitpur</p>
                            </div>
                        </Stack>
                    </Grid>
                    <Grid item md={2}>
                        <p className={styles["catagories"]}>
                            Catagories
                        </p>
                        <p className={styles['catagory']}>Double Bed</p>
                        <p className={styles['catagory']}>Chair</p>
                        <p className={styles['catagory']}>Bed</p>
                        <p className={styles['catagory']}>Sofa</p>
                        <p className={styles['catagory']}>Bench</p>
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
                        <p><Link to={'shop-layer'} className={styles["page"]}>Shop Page</Link></p>
                        <p><Link to={'/order-history'} className={styles["page"]}>Orders History</Link></p>
                        <p><Link to={'/about'} className={styles["page"]}>About</Link></p>
                        <p><Link to={'/contact'} className={styles["page"]}>Contact</Link></p>
                        <p><Link to={'/FAQ'} className={styles["page"]}>FAQ</Link></p>
                    </Grid>

                </Grid>
            </Container>
        </div>
    )
}

export default FooterLayer