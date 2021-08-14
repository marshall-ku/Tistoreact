import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./router/Home";
import Guestbook from "./router/Guestbook";
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
            <BrowserRouter basename="/">
                <main>
                    <Route exact path={"/"} component={Home} />
                    <Route exact path={"/guestbook"} component={Guestbook} />
                    <LocationUpdater />
                </main>
            </BrowserRouter>
            <footer>
                <p>Made with 💜 by {data.info.blogger}</p>
            </footer>
        </>
    );
}
