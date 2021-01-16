import { gql, useMutation } from '@apollo/client';
import { GoogleLogin } from 'react-google-login';



const LOGIN = gql`
  mutation Login($token: String!){
    login( login: { token: $token }) {
      accessToken
    }
  }
`;

const Home = () => {
  const [login, { data }] = useMutation(LOGIN);
  // console.log(login);
  const responseGoogle = (response) => {

    let tokenId = response.tokenId;

    console.log(tokenId);

    login({ variables: { token: tokenId }});
  };


  const onFailure = () => {
    console.log('Fail');
  }
  return (
    <section className="max-w-1/100 mx-auto bg-red-600 h-screen px-4 py-20 flex flex-col justify-between">
      <div className="">
        <p>logo</p>
      </div>
      <div className="text-center text-white">
        <p className="text-4xl font-bold">BOBOT</p>
        <p className="text-xl font-bold py-2">Manage your expenses</p>
      </div>
      <div className="mx-auto w-full">
        <GoogleLogin
          className="w-full text-center"
          clientId="1068092152608-lsuk4hmkrm6v60dmk5dsq0hng8grqk3t.apps.googleusercontent.com"
          buttonText="Continue with Google"
          onSuccess={responseGoogle}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </section>
  );
};

export default Home;
