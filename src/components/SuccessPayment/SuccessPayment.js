import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
const SuccessPayment = () => {
    console.log("=========================successPayment=============");
    return (
        <Box sx={{ textAlign: 'center', marginTop: '100px' }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Payment Successful!
            </Typography>
            <Typography variant="body1" gutterBottom>
                Thank you for your payment. Your order has been successfully processed.
            </Typography>
            <Button variant="contained" component={Link} to="/" size="large" sx={{ marginTop: '30px' }}>
                Go to Home
            </Button>
        </Box>
    );
};


export default SuccessPayment;