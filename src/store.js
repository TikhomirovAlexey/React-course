//хранилище - состояние объекта, методы для его изменения
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './reducers/productsReducer';

//настройка redux хранилища c использованием

const store = configureStore({
    reducer: {
        products: productsReducer,
    }
});

export default store;