import { ComponentPropsWithoutRef, ReactElement } from "react";
import styled, { css, keyframes } from "styled-components";
import { SROnly } from "./sr-only";

type Kind = "default" | "danger" | "primary";

export const StyledButton = styled.button<{ $kind?: Kind }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  font-size: 1rem;
  font-weight: 500;
  line-height: 1;
  min-height: 44px;
  padding: 10px 24px;
  border-radius: 24px;

  outline-width: 2px;
  outline-offset: 6px;
  outline-style: none;

  border: ${({ $kind, theme }) => {
    switch ($kind) {
      case "primary":
      case "danger":
        return "none";
      default:
        return `2px solid ${theme.colors.lynchLight}`;
    }
  }};

  background: ${({ $kind, theme }) => {
    switch ($kind) {
      case "primary":
        return theme.colors.irisBlue;
      case "danger":
        return theme.colors.redPink;
      default:
        return theme.colors.blank;
    }
  }};

  color: ${({ $kind, theme }) => {
    switch ($kind) {
      case "primary":
      case "danger":
        return theme.colors.blank;
      default:
        return theme.colors.lynch;
    }
  }};

  &:hover {
    background: ${({ $kind, theme }) => {
      switch ($kind) {
        case "primary":
          return theme.colors.irisBlueLight;
        case "danger":
          return theme.colors.redPinkDark;
        default:
          return theme.colors.mischka;
      }
    }};
  }

  &:focus {
    outline-style: solid;
    outline-color: ${({ $kind, theme }) => {
      switch ($kind) {
        case "primary":
          return theme.colors.irisBluePale;
        case "danger":
          return theme.colors.redPinkPale;
        default:
          return theme.colors.lynchPale;
      }
    }};
  }
`;

type LabelProps = {
  $isLoading?: boolean;
};

const StyledLabel = styled.span<LabelProps>`
  transition: color 250ms;

  ${({ theme }) => theme.typography.bodyMedium}

  ${({ $isLoading }) =>
    $isLoading &&
    css`
      color: transparent;
    `}
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.span`
  position: absolute;
  display: block;
  width: 1em;
  height: 1em;
  top: calc(50% - 0.5em);
  left: calc(50% - 0.5em);
  border-width: 2px;
  border-color: inherit;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-style: solid;
  border-radius: 50%;
  animation: ${spin} 0.45s linear infinite;
`;

type Props = ComponentPropsWithoutRef<"button"> &
  LabelProps & {
    $kind?: Kind;
  };

export const Button = (props: Props): ReactElement => {
  const { $isLoading, children, ...rest } = props;

  return (
    <StyledButton type="button" {...rest}>
      <StyledLabel $isLoading={$isLoading}>{children}</StyledLabel>
      {$isLoading && (
        <>
          <SROnly aria-live="assertive">Loading</SROnly>
          <StyledSpinner />
        </>
      )}
    </StyledButton>
  );
};
