import "./App.css";
import dataJson from "./assets/data/data.json";
import Card from "./components/Card";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useEffect, useState } from "react";

function App() {
    const [data, setData] = useState(dataJson.data);

    useEffect(() => {
        setData(state => state.sort(() => Math.random() - 0.5));
    }, []);

    const removeItem = index => {
        let tmpData = data.filter((value, i) => index !== i);
        tmpData.sort(() => Math.random() - 0.5);
        setData(tmpData);
    };

    return (
        <div className="App">
            {data.length > 1 ? (
                <>
                    <div>
                        <Card data={data[0]} />
                        <button className="card__button" onClick={() => removeItem(0)}>
                            <AiOutlineCloseCircle fontSize="4em" />
                        </button>
                    </div>
                    <div>
                        <Card data={data[1]} />
                        <button className="card__button" onClick={() => removeItem(1)}>
                            <AiOutlineCloseCircle fontSize="4em" />
                        </button>
                    </div>
                </>
            ) : (
                <div>
                    <span className="winner">Le gagnant est :</span>
                    <Card data={data[0]} />
                </div>
            )}
        </div>
    );
}

export default App;
