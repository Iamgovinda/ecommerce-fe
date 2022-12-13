import React from 'react';
// import { TextField } from '@mui/material';
import {Button} from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import FormControl from '@mui/material';
import styles from './SearchBar.module.scss';
import {Input} from '@mui/material';

const SearchBar = () => {
  return (
    <div className={styles['parent']}>
     <Input disableUnderline={true} className={styles['txt']}/>
      <Button className={styles['btn']}><SearchOutlinedIcon /></Button>
    </div>
  )
}

export default SearchBar