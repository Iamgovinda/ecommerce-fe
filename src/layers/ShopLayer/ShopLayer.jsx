import BreadCrumbCard from "../../components/BreadCrumbCard/BreadCrumbCard";
import React, { useEffect, useState } from 'react';
import ShopGridCard from "../../components/ShopCard/ShopGridCard";
import { Grid, Box } from "@mui/material";
import { Container } from "@mui/material";
import ToolBarCard from "../../components/ToolBarCard/ToolBarCard";
import ShopListCard from "../../components/ShopCard/ShopListCard";
import { get } from '../../API/axios';
import noDataImg from '../../assets/ProductCard/no-product-found.png';
import Pagination from '@mui/material/Pagination';


const ShopGridLayer = () => {
    const [view, setView] = React.useState('Grid');
    const [product, setProduct] = React.useState([]);
    const [productsCount, setProductsCount] = React.useState();
    const [setIsLoading] = React.useState(true);
    const [setIsError] = React.useState(false);
    // const { products } = useProductContext();
    const [limit, setLimit] = useState(10);
    const [offset, setOffset] = useState(0);
    const [page, setPage] = React.useState(1);
    const [ordering, setOrdering] = React.useState();



    useEffect(() => {
        const filters = {
            limit: limit,
            offset: offset,
            ordering: ordering
        }

        get(`product`, filters).then((response) => {
            setProduct(response.data.results);
            setProductsCount(response.data.page.count);
            setIsLoading(false);
        }
        ).then((error) => {
            console.log(error);
            setIsError(true);
            setIsLoading(false);
        })

    }, [limit, offset, ordering])

    const handleChange = (event, value) => {
        setOffset(limit * (value - 1));
        setPage(value)
    };
    return (
        <>
            {
                view && view === "Grid" && (
                    <BreadCrumbCard view={"Shop Grid View"} />

                )
            }
            {
                view && view === "List" && (
                    <BreadCrumbCard view={"Shop List View"} />
                )
            }
            <Container>
                <ToolBarCard setView={setView} count={product.length} setLimit={setLimit} setIsLoading={setIsLoading} setOrdering={setOrdering} />
                {
                    (product && product?.length > 0) ? (
                        <>
                            {
                                view && view === "Grid" && (
                                    <Grid container justifyContent="flex-start" spacing={4}>
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
                                                    <ShopListCard item={item} key={index} setIsLoading={setIsLoading} />
                                                )
                                            })
                                        }
                                    </>
                                )
                            }
                        </>
                    ) : (<>
                        {
                            (!setIsLoading) && (<Box>
                                <img src={noDataImg} alt="" />
                            </Box>)
                        }
                    </>)
                }
                <br />
                <Pagination page={page} count={Math.ceil(productsCount / limit)} variant="outlined" color="secondary" onChange={handleChange} />
            </Container>
        </>
    )
}

export default ShopGridLayer