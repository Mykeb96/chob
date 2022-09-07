import { useEffect, useRef } from "react";


const Dom = ({ children }) => {
  // console.log(children.type.name)

  const ref = useRef(null);


  return (
    <div
      className={children.type.name}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 10,
        overflow: "hidden",
      }}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default Dom;
