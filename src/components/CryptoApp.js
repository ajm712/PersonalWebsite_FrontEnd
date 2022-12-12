import React from "react";
import Navbar from "../components/Navbar";
import { useState } from 'react';
import axios from 'axios';

export default function CryptoApp() {
    const [data, setData] = useState();
    const [error, setError] = useState("");
    const [coinNameFromInput, setCoinNameFromInput] = useState("");

    const getCoinData = async () => {
        try {
            const { data } = await axios.get('https://scarlettspeedsterapi-apim.azure-api.net/Crypto/GetCurrentCoinInfo', {
                headers: {
                    Accept: 'application/json',
                },
                params: { CoinName: coinNameFromInput }
            });

            console.log('data is: ', JSON.stringify(data, null, 4));

            setData(data);
        }
        catch (err) {
            console.log("BEFORE");
            setError(err.response.data);
            console.log(error);
        }
    };

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setData();
            setError("");
            await getCoinData();
        } catch (err) {

        }
    };

    return (
        <div className="h-screen">
            { <Navbar />}
            <div className="text-center mb-50 py-8">
                <form onSubmit={handleSubmit}>
                    <div><label>Enter crypto coin name below</label></div>
                    <input
                        id="coin_name"
                        name="coin_name"
                        type="text"
                        onChange={event => setCoinNameFromInput(event.target.value)}
                        value={coinNameFromInput}
                        className="text-gray-900 text-justify px-2 py-2 rounded"
                    />
                    <div className="py-2">
                        <button
                            className="text-white bg-sky-700 border-0 py-2.5 px-6 hover:bg-green-600 rounded-full text-lg">
                            Submit
                        </button>
                    </div>

                    <div className="message">{error.length > 0 && <h1>{error}</h1>}</div>
                </form>
            </div>

            <div>
                {data && <div className="text-center"><h1 >Coin Name: {data.coinName}</h1><h1>Current Price: {data.currentPrice}</h1></div>}
            </div>
        </div>
    );
};