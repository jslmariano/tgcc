import { ComponentPropsWithoutRef, ReactElement } from "react";
import styled from "styled-components";

export type InputProps = ComponentPropsWithoutRef<"input"> & {
  ["aria-label"]: string;
  ["aria-describedby"]?: string;
};

export const StyledInput = styled.input<InputProps>`
  outline: none;
  line-height: 22px;

  border: 1px solid ${({ theme }) => theme.colors.lynch};
  border-radius: 25px;
  padding: 6px 10px 6px 10px;

  outline-width: 2px;
  outline-offset: 2px;
  outline-style: none;

  ${({ theme }) => theme.typography.bodySmall};

  &::placeholder {
    color: ${({ theme }) => theme.colors.bayoux};
    ${({ theme }) => theme.typography.bodySmall}
  }

  &:focus {
    outline-style: solid;
    outline-color: ${({ theme }) => theme.colors.gray};
  }
`;

const Input = (props: InputProps): ReactElement => {
  const {
    ["aria-label"]: $ariaLabel,
    ["aria-describedby"]: $ariaDescribedBy,
    id,
    ...rest
  } = props;
  return (
    <>
      <StyledInput
        aria-label={$ariaLabel}
        aria-describedby={$ariaDescribedBy}
        {...rest}
      />
      {id && <label htmlFor={id}>{$ariaLabel}</label>}
    </>
  );
};

export default Input;
