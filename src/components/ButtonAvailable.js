import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleProduct } from '../actions/productActions';

const ButtonAvailable = () => {

    const dispatch = useDispatch();

    const handleToggleProduct = (e) => {
        console.log(e.target.closest('li').id);
        //отправляем действие для изменения статуса продукта
        dispatch(toggleProduct(Number(e.target.closest('li').id)));
    }

    return (
        <button onClick={handleToggleProduct}>Поменять доступность</button>
    );
}

export default ButtonAvailable;