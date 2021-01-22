import { IncomingMessage, ServerResponse } from "http";
import { NextPageContext } from "next";

interface Ctx {
  res?: ServerResponse
  req?: IncomingMessage
}

export const parseCookies = (request: IncomingMessage) => {
  const list = {};
  const rc = request.headers.cookie;

  rc && rc.split(";").forEach(function( cookie ) {
      const parts = cookie.split("=");
      list[parts.shift().trim()] = decodeURI(parts.join("="));
  });

  return list;
};

export function withAuthServerProps(ctx: NextPageContext) {
  const { req } : Ctx = ctx;
  let auth = "";
  if (req !== undefined) {
    auth = parseCookies(req)["auth"];
    if (undefined === auth || auth === "") {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
  }
  return {
    props: {
      token: auth,
    },
  };
}
