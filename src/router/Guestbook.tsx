import React, { useState, useEffect } from "react";
import CommentsList from "../components/CommenstList";

export default function Guestbook() {
    const data = window.data as IGuestbookData;
    if (!data.guestbook) return null;

    return (
        <>
            <CommentsList data={data.guestbook.list} />
        </>
    );
}
