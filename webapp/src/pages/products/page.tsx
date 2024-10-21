import { ReactElement } from "react";
import styled from "styled-components";
import { ProductTable } from "./table";
import { ProductContextStore } from "@/contexts/product-store";
import { PageHeader } from "@/parts/page-header";

const Container = styled.main`
  margin: 40px auto;
  padding: 0 16px;
  width: 100%;
  max-width: var(--layout-width);
`;

export const ProductPage = (): ReactElement => {
  return (
    <Container>
      <ProductContextStore>
        <PageHeader />
        <ProductTable />
      </ProductContextStore>
    </Container>
  );
};
