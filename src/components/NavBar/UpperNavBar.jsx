import * as React from "react";
import { Container } from "@mui/system";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import styles from "./UpperNavBar.module.scss";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const UpperNavBar = () => {
  return (
    <div className={styles["parent"]}>
      <Container className={styles["upperNav"]}>
        
        <div className={styles["left"]}>
          <div className={styles["email"]}>
            <EmailOutlinedIcon fontSize="lg" />
            <p>mhhasanul@gmail.com</p>
          </div>
          <div className={styles["phone"]}>
            <LocalPhoneOutlinedIcon fontSize="lg" color="red"/>
            <p>(12345)67890</p>
          </div>
        </div>

        <div className={styles["right"]}>
          <div className={styles['language']}>
            <p>English</p>
            <ArrowDropDownOutlinedIcon />
          </div>
          <div className={styles['currency']}>
            <p>USD</p>
            <ArrowDropDownOutlinedIcon />
          </div>
          <div className={styles['currency']}>
            <p>Login</p>
            <PersonOutlineOutlinedIcon />
          </div>
          <div className={styles['currency']}>
            <p>Wishlist</p>
            <FavoriteBorderOutlinedIcon fontSize="md" />
          </div>
          <ShoppingCartOutlinedIcon style={{marginLeft:"10px"}}/>
        </div>

      </Container>
    </div>
  );
};

export default UpperNavBar;
