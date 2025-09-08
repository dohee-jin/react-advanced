import React, {useState} from 'react';
import CartContext from "./cart-context.js";

const CartProvider = ({children}) => {

    // 장바구니 모달을 여닫는 상태변수
    const[cartIsShown, setIseCartIsShown] =useState(false);

    // 모달을 열고 닫아주는  함수
    const handelShowCart = () => setIseCartIsShown(true);
    const handleHideCart = () =>  setIseCartIsShown(false);

    // 컨텍스트가 관리할 중앙 상태값
    const initialValue = {
        cartIsShown,
        openModal: handelShowCart,
        closeModal: handleHideCart
    };

    return (
        <CartContext.Provider value={initialValue}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;