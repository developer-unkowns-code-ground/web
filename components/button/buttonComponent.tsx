import React, { FC } from "react";
import { Button } from "./buttonComponentStyle";

interface ButtonModel extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  variant?: string;
  disabled?: boolean;
}

const  buttonComponent  = ({children, disabled, ...props}: ButtonModel) => {
  return (
    <Button disabled={disabled} {...props}>
      {children}
    </Button>
  );
};

export {buttonComponent as Button};
export default buttonComponent;
