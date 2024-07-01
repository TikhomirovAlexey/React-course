import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../actions/productActions';

const DeleteProduct = () => {

    const dispatch = useDispatch();

    const handleDeleteProduct = (e) => {
        //отправляем действие для удаления продукта продукта
        dispatch(deleteProduct(Number(e.target.closest('li').id)));
    }

    return (
        <button onClick={handleDeleteProduct}>Удалить продукт</button>
    );
}

export default DeleteProduct;