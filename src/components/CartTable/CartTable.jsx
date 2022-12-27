import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from './CartTable.module.scss';
import ProductView from './ProductView';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
const CartTable = () => {
    function createData(product, price, quantity, total) {
        return { product, price, quantity, total };
    }

    const rows = [
        createData({ name: 'UT diam consequat', color: 'Brown', size: 'XXL' }, 32, 6.0, 219),
        createData({ name: 'UT diam consequat', color: 'Brown', size: 'XXL' }, 32, 6.0, 219),
        createData({ name: 'UT diam consequat', color: 'Brown', size: 'XXL' }, 32, 6.0, 219),
        createData({ name: 'UT diam consequat', color: 'Brown', size: 'XXL' }, 32, 6.0, 219),

    ];
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={styles['table-ceil']}>Product</TableCell>
                            <TableCell className={styles['table-ceil']} align="right">Price</TableCell>
                            <TableCell className={styles['table-ceil']} align="right">Quantity</TableCell>
                            <TableCell className={styles['table-ceil']} align="right">Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" className={styles['table-cell']}>
                                    <ProductView item={row.product} />
                                </TableCell>
                                <TableCell align="right" className={styles['table-cell']}>{row.price}</TableCell>
                                <TableCell align="right" className={styles['table-cell']}>{row.quantity}</TableCell>
                                <TableCell align="right" className={styles['table-cell']}>{row.total}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box className={styles['button-section']}>
                    <Button className={styles['btn']}>Update Curt</Button>
                    <Button className={styles['btn']}>Clear Curt</Button>
            </Box>
        </>
    );

}

export default CartTable