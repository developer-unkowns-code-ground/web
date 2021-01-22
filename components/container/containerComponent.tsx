import React, { FC } from "react";
import { Container } from "./containerComponentStyle";

const wrapperComponent: FC =({children})  => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default wrapperComponent;
