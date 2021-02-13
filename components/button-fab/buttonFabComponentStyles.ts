import colors from "@/colors";
import styled, { css } from "styled-components";

interface ButtonModel {
  disabled?: boolean;
}
export const ButtonFab = styled.button<ButtonModel>`
  ${props => props.disabled ? css`
    background: ${colors.gray};
    `: css`
    background: ${colors.blue};
  `}
  width: 70px;
  height: 70px;
  border-radius: 100%;
  box-shadow: 0 6px 10px 0 #666;
  transition: all 0.1s ease-in-out;
  font-size: 47px;
  color: white;
  text-align: center;
  line-height: 70px;
  position: fixed;
  right: 25px;
  bottom: 25px;
`;