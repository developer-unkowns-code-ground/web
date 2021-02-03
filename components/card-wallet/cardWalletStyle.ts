import styled from 'styled-components';

export const WrapperWallet = styled.div`
  background: white;
  box-shadow: 0px 18px 80px rgba(0, 0, 0, 0.08), 0px 4.02054px 17.869px rgba(0, 0, 0, 0.0476886), 0px 1.19702px 5.32008px rgba(0, 0, 0, 0.0323114);
  border-radius: 16px;
  padding: 24px;
  &:not(:last-child){
    margin-bottom: 16px;
  }
`;
export const HeaderWallet = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
`;
export const LabelImage = styled.img`
  width: 30px;
`;
export const WalletLabel = styled.div`
  font-size: 11px;
  color: #a2a2a5;
`;
export const WalletName = styled.div`
  font-size: 11px;
  color: #64646b;
  text-transform: capitalize;
`;
export const WalletAmount = styled.div`
  font-size: 20px;
  color: #12121D;
  font-weight: bold;
  text-align: left;
  margin-top: 38px;
`;