import React, { FC, useCallback } from "react";
import { useRouter } from "next/router";
import { Header, Title, IconBack } from "./navbarComponentStyle";

interface NavbarModel{
  title: string;
  hasBack?: boolean;
}

const navbarComponent : FC<NavbarModel> = (props) => {
  const router = useRouter();
  const { title, children, hasBack }= props;
  const back = useCallback(() => {
    router.back();
  }, []);
  return (
    <Header>
      <div className="flex">
        {hasBack && <IconBack onClick={back} src="/images/arrow-left.png" />}
        <Title>{title}</Title>
      </div>
      {children}
    </Header>
  );
};

export default navbarComponent;
