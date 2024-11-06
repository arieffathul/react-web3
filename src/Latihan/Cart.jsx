// src/pages/Login.jsx
// import React from 'react';

import { useState } from "react";
import Keranjang from "./Item";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const availableItems = [
    { id: 1, name: 'Buku', price: 6000 },
    { id: 2, name: 'Pulpen', price: 5000 },
    { id: 3, name: 'Penggaris', price: 2000 },
  ];

  const navigate = useNavigate();

  const [keranjang, setKeranjang] = useState([]);
  const addItemToKeranjang = (item) => {
    const existingItem = keranjang.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setKeranjang(keranjang.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setKeranjang([...keranjang, { ...item, quantity: 1 }]);
    }
  };
  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) return;
    setKeranjang(keranjang.map(item =>
      item.id === id ? { ...item, quantity: quantity } : item
    ));
  };

  const removeItemFromKeranjang = (id) => {
    setKeranjang(keranjang.filter(item => item.id !== id));
  };

  const totalHarga = keranjang.reduce((total, item) => total + item.price * item.quantity, 0);


  return (
    <div>
      <h2>Shopping Cart</h2>
      <h2>Daftar Item</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        <tbody>
          {availableItems.map(item => (
            <tr key={item.id}>
              <td style={{ padding: '10px', textAlign: "left" }}>{item.name}</td>
              <td style={{ padding: '10px' }}>Rp.{item.price}</td>
              <td style={{ padding: '10px' }}>
                <button onClick={() => addItemToKeranjang(item)}>Tambah ke Keranjang</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Keranjang
        keranjang={keranjang}
        updateQuantity={updateQuantity}
        removeItem={removeItemFromKeranjang}
      />

      <h3>Total Harga: Rp.{totalHarga}</h3>

      <button onClick={() => navigate('/done')}>Next</button>

    </div>
  );
}
