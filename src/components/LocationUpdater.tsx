import { useEffect, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

function LocationUpdater(props: RouteComponentProps) {
    const [path, setPath] = useState(props.location.pathname);

    const handleUpdate = () => {
        const { pathname } = props.location;
        if (path === pathname) return;

        setPath(pathname);

        fetch(pathname)
            .then((response) => {
                return response.text();
            })
            .then((response) => {
                const html = new DOMParser().parseFromString(
                    response,
                    "text/html"
                );
                const data = html.getElementById("blog-data")?.innerHTML;

                if (data) {
                    eval(data);

                    if (window.setLastUpdate) {
                        window.setLastUpdate(new Date().getTime());
                    }
                }
            });
    };

    useEffect(handleUpdate, [props.location.pathname]);

    return null;
}

export default withRouter(LocationUpdater);
