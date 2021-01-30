export default () => {

  const logout = () => {
    localStorage.removeItem("access_token");
    location.href= "/login";
  };
  return{
    logout
  };
};