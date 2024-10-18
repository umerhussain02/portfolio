import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 50px 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: hsla(264, 14%, 10%, 1);
  background-image: radial-gradient(
      at 16% 36%,
      hsla(241, 0%, 0%, 0) 0px,
      transparent 50%
    ),
    radial-gradient(at 76% 5%, hsla(240, 98%, 36%, 0.14) 0px, transparent 50%);

  @media (max-width: 576px) {
    padding: 10px 10px;
  }
`;

export const Text = styled.h6`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};

  margin-bottom: 0px;
`;
