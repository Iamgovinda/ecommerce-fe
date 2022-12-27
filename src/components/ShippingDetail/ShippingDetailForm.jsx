import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import styles from "./ShippingDetailForm.module.scss";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { Grid } from "@mui/material";

export default function ShippingDetailForm() {
    return (
        <Container className={styles["parent"]}>
            <Box className={styles["parent-top"]}>
                <Box className={styles["texts-top"]}>
                    <Typography className={styles["contact-info-text"]}>
                        Contact Information
                    </Typography>
                    <Typography className={styles["do-you-have-account-text"]}>
                        Already have an account? Login
                    </Typography>
                </Box>
                <Box component="form" noValidate autoComplete="off">
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">
                            Email or mobile phone number
                        </InputLabel>
                        <Input />
                    </FormControl>
                </Box>
                <Box className={styles["stack-confirmation"]}>
                    <CheckCircleRoundedIcon className={styles["icon"]} fontSize="sm" />
                    <span>Shipping & taxes calculated at checkouts</span>
                </Box>
            </Box>
            <Box>
                <Typography className={styles["shipping-address-text"]}>
                    Shipping Address
                </Typography>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    className={styles["form-bottom"]}
                >
                    <Grid container spacing={1}>
                        <Grid item lg={6}>
                            <FormControl sx={{ m: 1 }} fullWidth variant="standard">
                                <InputLabel htmlFor="standard-adornment-amount">
                                    First Name (optional)
                                </InputLabel>
                                <Input />
                            </FormControl>
                        </Grid>
                        <Grid item lg={6}>
                            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-amount">
                                    Last Name
                                </InputLabel>
                                <Input />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container direction={'column'}>
                        <Grid item lg={12} md={6}  sm={3}>
                            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-amount">
                                    Email or mobile phone number
                                </InputLabel>
                                <Input />
                            </FormControl>
                        </Grid>
                        <Grid item lg={12} md={6}  sm={4}>
                            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-amount">
                                    Appaetnentment,suit,e.t.c (optinal)
                                </InputLabel>
                                <Input />
                            </FormControl>
                        </Grid>
                        <Grid item lg={12} md={6}  sm={4}>
                            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-amount">City</InputLabel>
                                <Input />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item lg={6}>
                            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-amount">Nepal</InputLabel>
                                <Input />
                            </FormControl>
                        </Grid>
                        <Grid item lg={6}>
                            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-amount">Postal Code</InputLabel>
                                <Input />
                            </FormControl>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box>
                <Button className={styles['btn']}> Continue Shipping</Button>
            </Box>
        </Container>
    );
}
