import styled from "styled-components";

export const PageWrapper = styled.div`
  padding: 1rem 1.5rem;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
  overflow: hidden;
  z-index: 2;
`;
