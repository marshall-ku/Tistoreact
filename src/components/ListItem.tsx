import React from "react";
import { Link } from "react-router-dom";
import "./ListItem.css";

export default function ListItem(props: ListItemProps) {
    const { data } = props;
    if (!data.list) return null;

    return (
        <>
            {data.list.articles.map((item) => {
                return (
                    <article className="post-card" key={item.link}>
                        <Link to={item.link}>
                            <figure className="post-card__figure">
                                <img
                                    className="post-card__thumbnail"
                                    width="450"
                                    src={`https://i1.daumcdn.net/thumb/R450x0/?fname=${item.thumbnail}`}
                                    alt={item.title}
                                />
                            </figure>
                            <header className="post-card__info">
                                <h2 className="post-card__title">
                                    {item.title}
                                </h2>
                                {item.summary ? (
                                    <p className="post-card__desc">
                                        {item.summary}
                                    </p>
                                ) : null}
                            </header>
                        </Link>
                    </article>
                );
            })}
        </>
    );
}
