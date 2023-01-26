import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./OrderHistoryCard.module.scss";
import { Container, Box } from "@mui/system";
import { get, remove } from "../../API/axios";
import { toast } from "react-toastify";
import ProductView from "../CartTable/ProductView";
import BreadCrumbCard from "../BreadCrumbCard/BreadCrumbCard";
import noDataImg from '../../assets/ProductCard/no-product-found.png';

const OrderHistoryPage = (props) => {
    // const [quantity, setQuantity] = React.useState();
    // console.log("Propsss: ", props);
    const [isLoading, SetIsLoading] = useState(true);
    const [orderData, setOrderData] = useState([]);
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (isLoading) {
            get(`/order/recent-orders/`).then((response) => {
                if (response.status === 200) {
                    setOrderData(response?.data);
                    SetIsLoading(false);
                }
            })
        }
    }, [isLoading, orderData])

    function createData(uuid, product, date, price, quantity, total, status) {
        return { uuid, product, date, price, quantity, total, status };
    }

    const rows = [];
    orderData?.map((item) => {
        return rows?.push(
            createData(
                item?.uuid,
                {
                    name: item?.product?.name,
                    color: "Brown",
                    size: "XXL",
                    image: item?.product?.images[0]?.file,
                    quantity: item?.product?.quantity,
                },
                item?.updated_at,
                item?.product?.base_price - item?.product?.discount_price,
                item?.quantity,
                item?.quantity *
                (item?.product?.base_price - item?.product?.discount_price),
                item?.status

            )
        );
    });

    return (
        <>
            <BreadCrumbCard view="My Orders" />

            <Container sx={{ marginTop: "2rem" }}>
                {
                    (orderData && orderData.length > 0) ? (
                        <>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className={styles["table-ceil"]}>Product</TableCell>
                                            <TableCell className={styles["table-ceil"]}>Ordered At</TableCell>
                                            <TableCell className={styles["table-ceil"]} align="left">
                                                Price
                                            </TableCell>
                                            <TableCell className={styles["table-ceil"]} align="left">
                                                Quantity
                                            </TableCell>
                                            <TableCell className={styles["table-ceil"]} align="left">
                                                Total
                                            </TableCell>
                                            <TableCell className={styles["table-ceil"]} align="left">
                                                Status
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows?.map((row, index) => (
                                            <TableRow
                                                key={index}
                                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                            >
                                                <TableCell
                                                    component="th"
                                                    scope="row"
                                                    className={styles["table-cell"]}
                                                >
                                                    <ProductView item={row?.product} />
                                                </TableCell>
                                                <TableCell align="left" className={styles["table-cell"]}>
                                                    Rs {row?.date}
                                                </TableCell>
                                                <TableCell align="left" className={styles["table-cell"]}>
                                                    Rs {row?.price}
                                                </TableCell>
                                                <TableCell align="left" className={styles["table-cell"]}>
                                                    <div
                                                        className={styles["box-quantity"]}
                                                    // onClick={() =>
                                                    //   addQuantity(row.uuid, row.quantity, row.product.quantity)
                                                    // }
                                                    >
                                                        {row?.quantity}{" "}

                                                    </div>
                                                </TableCell>
                                                <TableCell align="left" className={styles["table-cell"]}>
                                                    {row?.total}
                                                </TableCell>
                                                <TableCell align="left" className={styles["table-cell"]}>
                                                    {row?.status}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </>
                    ):(
                        <Box>
                            <img src={noDataImg} alt="" />
                        </Box>
                    )
                }

            </Container>
        </>
    );
};

export default OrderHistoryPage;
