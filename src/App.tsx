import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./router/Home";
import LocationUpdater from "./components/LocationUpdater";
import "./App.css";

declare global {
    interface Window {
        data:
            | IBlogEssentialData
            | IGuestbookData
            | ITagData
            | IArticleData
            | INoticeData;
        setLastUpdate?: React.Dispatch<React.SetStateAction<number>>;
    }
}

export default function App() {
    const { data } = window;
    const [lastUpdate, setLastUpdate] = useState(new Date().getTime());

    useEffect(() => {
        window.setLastUpdate = setLastUpdate;
    }, []);

    useEffect(() => {}, [lastUpdate]);

    return (
        <>
            <header>
                <h1>{data.title}</h1>
            </header>
            <main>
                <BrowserRouter basename="/">
                    <Route exact path={"/"} component={Home} />
                    <LocationUpdater />
                </BrowserRouter>
            </main>
            <footer>
                <p>Made with 💜 by {data.info.blogger}</p>
            </footer>
        </>
    );
}
