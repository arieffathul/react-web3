// button
function MyButton() {
  return (
    <button>
      Ini tombol
    </button>
  );
}

//   export default function MyApp() {
//     return (
//       <div>
//         <h1>Welcome to my app</h1>
//         <MyButton />
//       </div>
//     );
//   }

// template UI react
function MyApp() {
  return (
    <>
      <h1>Belajar React</h1>
      <p>Halo semua<br />Saya sedang belajar React</p>
      <MyButton />
    </>
  );
}
export default MyApp

// image dan atributnya
const user = {
  name: 'Kamen Rider Geats',
  imageUrl: 'https://titipjepang.com/wp-content/uploads/2024/07/Kamen-Rider-Geats.jpg',
  imageSize: 90,
};

// membuat array product
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

// mapping array menjadi list
function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}


export function Profile() {
  return (
    <>
      <h2>{user.name}</h2>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
      <ShoppingList />
    </>
  );
}

// Button terpisah
import { useState } from 'react';

export function Button() {
  return (
    <div>
      <h2>Tombol yang terpisah</h2>
      <CountButton />
      <MinButton />
    </div>
  );
}

function CountButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
function MinButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count - 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

export function Button2() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  function minusClick() {
    setCount(count - 1);
  }
  function reset(){
    setCount(0);
  }

  return (
    <div>
      <h2>Berubah Bersama {count} </h2>
      <Together count={count} onClick={handleClick} />
      <Together count={count} onClick={minusClick} />
      <Together count={count} onClick={reset} />
    </div>
  );
}

function Together({ onClick }) {
  const buttonTexts = {
    handleClick: `Tambah`,
    minusClick: `Kurang`,
    reset: `Reset`
  };

  return (
    <button onClick={onClick}>
      {buttonTexts[onClick.name]} {/* Mengambil teks dari objek */}
    </button>
  );
}
