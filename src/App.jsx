import './App.css';
import CartProvider from "./components/context/CartProvider.jsx";
import MainCart from "./components/Layout/MainCart.jsx";

const App = () => {

    return <>
        {/* value 속성에 하위 컴포넌트들이 공유할 상태값들을 명시 */}
        <CartProvider>  {/* 제공자는 즉시 소비 못함, 하위 컴포넌트에서부터 소비할 수 있음, 제공자 = provider, 소비자: consumer*/}
            <MainCart />
        </CartProvider>
    </>;
};

export default App;