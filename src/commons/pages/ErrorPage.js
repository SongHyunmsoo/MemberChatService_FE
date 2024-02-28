import React from "react";

const ErrorPage = ({chilren}) => {
    return <h1>{chilren}</h1>;
};

export default React.memo(ErrorPage);