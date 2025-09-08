import Header from "./components/Layout/Header";
import './App.css';
import Meals from "./components/Meals/Meals";
import {useState} from "react";
import Cart from "./components/Cart/Cart.jsx";

const App = () => {

    // 장바구니 모달을 여닫는 상태변수
    const[cartIsShown, setIseCartIsShown] =useState(false);

    // 모달을 열어주는 함수
    const handelShowCart = () => setIseCartIsShown(true);
    const handleHideCart = () =>  setIseCartIsShown(false);

    return <>
        { cartIsShown && <Cart onClose = {handleHideCart} />}
        <Header  onShowCart={handelShowCart}/>
        <div id="main">
            <Meals />
        </div>
    </>;
};

export default App;