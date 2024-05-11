import React, { useState } from 'react';

const OrderPopup = ({ onClose, onSubmit }) => {
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = () => {
    // Проверка на заполненность адреса и номера телефона
    if (!address || !phoneNumber) {
      alert('Пожалуйста, заполните адрес доставки и контактный номер.');
      return;
    }
    onSubmit({ address, phoneNumber });
  };

  return (
    <div className="order-popup" style={styles.popup}>
      <h2 style={styles.heading}>Введите адрес доставки и контактный номер</h2>
      <input
        type="text"
        placeholder="Адрес доставки"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Контактный номер"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleSubmit} style={styles.button}>Отправить</button>
      <button onClick={onClose} style={styles.cancelButton}>Отмена</button>
    </div>
  );
};

const styles = {
  popup: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '300px',
  },
  heading: {
    fontSize: '1.2rem',
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#9DD558',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.1s ease',
    marginRight: '10px',
  },
  cancelButton: {
    padding: '10px 20px',
    backgroundColor: '#ccc',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.1s ease',
  },
};

export default OrderPopup;
