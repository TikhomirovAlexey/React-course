//константы для типов действий

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CHANGE_PRODUCT = 'CHANGE_PRODUCT';
export const TOGGLE_PRODUCT = 'TOGGLE_PRODUCT';


//создание продукта
export const addProduct = ({ id, name, description, price, available }) => ({
    type: ADD_PRODUCT, //тип действия
    payload: { id, name, description, price, available } //полезная нагрузка действия
});

//удаление продукта
export const deleteProduct = (id) => ({
    type: DELETE_PRODUCT,
    payload: { id }
});

//изменение продукта
export const changeProduct = ({ id, name, description, price, available }) => ({
    type: CHANGE_PRODUCT,
    payload: { id, name, description, price, available }
});

//изменение статуса доступности продукта
export const toggleProduct = (id) => ({
    type: TOGGLE_PRODUCT,
    payload: { id }
});

