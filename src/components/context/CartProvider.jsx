import React, {useState} from 'react';
import CartContext from "./cart-context.js";

const CartProvider = ({children}) => {

    //  장바구니 배열 상태 관리
    const[cartItems, setCartItems] = useState([]);

    // 장바구니 모달을 여닫는 상태변수
    const[cartIsShown, setIseCartIsShown] =useState(false);

    // 모달을 열고 닫아주는  함수
    const handelShowCart = () => setIseCartIsShown(true);
    const handleHideCart = () =>  setIseCartIsShown(false);

    // 장바구니에 데이터를 추가하는 함수
    const handleAddToCartItem = (newItem) => {
        setCartItems(prev => [...prev, newItem]);
    }

    // 컨텍스트가 관리할 중앙 상태값
    const initialValue = {
        cartIsShown,
        openModal: handelShowCart,
        closeModal: handleHideCart,
        cartItems,
        addToCartItem: handleAddToCartItem,
    };

    return (
        <CartContext.Provider value={initialValue}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;