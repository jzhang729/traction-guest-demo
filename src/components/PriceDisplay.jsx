import React from "react";
import styled from "styled-components";
import { Strong, UnorderedList, ListItem } from "evergreen-ui";

const Wrapper = styled.div`
  & > * {
    margin-right: 1rem;
  }
`;

const PriceDisplay = ({ regularPrice, salePrice }) => {
  console.log({ salePrice, regularPrice });
  return (
    <UnorderedList display="flex" marginLeft="2rem">
      <ListItem display="flex" justifyContent="space-around" icon="dollar">
        {salePrice ? (
          <Wrapper>
            <s>{regularPrice}</s>
            <Strong size={500}>{salePrice}</Strong>
          </Wrapper>
        ) : (
          <Strong size={500}>{regularPrice}</Strong>
        )}
      </ListItem>
    </UnorderedList>
  );
};

export default PriceDisplay;
