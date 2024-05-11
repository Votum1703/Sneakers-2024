import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

function Header(props) {
  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img
            width={40}
            height={40}
            src="https://raw.githubusercontent.com/Votum1703/Sneakers-2024/master/public/img/logo.png"
            alt="Logotype"
          />
          <div>
            <h3 className="text-uppercase">Germes</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img
            width={18}
            height={18}
            src="https://raw.githubusercontent.com/Votum1703/Sneakers-2024/0d9debbb3746610a2215612cd5e425bc8a30592c/public/img/cart.svg"
            alt="Корзина"
          />
          Корзина:
          <span> {totalPrice} руб.</span>
        </li>
        <li className="mr-30 cu-p">
          <Link to="/favorites">
            <img
              width={18}
              height={18}
              src="https://raw.githubusercontent.com/Votum1703/Sneakers-2024/0d9debbb3746610a2215612cd5e425bc8a30592c/public/img/heart.svg"
              alt="Закладки"
            />
            Закладки
          </Link>
        </li>
        <li className="mr-30 cu-p">
          <Link to="/profile">
            <img
              width={18}
              height={18}
              src="https://raw.githubusercontent.com/Votum1703/Sneakers-2024/0d9debbb3746610a2215612cd5e425bc8a30592c/public/img/user.svg"
              alt="Пользователь"
            />
            Профиль
          </Link>
        </li>
        <li>
          <Link to="/about">
            <img width={21} height={21} src="https://svgshare.com/i/15ya.svg" alt="О нас" />О нас
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
