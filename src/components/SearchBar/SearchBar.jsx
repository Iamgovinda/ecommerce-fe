import React, { useState } from 'react';
import {Button} from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import styles from './SearchBar.module.scss';
import {Input} from '@mui/material';
import {get} from '../../API/axios';
import { useProductContext } from '../../context/ProductContext';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchText, setSearchText] = useState();
  const {setProducts} = useProductContext();
  const navigate = useNavigate();


  const handleClick = ()=>{
    if(searchText){
      get(`/product/?search=${searchText}`).then((response)=>{
        response.data.results.length>0?setProducts(response.data.results):setProducts(false);
        navigate('/shop-layer');
      }).catch((error)=>{
        console.log("error Occured");
      })
    }
  }
  return (
    <div className={styles['parent']}>
     <Input type="text" disableUnderline={true} className={styles['txt']} onChange={(e)=>setSearchText(e.target.value)}/>
      <Button className={styles['btn']} onClick={()=>handleClick()}><SearchOutlinedIcon/></Button>
    </div>
  )
}

export default SearchBar