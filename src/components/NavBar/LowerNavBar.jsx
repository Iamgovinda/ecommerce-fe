import * as React from 'react';
import { Container } from '@mui/system';
import style from "./LowerNavBar.module.scss";
import logo from '../../assets/Nav/logo.png';
import SearchBar from '../SearchBar/SearchBar';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import Link
export default function LowerNavBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const menuItems = ['Home', 'Pages', 'Product', 'Blog', 'Shop', 'Contact']

    return (
        <div className={style["parent"]}>
            <Container className={style["lowerNavBar"]}>
                <div className={style["left"]}>
                    <div className="logo_section">
                        <img src={logo} alt="" />
                    </div>
                    <div className={style['menu']}>
                        <p style={{ color: "red" }}>Home</p>
                        <p>Pages</p>
                        <p>Products</p>
                        <p>Blog</p>
                        <p>Shop</p>
                        <p>Contact</p>
                    </div>
                </div>
                <div className={style["right"]}>
                    <SearchBar />
                    <div className={style["toggle"]}>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <MenuIcon />

                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem> */}
                            {
                                menuItems.map((item) => {
                                    return (
                                        <MenuItem onClick={handleClose}>{item}</MenuItem>
                                    )
                                })
                            }
                        </Menu>
                    </div>
                </div>

            </Container>
        </div>
    );
}
