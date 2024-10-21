import styled from "styled-components";
import { CSS } from "styled-components/dist/types";

export const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0 0;
  ${({ theme }) => theme.typography.bodySmall};
  color: ${({ theme }) => theme.colors.bayoux};

  thead {
    border-bottom: 4px solid ${({ theme }) => theme.colors.blank};
  }
`;

export const TableRow = styled.tr``;

type CellProps = {
  /**
   * Align text content of a cell.
   * This is different than the "align" HTML attribute.
   * Even though the "align" attribute is available out of the box,
   * we should not use it as it is deprecated.
   *
   * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#align
   */
  $textAlign?: CSS.Property.TextAlign;
};

export const TableThCell = styled.th<CellProps>`
  white-space: nowrap;
  padding: 18px 0 18px 20px;
  font-size: 0.6875rem;
  text-transform: uppercase;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.darkBlue};
  background-color: ${({ theme }) => theme.colors.catskillWhite};
  text-align: ${(props) => props.$textAlign ?? "left"};
  line-height: 16px;

  &:last-child {
    padding-right: 20px;
  }
`;

export const TableCell = styled.td<CellProps>`
  height: 64px;
  padding: 8px 0 8px 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.mischka};
  border-radius: 0;
  background-color: ${({ theme }) => theme.colors.blank};
  text-align: ${(props) => props.$textAlign ?? "left"};

  &:last-child {
    padding-right: 20px;
  }

  ${TableRow}:first-child & {
    border-top: 0;
  }

  ${TableRow}:last-child & {
    &:first-child {
      border-bottom-left-radius: 10px;
    }
    &:last-child {
      border-bottom-right-radius: 10px;
    }
  }
`;

export const TableContainer = styled.div``;

export const ToolbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background-color: ${({ theme }) => theme.colors.blank};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
