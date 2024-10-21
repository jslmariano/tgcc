import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import { Profile } from "../ui-kit/profile";

const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.blank};
  width: 100%;
`;

const Inner = styled.div`
  margin: 0 auto;
  height: 80px;
  max-width: var(--layout-width);
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const AppHeader = (): JSX.Element => {
  return (
    <Wrapper>
      <Inner>
        <Profile
          name="Josel Mariano"
          role="Admin"
          picUrl="https://avatars.githubusercontent.com/u/20830165?v=4"
        />
      </Inner>
    </Wrapper>
  );
};
