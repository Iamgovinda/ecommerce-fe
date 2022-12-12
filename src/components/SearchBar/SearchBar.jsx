import React from 'react';
import { TextField } from '@mui/material';
import {Button} from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
  return (
    <div className={styles['parent']}>
      <TextField />
      <Button><SearchOutlinedIcon /></Button>
    </div>
  )
}

export default SearchBar