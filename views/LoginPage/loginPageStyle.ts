import styled from "styled-components";
import colors from "@/colors";
import { GoogleLogin } from "react-google-login";

export const Wrapper = styled.div`
  background: ${colors.primary};
  padding: 80px 24px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  margin: -24px;
`;
export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h1`
  font-size: 48px;
  font-style: italic;
  font-weight: 700;

`;
export const Description = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;
export const  ImageState = styled.img`
  height: 200px;
  margin-bottom: 30px;
`;
export const ButtonGoogle = styled(GoogleLogin)`
  opacity: 1 !important;
  width: 100%;
  height: 56px;
  border-radius: 40px !important;
  overflow: hidden;
  display: flex !important;
  justify-content: center;
`;