import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toogleTheme } from './themeSlice'


export function ToogleTheme() {
    const theme = useSelector((state) => state.theme.value);
    const dispatch = useDispatch();

    return (
        <div style={{ height: '100vh', backgroundColor: theme ? '#fff' : '#000' }}>
            <div>
                <button
                    onClick={() => dispatch(toogleTheme())}
                >
                    Сменить тему
                </button>
            </div>
        </div>
    )
}