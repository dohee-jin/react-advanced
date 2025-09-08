import styles from './CartItem.module.scss';
import {useContext} from "react";
import cartContext from "../context/cart-context.js";


const CartItem = ({ cart }) => {

    const { id, name, price, amount } = cart;

    const {
        'cart-item': cartItem,
        summary,
        price: priceStyle,
        amount: amountStyle,
        actions,
    } = styles;

    const formatPrice = new Intl.NumberFormat('ko-KR').format(price);
    const {addToCartItem, removeToCartItem} = useContext(cartContext)

    const handleAddAmount = () => {
        addToCartItem({
            id,
            name,
            amount: 1,
            price: price / amount
        })
    }

    const handleRemoveAmount = () => {
        removeToCartItem(cart.id)
    }

    return (
        <li className={cartItem}>
            <div>
                <h2>{name}</h2>
                <div className={summary}>
                    <span className={priceStyle}>{formatPrice}</span>
                    <span className={amountStyle}>x {amount}</span>
                </div>
            </div>
            <div className={actions}>
                <button onClick={handleRemoveAmount}>−</button>
                <button onClick={handleAddAmount}>+</button>
            </div>
        </li>
    );
};

export default CartItem;
