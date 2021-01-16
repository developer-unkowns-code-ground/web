import { IncomingMessage, ServerResponse } from "http";
import { NextPageContext } from "next";

interface Ctx {
  res: ServerResponse
  req: IncomingMessage
}

export const parseCookies = (request: IncomingMessage) => {
  var list = {};
  var rc = request.headers.cookie;

  rc && rc.split(';').forEach(function( cookie ) {
      var parts = cookie.split('=');
      list[parts.shift().trim()] = decodeURI(parts.join('='));
  });

  return list;
}

export default function withAuth(ctx: NextPageContext, a?: any) {
  const { res, req } : Ctx = ctx;

  let auth = '';

  if (req !== undefined && res !== undefined) {
    auth = parseCookies(req)['auth'];
    if (undefined === auth || auth === '') {
      res.writeHead(302, {
        Location: '/'
      });
      res.end();
    }
  }

  if (undefined !== a) {
    return a(ctx);
  }
  return {
    token: auth,
  };
}

export function withAuthServerProps(ctx: NextPageContext) {
  const { req } : Ctx = ctx;
  let auth = '';
  if (req !== undefined) {
    auth = parseCookies(req)['auth'];
    if (undefined === auth || auth === '') {
      return {
        redirect: {
          destination: '/',
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
