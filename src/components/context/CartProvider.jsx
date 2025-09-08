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

        // 원본 장바구니 배열을 복사
        const existingItems = cartItems;

        // 이미 장바구니에 있는 항목인지를 체크
        const foundItem = existingItems.find(cartItem => cartItem.id === newItem.id);

        // 기존에 있는 아이템
        if(foundItem) {
            foundItem.amount += newItem.amount;
            foundItem.price += newItem.price;
            setCartItems(existingItems);
        }
        // 새롭게 추가된 아이템
        else {
            setCartItems([...cartItems, newItem])
        }
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