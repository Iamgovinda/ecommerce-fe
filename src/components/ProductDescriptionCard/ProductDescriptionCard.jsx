import React from 'react';
import { Stack, Box, Container } from '@mui/system';
import { Typography } from '@mui/material';
import styles from './ProductDescriptionCard.module.scss';

const ProductDescriptionCard = () => {
    return (
        <Box className={styles['parent']}>
            <Container>
                <Stack gap={5} alignItems='flex-start'>
                    <Box className={styles['top-texts']}>
                        <Typography className={styles['texts-1']}>Description</Typography>
                        <Typography className={styles['texts-1']}>Additional Info</Typography>
                        <Typography className={styles['texts-1']}>Reviews</Typography>
                        <Typography className={styles['texts-1']}>Video</Typography>
                    </Box>
                    <Box>
                        <Typography className={styles['mid-top']}>Varius tempor.</Typography>
                        <Typography className={styles['texts-2']}>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</Typography>
                    </Box>
                    <Box>
                        <Typography className={styles['mid-top']}>
                            More details
                        </Typography>
                        <ul>
                            <li className={styles['texts-2']}>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
                            <li className={styles['texts-2']}>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
                            <li className={styles['texts-2']}>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
                            <li className={styles['texts-2']}>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
                            <li className={styles['texts-2']}>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>

                        </ul>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default ProductDescriptionCard