import React from 'react';
import { Container } from '@mui/system';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
import image from '../../assets/DiscountLayer/img.png';
import DoneIcon from '@mui/icons-material/Done';
import styles from './DiscountLayer.module.scss';
import { Button } from '@mui/material';

const DiscountLayer = () => {
    return (
            <div className={styles['main']}>
                <div className={styles['top']}>
                    <p>Wood Chair</p>
                    <p>Plastic Chair</p>
                    <p>Sofa Colletion</p>
                </div>
                <div className={styles["bottom"]}>
                    <div className={styles["left"]}>
                        <p className={styles["l_top"]}>
                            20% Discount Of All Products
                        </p>
                        <p className={styles["l_mid"]}>
                            Eams Sofa Compact
                        </p>
                        <p className={styles["l_btn"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                        <div className={styles["texts"]}>
                            <div className={styles["texts-left"]}>
                                <div className={styles['text-item']}>
                                    <DoneIcon fontSize='md'/>
                                    <p>Material expose like metals</p>
                                </div>
                                <div className={styles['text-item']}>
                                    <DoneIcon fontSize='md'/>
                                    <p>Material expose like metals</p>
                                </div>
                            </div>
                            <div className={styles["texts-right"]}>
                                <div className={styles['text-item']}>
                                    <DoneIcon fontSize='md'/>
                                    <p>Material expose like metals</p>
                                </div>
                                <div className={styles['text-item']}>
                                    <DoneIcon fontSize='md'/>
                                    <p>Material expose like metals</p>
                                </div>
                            </div>
                            <Button style={{backgroundColor:'#FB2E86', color:'white', width:'200px'}}>Shop Now</Button>
                        </div>

                    </div>
                    <div className={styles["right"]}>
                        <img src={image} alt="img" />
                    </div>
                </div>
            </div>
    )
}

export default DiscountLayer