import Variable from "../Variable/Variable";
import './Temperatures.css';
import { useEffect, useState } from "react";

function Temperatures({ name, initCelsius, initFahrenheit, initKelvin }) {
    const [celsius, setCelsius] = useState(initCelsius || 25);
    const [fahrenheit, setFahrenheit] = useState(initFahrenheit || 77);
    const [kelvin, setKelvin] = useState(initKelvin || 298.15);

    // functions to convert between Celsius, Fahrenheit, and Kelvin
    const cToK = (c) => c + 273.15;
    const cToF = (c) => c * (9 / 5) + 32;
    const fToC = (f) => (f - 32) * (5 / 9);
    const fToK = (f) => cToK(fToC(f));
    const kToC = (k) => k - 273.15;
    const kToF = (k) => cToF(kToC(k));

    // Sync initial values
    useEffect(() => {
        if (initCelsius !== undefined) {
            setCelsius(initCelsius);
            setFahrenheit(cToF(initCelsius));
            setKelvin(cToK(initCelsius));
        } else if (initFahrenheit !== undefined) {
            setCelsius(fToC(initFahrenheit));
            setFahrenheit(initFahrenheit);
            setKelvin(fToK(initFahrenheit));
        } else if (initKelvin !== undefined) {
            setCelsius(kToC(initKelvin));
            setFahrenheit(kToF(initKelvin));
            setKelvin(initKelvin);
        }
    }, [initCelsius, initFahrenheit, initKelvin]);

    // Sync when Celsius changes
    useEffect(() => {
        setFahrenheit(cToF(celsius));
        setKelvin(cToK(celsius));
    }, [celsius]);

    // Sync when Fahrenheit changes
    useEffect(() => {
        setCelsius(fToC(fahrenheit));
        setKelvin(fToK(fahrenheit));
    }, [fahrenheit]);

    // Sync when Kelvin changes
    useEffect(() => {
        setCelsius(kToC(kelvin));
        setFahrenheit(kToF(kelvin));
    }, [kelvin]);

    return (
        <div className="temperatures-container">
            <h2><span className="temperatures-title" >{name || "Temperature"}</span></h2>
            <h3 className="temperatures-variables">
                <span className="badge bg-primary">{celsius.toFixed(2)} &deg;C</span>
                <span className="badge bg-primary">{fahrenheit.toFixed(2)} &deg;F</span>
                <span className="badge bg-primary">{kelvin.toFixed(2)} &deg;K</span>
            </h3>
            <div className="temperatures-variables">
                <Variable name={'Celsius'} value={celsius} setValue={setCelsius} />
                <Variable name={'Fahrenheit'} value={fahrenheit} setValue={setFahrenheit} />
                <Variable name={'Kelvin'} value={kelvin} setValue={setKelvin} />
            </div>
        </div>
    );
}

export default Temperatures;
