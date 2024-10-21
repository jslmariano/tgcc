import styled, { DefaultTheme, css } from "styled-components";

type Props = {
  $variant?: keyof DefaultTheme["typography"];
  $color?: keyof DefaultTheme["colors"];
};

export const Text = styled.span<Props>`
  ${(props) => {
    return props.theme.typography[props.$variant ?? "body"];
  }}

  ${(props) => {
    return (
      props.$color &&
      css`
        color: ${({ theme }) => theme.colors[props?.$color ?? "blank"]};
      `
    );
  }}
`;
