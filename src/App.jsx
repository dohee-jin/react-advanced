import Header from "./components/Layout/Header";
import './App.css';
import Meals from "./components/Meals/Meals";
import {useState} from "react";
import Cart from "./components/Cart/Cart.jsx";
import CartContext from "./components/context/cart-context.js";

const App = () => {

    // 장바구니 모달을 여닫는 상태변수
    const[cartIsShown, setIseCartIsShown] =useState(false);

    // 모달을 열고 닫아주는  함수
    const handelShowCart = () => setIseCartIsShown(true);
    const handleHideCart = () =>  setIseCartIsShown(false);

    return <>
        {/* value 속성에 하위 컴포넌트들이 공유할 상태값들을 명시 */}
        <CartContext.Provider value={{
            openModal: handelShowCart,
            closeModal: handleHideCart
        }} >
            { cartIsShown && <Cart onClose = {handleHideCart} />}
            <Header  onShowCart={handelShowCart}/>
            <div id="main">
                <Meals />
            </div>
        </CartContext.Provider>
    </>;
};

export default App;