import { Container } from "@mui/system";
import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from "./RelatedProduct.module.scss";
import StarOutline from "@mui/icons-material/StarOutline";
import {Box} from "@mui/system";
const RelatedProductCard = (props) => {
    return (
        <Container>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia sx={{ minHeight: 400 }} image={props.item.image} title="green iguana" />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className={styles["product-name"]}
                    >
                        <span>{props.item.name}</span>{" "}
                        <Box>
                            <StarOutline fontSize="sm" className={styles["star-icon"]} />
                            <StarOutline fontSize="sm" className={styles["star-icon"]} />
                            <StarOutline fontSize="sm" className={styles["star-icon"]} />
                            <StarOutline fontSize="sm" className={styles["star-icon"]} />
                            <StarOutline fontSize="sm" className={styles["star-icon"]} />
                        </Box>
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        className={styles["product-price"]}
                    >
                        {props.item.price}
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
};

export default RelatedProductCard;
