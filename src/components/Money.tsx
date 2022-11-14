import React from "react";

const Money: React.FC<{children: number | string}> = ({children}) => {
  return <>{Number(+children).toLocaleString()}</>
}

export default Money;
