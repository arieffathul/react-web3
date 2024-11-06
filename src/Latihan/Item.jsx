import React from 'react';

const Keranjang = ({ keranjang, updateQuantity, removeItem }) => {
    return (
        <div>
            <h2>Keranjang Anda</h2>
            {keranjang.length === 0 ? (
                <p>Keranjang Anda Kosong!</p>
            ) : (
                <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                    <tbody>
                        {keranjang.map(item => (
                            <tr key={item.id}>
                                <td style={{ padding: '10px', textAlign:"left" }}>{item.name}</td>
                                <td style={{ padding: '10px' }}>Rp.{item.price}</td>
                                <td style={{ padding: '10px' }}>
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                        min="1"
                                        style={{ width: '50px' }}
                                    />
                                </td>
                                <td style={{ padding: '10px' }}>
                                    <button onClick={() => removeItem(item.id)} style={{ marginLeft: '10px' }}>Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Keranjang;