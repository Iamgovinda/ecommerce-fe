import * as React from "react";
import { Container } from "@mui/system";
import style from "./LowerNavBar.module.scss";
import logo from "../../assets/Nav/logo.png";
import SearchBar from "../SearchBar/SearchBar";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { Box } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
export default function LowerNavBar() {
    const [anchorElForPages, setAnchorElForPages] = React.useState(null);
    const open_page = Boolean(anchorElForPages);
    const [pageName, setPageName] = React.useState("Home");
    const handleClickForPages = (event) => {
        setAnchorElForPages(event.currentTarget);
    };
    const handleCloseForPages = (page) => {
        setAnchorElForPages(null);
        setPageName(page);
    };
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    // const toShopLayer = () => {
    //     window.location.replace("/shop-layer")
    // }
    const menuItems = ["Home", "Pages", "Product", "Blog", "Shop", "Contact"];

    return (
        <div className={style["parent"]}>
            <Container className={style["lowerNavBar"]}>
                <div className={style["left"]}>
                    <div className="logo_section">
                        <Link to={"/"}>
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <div className={style["menu"]}>
                        <Box
                            id="basic-button"
                            aria-controls={open_page ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open_page ? "true" : undefined}
                            onClick={handleClickForPages}
                            sx={{ display: "flex", alignItems: "center" }}
                        >
                            <p>{pageName}</p>
                            <ArrowDropDownOutlinedIcon
                                style={{ color: "#FB2E86" }}
                                fontSize="medium"
                            />
                        </Box>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorElForPages}
                            open={open_page}
                            onClose={() => handleCloseForPages(pageName)}
                            MenuListProps={{
                                "aria-labelledby": "basic-button",
                            }}
                        >
                            <MenuItem onClick={() => handleCloseForPages("Shop")}>
                                <Link to="shop-layer" className={style["common-menu-txt"]}>
                                    Shop
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={() => handleCloseForPages("About us")}>
                                <Link to="about" className={style["common-menu-txt"]}>
                                    About
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={() => handleCloseForPages("LogOut")}>
                                Logout
                            </MenuItem>
                        </Menu>
                        <Link className={style["common-menu-txt"]} to={"/shop-layer"}>
                            Shop
                        </Link>
                        <Link to="/about" className={style["common-menu-txt"]}>
                            About
                        </Link>
                        <Link className={style["contact-txt"]} to={"/contact-us"}>
                            Contact
                        </Link>
                        <Link to="/FAQ" className={style["common-menu-txt"]}>
                            FAQ
                        </Link>
                    </div>
                </div>
                <div className={style["right"]}>
                    <SearchBar />
                    <div className={style["toggle"]}>
                        <Button
                            id="basic-button"
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
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
                                "aria-labelledby": "basic-button",
                            }}
                        >
                            {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem> */}
                            {menuItems.map((item, index) => {
                                return <MenuItem onClick={handleClose} key={index}>{item}</MenuItem>;
                            })}
                        </Menu>
                    </div>
                </div>
            </Container>
        </div>
    );
}
