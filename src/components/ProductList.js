import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { FilterContext } from '../contexts/FilterContext';
import withFilter from '../hoc/withFilter';
import DeleteProduct from './DeleteProduct';
import ButtonAvailable from './ButtonAvailable';
import ChangeProduct from './ChangeProduct';


const ProductList = () => {

    //получаем список продуктов из хранилища Redux
    const products = useSelector(state => state.products);
    const { filter } = useContext(FilterContext);

    //применяем фильтр к продуктам 
    const filteredProducts = withFilter(products, filter);

    return (
        <ul>
            {filteredProducts.map(product => (
                <li
                    key={product.id}
                    id={product.id}
                >
                    <h4 style={{ opacity: product.available ? 1 : 0.3 }}>{product.name}</h4>
                    <p style={{ opacity: product.available ? 1 : 0.3 }}>{product.description}</p>
                    <p style={{ opacity: product.available ? 1 : 0.3 }}>{product.price} рублей штучка</p>
                    <DeleteProduct />
                    <ButtonAvailable />
                    <ChangeProduct />
                </li>
            ))}
        </ul>
    );
}

export default ProductList;