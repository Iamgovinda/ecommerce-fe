import React from 'react';
import { Box } from '@mui/system';
import shopGridImage from "../../assets/Shops/shopImage.png";
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import styles from './ShopListCard.module.scss';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

const ShopListCard = () => {
    return (
        <Grid container >
            <Grid item lg={4} display="flex" justifyContent="center">
                <img src={shopGridImage} alt="shop_image" />
            </Grid>
            <Grid item lg={6}>
                <Box className={styles['box-parent']}>
                    <Box display={'flex'} gap={'5px'} justifyContent='flex-start' alignItems={'center'}>
                        <Typography className={styles["text-1"]}>Accumsan tincidunt</Typography>
                        <Box className={styles["box-1"]}></Box>
                        <Box className={styles["box-2"]}></Box>
                        <Box className={styles["box-3"]}></Box>
                    </Box>
                    <Box display={'flex'} alignItems={"center"}>
                        <span className={styles["price-discounted"]}>$26.00 </span> <span className={styles["price-initial"]}>$52.00</span> 
                        <StarOutlineIcon style={{fontSize:"20px", marginLeft:"10px"}}/>
                        <StarOutlineIcon style={{fontSize:"20px"}}/>
                        <StarOutlineIcon style={{fontSize:"20px"}}/>
                    </Box>
                    <Box>
                        <Typography className={styles['prod-description']}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
                        </Typography>
                    </Box>
                    <Box display={"flex"} gap={5}>
                        <Box className={styles['icon-box']}><ShoppingCartIcon/></Box>
                        <Box className={styles['icon-box']}><FavoriteBorderIcon/></Box>
                        <Box className={styles['icon-box']}><ZoomInIcon/></Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default ShopListCard