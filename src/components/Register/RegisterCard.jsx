import React from 'react';
import { Box } from '@mui/system';
import { Stack } from '@mui/system';
import styles from './RegisterCard.module.scss';
import { Typography, TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { post, registerPOST } from '../../API/axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Modal } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const RegisterCard = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [OTP, setOTP] = React.useState();
  const [email, setEmail] = React.useState();
  const handleClose = () => setOpen(false);
  const schema = yup.object().shape({
    password: yup
      .string()
      .min(6)
      .max(15)
      .required("Password is a required field"),
    repeat_password: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setEmail(data['email']);
    registerPOST("accounts/register/", data)
  
      .then((res) => {    //Group validation is remaining

        toast.success("Registration Successful");
        setOpen(true);
      }).catch((err) => {
        console.log(err);
        if (err.response.data.detail) {
          toast.error(err.response.data.detail?.[0]);
        } else if (err.response.data.non_field_errors) {
          toast.error("Registration Failed! Please try again.");
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      })
  }
  const handleClickButton = ()=>{
    const data = {
      'email': email,
      'otp': OTP
    }
    console.log(data);
    post(`/accounts/otp-activate/`, data)
    .then((response)=>{
      console.log(response);
      if (response.status === 200){
        toast.success('Account Verified SuccessFully');
        setOpen(false);
        navigate('/')
      }
      else{
        toast.error(response?.response?.data?.non_field_errors[0])
      }
    }).catch((err)=>{
      console.log(err);
      toast.error("something went wrong");
    })
  }
  return (
    <>
      <Box className={styles['parent']}>
        <Stack spacing={3} className={styles['parent-stack']}>
          <Typography className={styles['login']}>Register</Typography>
          <Typography className={styles['login-text-common']}>Please register using account detail bellow.</Typography>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            className={styles['textfield-box']}
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              fullWidth
              type={'text'}
              label="Full Name"
              id="outlined-required first_name"
              placeholder='Full Name'
              {...register('name')}
            />
            <TextField
              fullWidth
              type={'email'}
              label="Email"
              id="outlined-required email"
              placeholder='Email Address'
              {...register('email')}
            />
            <TextField
              fullWidth
              type={'number'}
              label="Phone Number"
              id="outlined-required phone_number"
              placeholder='Phone Number'
              {...register('phone_number')}
            />
            <TextField
              fullWidth
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              {...register('password')}
            />
            <TextField
              fullWidth
              id="outlined-password-input confirm_password"
              label="Confirm Password"
              type="password"
              autoComplete="current-password"
              {...register('repeat_password')}
            />
            <Button className={styles['btn-signin']} type="submit">Register</Button>
          </Box>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2" style={{ marginBottom: '5px' }}>
                OTP verification
              </Typography>
              <TextField
                label="OTP"
                id="outlined-required otp"
                placeholder='OTP'
                onChange={(e) => setOTP(e.target.value)}
                marginTop="5rem"
              />
              <Box style={{ marginTop: '1rem' }}>
                <Button variant='contained' style={{ backgroundColor: '#FB2E86' }} onClick={()=>handleClickButton()}>Verify</Button>
              </Box>
            </Box>
          </Modal>
          <Typography className={styles['login-text-common']}>Don’t have an Account? <Link to={'/login'}>login</Link></Typography>
        </Stack>
      </Box>
    </>
  )
}

export default RegisterCard