import React from "react";
import "./Container.css";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container(props: Readonly<ContainerProps>) {
  return (
    
    <div
      className={` p-0 w-auto  xl:px-0 ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
    
  );
}

