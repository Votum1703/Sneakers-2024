import React, { useState } from 'react';
import axios from 'axios';
import OrderPopup from '../Popup/OrderPopup';

import Order from '../Order';
import { useCart } from '../../hooks/useCart';

import styles from './Drawer.module.scss';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items = [], opened }) {
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  const handleOrderPopupClose = () => {
    setShowOrderPopup(false);
  };

  const handleOrderSubmit = async ({ address, phoneNumber }) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post('https://65a96784219bfa37186931df.mockapi.io/orders', {
        items: cartItems,
        address,
        phoneNumber,
      });

      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete('https://659403d01493b0116069ba63.mockapi.io/cart/' + item.id);
        await delay(1000);
      }
    } catch (error) {
      alert('Ошибка при создании заказа :(');
    }
    setIsLoading(false);
    setShowOrderPopup(false);
  };

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-30">
          Корзина{' '}
          <img
            onClick={onClose}
            className="cu-p"
            src="https://raw.githubusercontent.com/Votum1703/Sneakers-2024/0d9debbb3746610a2215612cd5e425bc8a30592c/public/img/btn-remove.svg"
            alt="Close"
          />
        </h2>

        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="items flex">
              {items.map((obj) => (
                <div key={obj.id} className="cartItem d-flex align-center mb-20">
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"></div>

                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="https://raw.githubusercontent.com/Votum1703/Sneakers-2024/0d9debbb3746610a2215612cd5e425bc8a30592c/public/img/btn-remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrice} руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{(totalPrice / 100) * 5} руб. </b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={() => setShowOrderPopup(true)}
                className="greenButton">
                Оформить заказ{' '}
                <img
                  src="https://raw.githubusercontent.com/Votum1703/Sneakers-2024/0d9debbb3746610a2215612cd5e425bc8a30592c/public/img/arrow.svg"
                  alt="Arrow"
                />
              </button>
            </div>
          </div>
        ) : (
          <Order
            title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
            description={
              isOrderComplete
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
            }
            image={
              isOrderComplete
                ? 'https://raw.githubusercontent.com/Votum1703/Sneakers-2024/0d9debbb3746610a2215612cd5e425bc8a30592c/public/img/complete-order.svg'
                : 'https://raw.githubusercontent.com/Votum1703/Sneakers-2024/0d9debbb3746610a2215612cd5e425bc8a30592c/public/img/empty.svg'
            }
          />
        )}
        {showOrderPopup && (
          <OrderPopup onClose={handleOrderPopupClose} onSubmit={handleOrderSubmit} />
        )}
      </div>
    </div>
  );
}

export default Drawer;
