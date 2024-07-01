import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../actions/productActions';

const AddProduct = () => {
    //локальное состояние для имени нового продукта
    const [id, setId] = useState(Date.now());
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const dispatch = useDispatch();


    const handleAddProduct = () => {
        if (name && description && price) {
            dispatch(addProduct({ id, name, description, price }));
            setName('');
            setDescription('');
            setPrice('');
        }
    }

    return (
        <div>
            <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Название продукта'
            />
            <select
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            >
                <option value="">Выберите категорию</option>
                <option value="Овощи">Овощи</option>
                <option value="Фрукты">Фрукты</option>
            </select>
            <input
                type='number'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder='Цена'
            />
            <button onClick={handleAddProduct}>Добавить продукт</button>
        </div>
    );
}

export default AddProduct;