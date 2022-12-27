import React from "react";
import { Container, Box, TextField } from "@mui/material";
import styles from "./ContactUsLayer.module.scss";
import Circle from "../../components/Circle/Circle";
import { Grid, Button } from "@mui/material";
import BreadCrumbCard from "../../components/BreadCrumbCard/BreadCrumbCard";
import contactUsImage from "../../assets/ContactUs/Contact.png";

const ContactUsLayer = () => {
    return (
        <>
            <BreadCrumbCard view="Contact Us" />
            <Box>
                <Container>
                    <Grid container spacing={5}>
                        <Grid item lg={6}>
                            <p className={styles["text-1"]}>Information About us</p>
                            <p className={styles["text-common"]}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                                neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
                                tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
                                vitae lobortis quis bibendum quam.
                            </p>

                            <Box display={"flex"} gap={1.5}>
                                <Circle height={25} width={25} bg="#5726DF" />
                                <Circle height={25} width={25} bg="#FF27B7" />
                                <Circle height={25} width={25} bg="#37DAF3" />
                            </Box>
                        </Grid>
                        <Grid item lg={6}>
                            <p className={styles["text-1"]}>Contact Way</p>
                            <Grid container spacing={5}>
                                <Grid item>
                                    <Box
                                        display={"flex"}
                                        alignItems="center"
                                        justifyContent={"center"}
                                        gap={1}
                                    >
                                        <Circle height={45} width={45} bg="#5726DF" />
                                        <Box>
                                            <p className={styles["text-common"]}>Tel: 877-67-88-99</p>
                                            <p className={styles["text-common"]}>
                                                E-Mail: shop@store.com
                                            </p>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box
                                        display={"flex"}
                                        alignItems="center"
                                        justifyContent={"center"}
                                        gap={1}
                                    >
                                        <Circle height={45} width={45} bg="#FB2E86" />
                                        <Box>
                                            <p className={styles["text-common"]}>Support Forum</p>
                                            <p className={styles["text-common"]}>For over 24hr</p>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container spacing={5}>
                                <Grid item>
                                    <Box
                                        display={"flex"}
                                        alignItems="center"
                                        justifyContent={"center"}
                                        gap={1}
                                    >
                                        <Circle height={45} width={45} bg="#FFB265" />
                                        <Box>
                                            <p className={styles["text-common"]}>
                                                20 Margaret st, London
                                            </p>
                                            <p className={styles["text-common"]}>
                                                Great britain, 3NM98-LK
                                            </p>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box
                                        display={"flex"}
                                        alignItems="center"
                                        justifyContent={"center"}
                                        gap={1}
                                    >
                                        <Circle height={45} width={45} bg="#1BE982" />
                                        <Box>
                                            <p className={styles["text-common"]}>
                                                Free standard shipping
                                            </p>
                                            <p className={styles["text-common"]}>on all orders.</p>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} marginTop={15}>
                        <Grid item lg={6} display='flex' flexDirection={'column'} gap={5}>
                            <Box>
                                <p className={styles["text-1"]}>Get In Touch</p>
                                <p className={styles["text-common"]}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Mattis neque ultrices tristique amet erat vitae eget dolor los
                                    vitae lobortis quis bibendum quam.
                                </p>
                            </Box>
                            <Grid container spacing={3}>
                                <Grid item lg={6}>
                                    <TextField
                                        fullWidth
                                        label="Your Name*"
                                        placeholder=""
                                    ></TextField>
                                </Grid>
                                <Grid item lg={6}>
                                    <TextField
                                        fullWidth
                                        type={"email"}
                                        label="Your Email*"
                                        placeholder=""
                                    ></TextField>
                                </Grid>
                            </Grid>
                            <TextField
                                fullWidth
                                label="Subject*"
                                placeholder=""
                            ></TextField>

                            <TextField
                                fullWidth
                                label="Type Your Message*"
                                placeholder=""
                                className={styles['text-field']}
                            ></TextField>
                            <Button className={styles['btn']}>
                                Send Mail
                            </Button>
                        </Grid>
                        <Grid item lg={6}>
                            <img src={contactUsImage} alt="" />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default ContactUsLayer;
