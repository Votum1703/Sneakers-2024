import React from "react";
import AppContext from '../context';

 const Order = ({ title, image, description}) => {
    const { setCartOpened } = React.useContext(AppContext)
  return (
        <div className="cartEmpty d-flex align-center justify-center flex-column flex">
        <img className="mb-20" width="120px" src={image} alt="Empty" />
        <h2>{title}</h2>
        <p className="opacity-6">{description}</p>
        <button onClick={() => setCartOpened(false) } className="greenButton">
        <img src="https://raw.githubusercontent.com/Votum1703/Sneakers-2024/0d9debbb3746610a2215612cd5e425bc8a30592c/public/img/arrow.svg" alt="Arrow" />
        Вернуться назад
        </button>
    </div>
  )
}

export default Order 