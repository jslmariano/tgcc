import { ReactElement } from "react";
import styled from "styled-components";
import { renderToStaticMarkup } from "react-dom/server";
import IconSearch from "@/theme/icons/search.svg?react";
import Input, { InputProps } from "@/ui-kit/intput";

const searchIconDataURL = `data:image/svg+xml;base64,${btoa(renderToStaticMarkup(<IconSearch />))}`;

const StyledSearchInput = styled(Input)<InputProps>`
  background:
    url(${searchIconDataURL}) no-repeat 8px center,
    ${({ theme }) => theme.colors.blank};
  padding: 6px 10px 6px 30px;

  &:hover {
    background:
      url(${searchIconDataURL}) no-repeat 8px center,
      ${({ theme }) => theme.colors.catskillLight};
  }

  & + label {
    display: none;
  }
`;

const SearchInput = (props: InputProps): ReactElement => (
  <StyledSearchInput {...props} />
);

export default SearchInput;
