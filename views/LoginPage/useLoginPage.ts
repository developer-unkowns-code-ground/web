import { useCallback } from 'react';
import { useMutation } from "@apollo/client";
import { GoogleLoginResponse } from 'react-google-login';
import { useRouter } from 'next/router';
import { LOGIN } from '@/services/gql/auth'

export default () => {
  const router = useRouter();
  const [mutationLogin, { data }] = useMutation(LOGIN);

  const onSuccess = useCallback((response : GoogleLoginResponse) => {
    mutationLogin({ variables: { token: response.tokenId } });
  }, []);

  if(data){
    localStorage.setItem("access_token", JSON.stringify({accessToken: data?.login?.accessToken}));
    router.push("/");
  }

  return{
    onSuccess
  }
}