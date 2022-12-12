import * as React from 'react';
import { Container } from '@mui/system';
import style from "./LowerNavBar.module.scss";
import logo from '../../assets/Nav/logo.png';
export default function LowerNavBar() {
  return (
    <div className={style["parent"]}>
    <Container className={style["lowerNavBar"]}>
        <div className={style["left"]}>
            <div className="logo_section">
                <img src={logo} alt="" />
            </div>
            <div className={style['menu']}>
                <p style={{color:"red"}}>Home</p>
                <p>Pages</p>
                <p>Products</p>
                <p>Blog</p>
                <p>Shop</p>
                <p>Contact</p>
            </div>
        </div>
        <div className={style["right"]}>
            SearchBar
        </div>
    </Container>
    </div>
  );
}
