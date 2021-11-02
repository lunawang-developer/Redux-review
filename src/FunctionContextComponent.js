import React from 'react';
import { useTheme, useThemeUpdate } from './ThemeContext';
import { Button } from 'antd';
import 'antd/dist/antd.css';

export default function FunctionContextComponent() {
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();

    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    }
    return (
        <>
            <Button type="primary" shape="round" onClick={toggleTheme}>Toggle Theme</Button>
            <div style={themeStyles}>Function Theme</div>
        </>
    )
}