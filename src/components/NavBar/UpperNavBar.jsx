import * as React from "react";
import { Container } from "@mui/system";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import style from "./UpperNavBar.module.scss";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const UpperNavBar = () => {
  return (
    <div className={style["parent"]}>
      <Container className={style["upperNav"]}>

        <div className={style["left"]}>
          <div className={style["email"]}>
            <EmailOutlinedIcon fontSize="lg" />
            <p>hamrobbms@gmail.com</p>
          </div>
          <div className={style["phone"]}>
            <LocalPhoneOutlinedIcon fontSize="lg" color="red"/>
            <p>9813293156</p>
          </div>
        </div>

        <div className={style["right"]}>
          <div className={style['language']}>
            <p>English</p>
            <ArrowDropDownOutlinedIcon />
          </div>
          <div className={style['currency']}>
            <p>USD</p>
            <ArrowDropDownOutlinedIcon />
          </div>
          <div className={style['currency']}>
            <p>Login</p>
            <PersonOutlineOutlinedIcon />
          </div>
          <div className={style['currency']}>
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
