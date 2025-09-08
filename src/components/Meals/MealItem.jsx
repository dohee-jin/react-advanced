import styles from './MealItem.module.scss';
import MealItemForm from './MealItemForm';
import {useContext} from "react";
import cartContext from "../context/cart-context.js";

const MealItem = ({ id, price, description, name }) => {

    const { meal, description: desc, price: priceStyle } = styles;

    const formatPrice = new Intl.NumberFormat('ko-KR').format(price);

    const { addToCartItem } = useContext(cartContext);

    // cart.jsx 에게 보낼 데이터를 생성하는 함수
    // 선택한 수량 끌어올리기
    const handleAddToCart = (amount) => {
        // console.log('선택한 수량: ', amount)

        // 장바구니 배열에 담을 객체 생성
        const cartItem = {
            id,
            name,
            price: price * amount,
            amount
        }

        addToCartItem(cartItem)
    }

    return (
    <li className={meal}>
      <div>
        <h3>{name}</h3>
        <div className={desc}>{description}</div>
        <div className={priceStyle}>{formatPrice}원</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={handleAddToCart}/>
      </div>
    </li>
    );
};

export default MealItem;
