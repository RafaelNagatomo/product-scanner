import React from 'react';
import Products from './pages/Products.js'
import { Layout } from 'antd';

const rootStyle = {
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    width: '100%',
    height: 'calc(100vh - 20px)',
};

const layoutStyle = {
    borderRadius: '8px',
    width: 'calc(100% - 400px)',
};

function App() {
    return (
        <Layout style={rootStyle}>
            <Layout style={layoutStyle}>
                <Products />
            </Layout>
        </Layout>
    )
}

export default App
