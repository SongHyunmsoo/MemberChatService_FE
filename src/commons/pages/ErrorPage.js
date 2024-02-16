import React from 'react';

const ErrorPage = ({ children }) => {
  return <h1>{children}</h1>;
};

export default React.memo(ErrorPage);
