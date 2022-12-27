import React from 'react';
import BreadCrumbCard from '../../components/BreadCrumbCard/BreadCrumbCard';
import { Button, Container, TextField } from '@mui/material';
import { Grid, Stack, Box } from '@mui/material';
import styles from './FAQLayer.module.scss';
const FAQLayer = () => {
    return (
        <>
            <BreadCrumbCard view={'FAQ'} />
            <Container>
                <Grid container spacing={4} justifyContent='center' alignItems={'center'} >
                    <Grid item lg={6}>
                        <Stack>
                            <p className={styles['text-top']}>Generel Information</p>
                            <Box>
                                <p className={styles['text-common-1']}>Eu dictumst cum at sed euismood condimentum?</p>
                                <p className={styles['text-common-2']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
                            </Box>
                            <Box>
                                <p className={styles['text-common-1']}>Magna bibendum est fermentum eros.</p>
                                <p className={styles['text-common-2']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
                            </Box>
                            <Box>
                                <p className={styles['text-common-1']}>Odio muskana hak eris conseekin sceleton?</p>
                                <p className={styles['text-common-2']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
                            </Box>
                            <Box>
                                <p className={styles['text-common-1']}>Elit id blandit sabara boi velit gua mara?</p>
                                <p className={styles['text-common-2']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item lg={6}>
                        <Box className={styles['grid-item-2']}>
                            <Box>
                                <p className={styles['text-form-top']}>Ask a Question</p>
                            </Box>
                            <Stack gap={3}>
                                <TextField
                                    label='Your Name*'
                                    className={styles['textfield-input']}
                                ></TextField>
                                <TextField
                                    label='Your Subject*'
                                    className={styles['textfield-input']}
                                ></TextField>
                                <TextField
                                    label='Type Your Message*'
                                    className={styles['textfield-message']}
                                ></TextField>
                                <Button className={styles['btn']}>Send Mail</Button>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default FAQLayer