import { useLazyQuery } from "@apollo/client";
import { GET_DETAIL_WALLET } from "@/services/gql/wallet";

export default (id: string | string[]) => {
  const [getDetail, { data }] = useLazyQuery(GET_DETAIL_WALLET,{
    variables: {id}
  });
  
  return{
    getDetail,
    data
  }
}