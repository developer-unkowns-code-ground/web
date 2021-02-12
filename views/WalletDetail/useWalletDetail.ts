import { useQuery } from "@apollo/client";
import { GET_DETAIL_WALLET } from "@/services/gql/wallet";

export default () => {
  const { data } = useQuery(GET_DETAIL_WALLET,{
    variables: {id: 11}
  });
  
  return{
    data
  }
}