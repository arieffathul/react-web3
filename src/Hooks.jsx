import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";


export default function Hook() {
    // hook usestate //menyimpan dan membuat state saat ada action tertentu

    function Readstate() {
        const [color, setColor] = useState("red"); //usestate adalah state default sebelum

        return (
            <>
                {/* read state. Memanggil state yang telah dipasang(color) */}
                <h1>My favorite color is {color}!</h1>
                {/* update state. Memperbarui state lalu langsung di render ulang */}
                <button
                    type="button"
                    onClick={() => setColor("blue")}
                >Blue</button>
                <button
                    type="button"
                    onClick={() => setColor("red")}
                >Red</button>
            </>
        );
    }

    function StateObject() {
        const [car, setCar] = useState({
            brand: "Ford",
            model: "Mustang",
            year: "1964",
            color: "red"
        });

        // Membuat fungsi mengubah color mobil
        const updateColor = () => {
            setCar(previousState => {
                // return atribut sebelumnya dalam mobil, lalu merubah warna menjadi blue
                return { ...previousState, color: "blue" }
            });
        }

        return (
            <>
                {/* Memanggil setiap object car */}
                <h1>My {car.brand}</h1>
                <p>
                    It is a {car.color} {car.model} from {car.year}.
                </p>
                <button
                    type="button"
                    onClick={updateColor}
                >Blue</button>
            </>
        )
    }

    // seteffect
    // berfungsi untuk membuat beberapa effek seperti : fetching data, directly updating the DOM, and timers.

    // fungsi untul menghitung tiap detik
    function Timer() {
        const [count, setCount] = useState(0);

        useEffect(() => {
            setTimeout(() => {
                setCount((count) => count + 1);
            }, 1000);
        });

        return <h1>I've rendered {count} times!</h1>;
    }

    return (
        <>
            <Readstate />
            <StateObject />
            <Timer/>
        </>
    )
}
