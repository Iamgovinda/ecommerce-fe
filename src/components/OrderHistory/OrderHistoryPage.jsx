import React from 'react';
import BreadCrumbCard from '../BreadCrumbCard/BreadCrumbCard';
import { Container } from '@mui/material';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';

const OrderHistoryPage = () => {
    return (
        <>
            <BreadCrumbCard view="My Order History" />
            <Container>
                <div>OrderHistoryPage</div>

            </Container>

        </>
    )
}

export default OrderHistoryPage