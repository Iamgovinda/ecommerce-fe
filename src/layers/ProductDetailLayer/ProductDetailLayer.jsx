import React from 'react'
import BreadCrumbCard from '../../components/BreadCrumbCard/BreadCrumbCard';
import ProductDetailCard from '../../components/ProductDetailCard/ProductDetailCard';

const ProductDetailLayer = () => {
    return (
        <>
            <BreadCrumbCard view={"Shop List"} />
            <ProductDetailCard />
        </>
    )
}

export default ProductDetailLayer