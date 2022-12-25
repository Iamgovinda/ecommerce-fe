import BreadCrumbCard from "../../components/BreadCrumbCard/BreadCrumbCard";
import React from 'react';
import ShopGridCard from "../../components/ShopCard/ShopGridCard";
import { Grid, Stack } from "@mui/material";
import { Container } from "@mui/material";
import ToolBarCard from "../../components/ToolBarCard/ToolBarCard";
import shopGridImage from "../../assets/Shops/shopImage.png";
import ShopListCard from "../../components/ShopCard/ShopListCard";


const ShopGridLayer = () => {
    const [view, setView] = React.useState('Grid');
    console.log(view);
    const shop_grid_data = [
        {
            "image": shopGridImage,
            "name": "Ultricies condimentum imperdiet",
            "initial_price": "$42.00",
            "final_price": "$26.00"
        },
        {
            "image": shopGridImage,
            "name": "Ultricies condimentum imperdiet",
            "initial_price": "$42.00",
            "final_price": "$26.00"
        },
        {
            "image": shopGridImage,
            "name": "Ultricies condimentum imperdiet",
            "initial_price": "$42.00",
            "final_price": "$26.00"
        },
        {
            "image": shopGridImage,
            "name": "Ultricies condimentum imperdiet",
            "initial_price": "$42.00",
            "final_price": "$26.00"
        },
        {
            "image": shopGridImage,
            "name": "Ultricies condimentum imperdiet",
            "initial_price": "$42.00",
            "final_price": "$26.00"
        },
        {
            "image": shopGridImage,
            "name": "Ultricies condimentum imperdiet",
            "initial_price": "$42.00",
            "final_price": "$26.00"
        },
        {
            "image": shopGridImage,
            "name": "Ultricies condimentum imperdiet",
            "initial_price": "$42.00",
            "final_price": "$26.00"
        },
        {
            "image": shopGridImage,
            "name": "Ultricies condimentum imperdiet",
            "initial_price": "$42.00",
            "final_price": "$26.00"
        },
        {
            "image": shopGridImage,
            "name": "Ultricies condimentum imperdiet",
            "initial_price": "$42.00",
            "final_price": "$26.00"
        },
        {
            "image": shopGridImage,
            "name": "Ultricies condimentum imperdiet",
            "initial_price": "$42.00",
            "final_price": "$26.00"
        },
        {
            "image": shopGridImage,
            "name": "Ultricies condimentum imperdiet",
            "initial_price": "$42.00",
            "final_price": "$26.00"
        },
        {
            "image": shopGridImage,
            "name": "Ultricies condimentum imperdiet",
            "initial_price": "$42.00",
            "final_price": "$26.00"
        }
    ]
    return (
        <>
            {
                view && view === "Grid" && (
                    <BreadCrumbCard view={"Shop Grid Default"} />

                )
            }
            {
                view && view === "List" && (
                    <BreadCrumbCard view={"Shop List Default"} />
                )
            }
            <Container>
                <ToolBarCard setView={setView} />
                {
                    view && view === "Grid" && (
                        <Grid container justifyContent="center" spacing={4}>
                            {
                                shop_grid_data.map((item, index) => {

                                    return (
                                        <>
                                            <Grid item key={index} lg={3} md={4} sm={8}>
                                                <ShopGridCard item={item} />
                                            </Grid>
                                        </>
                                    )
                                })
                            }
                        </Grid>
                    )
                }
                {
                    view && view === "List" && (
                        <Stack spacing={5}>
                            {
                                shop_grid_data.map((item, index) => {
                                    return (
                                        <>
                                            <ShopListCard item={item} />
                                        </>
                                    )
                                })
                            }
                        </Stack>
                    )
                }

            </Container>
        </>
    )
}

export default ShopGridLayer