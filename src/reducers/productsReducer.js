import { ADD_PRODUCT, TOGGLE_PRODUCT, DELETE_PRODUCT, CHANGE_PRODUCT } from '../actions/productActions';

//change - нужен для отслеживания состояния изменения в настоящий момент

const initialState = [
    { id: 1, name: 'морковка', description: 'Овощи', price: 11, available: true },
    { id: 2, name: 'капуска', description: 'Овощи', price: 12, available: true },
    { id: 3, name: 'яблоки', description: 'Фрукты', price: 13, available: true },
    { id: 4, name: 'ананасик', description: 'Фрукты', price: 14, available: true },
];

//редьюсер для обработки действий с прдуктами

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            //добавляем новый товар в список
            return [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    description: action.payload.description,
                    price: action.payload.price,
                    available: true,
                }
            ];
        case CHANGE_PRODUCT:
            //обновляем продукт
            return state.map(product =>
                product.id === action.payload.id ?
                    { ...product, name: action.payload.name, description: action.payload.description, price: action.payload.price } : product
            );
        case DELETE_PRODUCT:
            //удаляем продукт из списка
            return state.filter(product => product.id !== action.payload.id);
        case TOGGLE_PRODUCT:
            //изменяем статус продукта
            return state.map(product =>
                product.id === action.payload.id ?
                    { ...product, available: !product.available } : product
            );
        default:
            return state;
    }
}

export default productsReducer;