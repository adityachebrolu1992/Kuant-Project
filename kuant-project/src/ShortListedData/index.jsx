import React, { useState } from "react";
import ReactDOM from "react-dom"
import "./style.css";

export default function ShortList(props) {

    const [percent, setPercent] = useState(0)
    const [value, setValue] = useState(0);
    const [flag, setFlag] = useState(false)
    const [trades, setTrades] = useState(0);


    const percentage = [5, 10, 15, 20, 25, 30, 35, 40, 45]

    let p = 100;
    function inputData(e) {
        const temp = e.target.value;
        const val = Math.ceil(((props.length) * temp) / 100)
        setPercent(temp)
        setTrades(val)

    }

    function inputName(e) {
        setValue(props.data.get(e.target.value));
        setFlag(true);
    }


    return (
        <div>
            <div id="container">
                <div>
                    <label for="list">select the % of trade </label>
                    <input id="list" type="text" list="data" onChange={inputData} />
                    <datalist id="data">
                        {percentage.map((item, key) =>
                            <option key={key} value={item} />
                        )}
                    </datalist>
                </div>


                <div>
                    <label for="list">select the Client name </label>
                    <input id="list" type="text" list="client" onChange={inputName} />
                    <datalist id="client">
                        {props.clientList.map((item) =>
                            <option value={item} />
                        )}
                    </datalist>
                </div>
            </div>
            <div id="container">
                <table>
                    <thead>
                        <tr>
                            <th>Clints who have done more than {percent}% of the trades</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.clientList.map((item) => {
                            return <tr><td id="td">{props.data.get(item) >= trades ? item : null}</td></tr>
                        })}
                    </tbody>

                </table>

                <p>Selected Client had {value} trader out of {props.length}</p>
            </div>




        </div>

    )
}
