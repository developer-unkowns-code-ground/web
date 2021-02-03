import React, { FC } from "react";
import { Button } from "./buttonComponentStyle";

interface ButtonModel{
  variant?: string;
  disabled?: boolean;
}

const  buttonComponent : FC<ButtonModel> = (props) => {
  const { children, disabled } = props;
  return (
    <Button disabled={disabled}>
      {children}
    </Button>
  );
};

export {buttonComponent as Button};
export default buttonComponent;
