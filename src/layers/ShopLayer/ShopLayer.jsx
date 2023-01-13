import BreadCrumbCard from "../../components/BreadCrumbCard/BreadCrumbCard";
import React, { useEffect } from 'react';
import ShopGridCard from "../../components/ShopCard/ShopGridCard";
import { Grid, Stack } from "@mui/material";
import { Container } from "@mui/material";
import ToolBarCard from "../../components/ToolBarCard/ToolBarCard";
import shopGridImage from "../../assets/Shops/shopImage.png";
import ShopListCard from "../../components/ShopCard/ShopListCard";
import { get, post } from '../../API/axios';
import { useProductContext } from "../../context/ProductContext";


const ShopGridLayer = () => {
    const [view, setView] = React.useState('Grid');
    const [product, setProduct] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [isError, setIsError] = React.useState(false);
    const { products } = useProductContext();
    useEffect(() => {
        if (products === undefined || products?.length===0){
            if (isLoading)
            get(`product`).then((response) => {
                setProduct(response.data.results);
                setIsLoading(false);
            }
            ).then((error) => {
                console.log(error);
                setIsError(true);
                setIsLoading(false);
            })
        }
        else if(products === false){
            setProduct([]);
        }
        else{
            setProduct(products);
        }

    }, [isLoading, products])
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
                <ToolBarCard setView={setView} count={product.length} />
                {
                    view && view === "Grid" && (
                        <Grid container justifyContent="center" spacing={4}>
                            {
                                product.map((item, index) => {

                                    return (
                                        <Grid item key={index} lg={3} md={4} sm={8}>
                                            <ShopGridCard item={item} key={index} />
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    )
                }
                {
                    view && view === "List" && (
                        <>
                            {
                                product.map((item, index) => {
                                    return (
                                        <ShopListCard item={item} key={index} />
                                    )
                                })
                            }
                        </>
                    )
                }

            </Container>
        </>
    )
}

export default ShopGridLayer