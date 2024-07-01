import React, { useContext } from 'react';
import { FilterContext } from '../contexts/FilterContext';

const ProductFilter = () => {

    //получаем текущий фильтр из контекста
    const { filter, setFilter } = useContext(FilterContext);

    const handleChange = (e) => {
        //устанвливаем выбранный фильтр
        setFilter(e.target.value);
    }

    return (
        <select value={filter} onChange={handleChange}>
            <option value="all">Все</option>
            <option value="available">Доступные</option>
            <option value="unavailable">Недоступные</option>
        </select>
    )
}

export default ProductFilter;