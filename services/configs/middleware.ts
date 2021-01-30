import Router from "next/router";

const checkRoute =  () => {
  const lsAccessToken: string = localStorage.getItem("access_token");
  if (!lsAccessToken){
    Router.push("/login");
  }
};

export default checkRoute;