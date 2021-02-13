import colors from "@/services/configs/colors";
import styled, { css } from "styled-components";

interface AmountModel {
  income?: boolean;
}

export const Transaction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;
export const TransactionName = styled.div<AmountModel>`
  ${(props) =>
    props.income
      ? css`
          color: #12121d;
        `
      : css`
        color: ${colors.primary};
        `}
  font-size: 18px;
  text-transform: capitalize;
`;
