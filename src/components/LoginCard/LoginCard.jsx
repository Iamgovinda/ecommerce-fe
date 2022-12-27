import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { Stack, TextField } from '@mui/material';
import styles from './LoginCard.module.scss';
import { Button } from '@mui/material';


const LoginCard = () => {
  return (
    <Box className={styles['parent']}>
      <Stack spacing={3} className={styles['parent-stack']}>
        <Typography className={styles['login']}>Login</Typography>
        <Typography className={styles['login-text-common']}>Please login using account detail bellow.</Typography>
        <Box
          component="form"
          // sx={{
          //   '& .MuiTextField-root': { mt: 2, mb: 1, width: '50ch', },
          //   display: 'flex',
          //   flexDirection: 'column'

          // }}
          noValidate
          autoComplete="off"
          className={styles['textfield-box']}
        >
          <TextField
            fullWidth
            label="Email"
            id="outlined-required"
            placeholder='Email Address'
          />
          <TextField
            fullWidth

            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />

          <Typography className={styles['login-text-common']}>Forgot your password?</Typography>
          <Button className={styles['btn-signin']}>Sign In</Button>
        </Box>
        <Typography className={styles['login-text-common']}>Don’t have an Account? Create account</Typography>

      </Stack>
    </Box>
  )
}

export default LoginCard