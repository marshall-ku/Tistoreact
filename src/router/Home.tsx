import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ListItem from "../components/ListItem";
import "./Home.css";

export default function Home() {
    const data = window.data as IBlogEssentialData;
    if (!data.list) return null;

    return <ListItem data={data} />;
}
