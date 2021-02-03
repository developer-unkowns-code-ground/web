import colors from "@/colors";
import styled, { css } from "styled-components";

interface ButtonModel {
  disabled?: boolean;
}
export const Button = styled.button<ButtonModel>`
  ${props => props.disabled ? css`
    background: ${colors.gray};
    `: css`
    background: ${colors.secondary};
  `}
  width: 100%;
  height: 56px;
  color: white;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
`;