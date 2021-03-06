import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  padding: 24px;
  position: sticky;
  top: 0;
  background: white;
`;
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
`;
export const IconBack = styled.img`
  width: 24px;
  margin-right: 16px;
  cursor: pointer;
  height: auto;
  object-fit: cover;
`;