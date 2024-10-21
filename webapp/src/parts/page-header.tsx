import { ReactElement, useMemo } from "react";
import styled from "styled-components";
import { Text } from "@/ui-kit/text";
import { useProductStore } from "@/hooks/useProductStore";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
`;

const MemberCount = styled(Text)`
  line-height: 22px;
`;

const HeaderTitle = styled.h1`
  ${({ theme }) => theme.typography.h1}
`;

export const PageHeader = (): ReactElement => {
  const { data } = useProductStore();

  const total = useMemo(() => data?.total || 0, [data?.total]);

  return (
    <Container>
      <TitleContainer>
        <HeaderTitle>Products</HeaderTitle>
        <MemberCount $variant="bodySmall" $color={"bayoux"}>
          {total} products
        </MemberCount>
      </TitleContainer>
    </Container>
  );
};
