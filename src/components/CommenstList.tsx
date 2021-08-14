import React from "react";

function CommentItem(props: CommentItemProps) {
    const { comment } = props;

    return (
        <li id={comment.id} className={comment.class}>
            <div className="comment__avatar">
                <img
                    src={
                        comment.logo ||
                        "https://cdn.jsdelivr.net/gh/marshall-ku-cdn/wp@2.3.0/src/images/avatar1.png"
                    }
                    alt={comment.name}
                />
            </div>
            <div className="comment__head">
                <span
                    className="comment__head__name"
                    dangerouslySetInnerHTML={{ __html: comment.name }}
                ></span>
            </div>
            <div className="comment__bubble">
                <div
                    className="comment__bubble__text"
                    dangerouslySetInnerHTML={{ __html: comment.description }}
                ></div>
            </div>
            <time
                className="comment__time"
                dangerouslySetInnerHTML={{ __html: comment.date }}
            ></time>
            <div
                className="comment__footer"
                dangerouslySetInnerHTML={{
                    __html: `<button onclick="${comment.onclick.delete}">수정 / 삭제</button>`,
                }}
            ></div>
        </li>
    );
}

export default function CommentsList(props: CommentsListProps) {
    return (
        <ul>
            {props.data.map((comment, i) => {
                if (comment.children) {
                    return (
                        <>
                            <CommentItem comment={comment} key={comment.id} />
                            <ul key={i}>
                                {comment.children.map((childComment) => {
                                    return (
                                        <CommentItem
                                            comment={childComment}
                                            key={childComment.id}
                                        />
                                    );
                                })}
                            </ul>
                        </>
                    );
                }

                return <CommentItem comment={comment} key={comment.id} />;
            })}
        </ul>
    );
}
