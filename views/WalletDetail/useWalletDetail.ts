import { useLazyQuery } from "@apollo/client";
import { GET_DETAIL_WALLET } from "@/services/gql/wallet";

export default () => {
  const [getDetail, { data }] = useLazyQuery(GET_DETAIL_WALLET);
  
  return{
    getDetail,
    data
  }
}