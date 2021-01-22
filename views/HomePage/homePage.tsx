import React from "react";
import { NextPageContext } from "next";
import { Section } from "./homePageStyle";
import { withAuthServerProps } from "@/lib/withAuth";

const homePage = () => {
  return (
    <div>
      home
    </div>
  );
};

export const getServerSideProps = (ctx: NextPageContext) => withAuthServerProps(ctx);

export default homePage;
