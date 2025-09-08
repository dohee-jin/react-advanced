import React, {useState} from 'react';
import CartContext from "./cart-context.js";
import cartItem from "../Cart/CartItem.jsx";

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
        const existingItems = [...cartItems];

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

    // 장바구니에서 데이터를 삭제하는 함수
    const handleRemoveToCartItem = (id) => {

        // 원본 장바구니 배열을 복사
        const existingItems = [...cartItems];

        // 삭제 타켓 객체를 탐색
        const foundItem = existingItems.find(cartItem => cartItem.id === id);

        if(foundItem.amount > 1) {
            // 1개의 가격 구하기
            const eachPrice = foundItem.price / foundItem.amount;

            foundItem.amount -= 1;
            foundItem.price -= eachPrice;
            
            setCartItems(existingItems);
        } else {
            // alert(`수량을 1보다 줄일 수는 없습니다.`);
            setCartItems(prev => prev.filter(cartItem => cartItem.id !== id));
        }

    }

    // 컨텍스트가 관리할 중앙 상태값
    const initialValue = {
        cartIsShown,
        openModal: handelShowCart,
        closeModal: handleHideCart,
        cartItems,
        addToCartItem: handleAddToCartItem,
        removeToCartItem: handleRemoveToCartItem,
    };

    return (
        <CartContext.Provider value={initialValue}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;