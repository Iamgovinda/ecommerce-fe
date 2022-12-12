import * as React from 'react';
import { Container } from '@mui/system';
export default function ButtonAppBar() {
  return (
    <Container>
        <div className="left">
            <div className="email">
            <EmailOutlinedIcon />
            </div>
            <div className="phone">

            </div>
        </div>
        <div className="right">
            <p>English</p>
            <p>USD</p>
            <p>Login</p>
            <p>WishList</p>
        </div>
    </Container>
  );
}
