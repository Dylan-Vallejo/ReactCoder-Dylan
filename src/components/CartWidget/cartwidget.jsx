import React, { useContext } from 'react';
import { Avatar, Badge, Space } from 'antd';
import './cartwidget.css'
import { ShoppingCartOutlined } from '@ant-design/icons';
import { CartContext } from "../../context/shopContext";

const Cartwidget = () => {
    const { cantidadCarrito } = useContext(CartContext)
    return (
        <div className="carrito">
            <Badge count={cantidadCarrito()}>
                <ShoppingCartOutlined style={{ fontSize: '30px' }} className="icon"/>
            </Badge>
        </div>
        
    );
};

export default Cartwidget;





