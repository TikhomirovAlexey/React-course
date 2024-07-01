import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeProduct } from '../actions/productActions';


const ChangeProduct = () => {
    const dispatch = useDispatch()
    const [displayBlock, setDisplayBlock] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');



    const handleChangeProduct = (e) => {
        const id = Number(e.target.closest('li').id);
        if (name && description && price) {
            dispatch(changeProduct({ id, name, description, price }));
            setName('');
            setDescription('');
            setPrice('');
            setDisplayBlock(!displayBlock);
        }
    }

    const changeDisplay = () => {
        setDisplayBlock(!displayBlock);
    }

    if (displayBlock) {
        return (
            <div>
                <button onClick={handleChangeProduct}>Изменить продукт</button>
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

            </div>
        );
    }

    return (
        <button onClick={changeDisplay}>Изменить продукт</button>
    );
}

export default ChangeProduct;