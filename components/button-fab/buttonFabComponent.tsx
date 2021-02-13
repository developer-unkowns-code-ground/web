import React, { FC } from "react";
import { ButtonFab } from "./buttonFabComponentStyles";

interface ButtonModel extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  variant?: string;
  disabled?: boolean;
}

const  buttonFabComponent  = ({children, disabled, ...props}: ButtonModel) => {
  return (
    <ButtonFab disabled={disabled} {...props}>
      {children}
    </ButtonFab>
  );
};

export {buttonFabComponent as Fab};
export default buttonFabComponent;
