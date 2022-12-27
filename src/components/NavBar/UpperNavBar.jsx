import * as React from "react";
import { Container } from "@mui/system";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import styles from "./UpperNavBar.module.scss";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";
// import MenuIcon from '@mui/icons-material/Menu';

const UpperNavBar = () => {
  const [language, setLanguage] = React.useState('English');
  const [currency, setCurrency] = React.useState('USD');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElForCurrency, setAnchorElForCurrency] = React.useState(null);
  const open = Boolean(anchorEl);
  const openForCurrency = Boolean(anchorElForCurrency);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickForCurrency = (event) => {
    setAnchorElForCurrency(event.currentTarget);
  }
  const handleClose = (language) => {
    setAnchorEl(null);
    setLanguage(language);
  };
  const handleCloseForCurrency = (currency) => {
    setAnchorElForCurrency(null);
    setCurrency(currency);
  };
  // const menuItems = ['Login', 'Cart', 'WishList']
  return (
    <div className={styles["parent"]}>
      <Container className={styles["upperNav"]}>

        <div className={styles["left"]}>
          <div className={styles["email"]}>
            <EmailOutlinedIcon fontSize="lg" />
            <p>mhhasanul@gmail.com</p>
          </div>
          <div className={styles["phone"]}>
            <LocalPhoneOutlinedIcon fontSize="lg" color="red" />
            <p>(12345)67890</p>
          </div>
        </div>

        <div className={styles["right"]}>
            <div
              className={styles['language']}
              id="language-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              {language}
              <ArrowDropDownOutlinedIcon style={{ color: 'white' }} fontSize='medium' />

            </div>
            <Menu
              id="language-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={() => handleClose(language)}
              MenuListProps={{
                'aria-labelledby': 'language-button',
              }}
            >
              <MenuItem onClick={() => handleClose("English")} >English</MenuItem>
              <MenuItem onClick={() => handleClose("Nepali")} >Nepali</MenuItem>
              <MenuItem onClick={() => handleClose("Spanish")} >Spanish</MenuItem>
            </Menu>
            <div
              className={styles['currency']}
              id="currency-button"
              aria-controls={open ? 'language-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClickForCurrency}
            >
              {currency}
              <ArrowDropDownOutlinedIcon style={{ color: 'white' }} fontSize='medium' />
            </div>
            <Menu
              id="currency-menu"
              anchorEl={anchorElForCurrency}
              open={openForCurrency}
              onClose={() => handleCloseForCurrency(currency)}
              MenuListProps={{
                'aria-labelledby': 'currency-button',
              }}
            >
              <MenuItem onClick={() => handleCloseForCurrency("USD")} >USD</MenuItem>
              <MenuItem onClick={() => handleCloseForCurrency("NPR")} >NPR</MenuItem>
              <MenuItem onClick={() => handleCloseForCurrency("INR")} >INR</MenuItem>
            </Menu>
          <div className={styles['login']}>
            <p><Link to={'/login'}>Login</Link></p>
            <PersonOutlineOutlinedIcon />
          </div>
          <div className={styles['wishlist']}>
            <p>Wishlist</p>
            <FavoriteBorderOutlinedIcon fontSize="md" />
            <ShoppingCartOutlinedIcon style={{ marginLeft: "10px" }} className={styles["shopping_cart"]} />

          </div>
        </div>

      </Container>
    </div>
  );
};

export default UpperNavBar;
