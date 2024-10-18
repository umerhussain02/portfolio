import styled from "styled-components";

export const Container = styled.div`
  /* background-color: ${({ theme }) => theme.bg_light}; */

  background-color: hsla(270, 22%, 7%, 1);
  background-image: radial-gradient(
      at 60% 70%,
      hsla(264, 81%, 13%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 30% 21%, hsla(266, 85%, 17%, 0.4) 0px, transparent 50%);

  padding: 50px 40px;

  @media (max-width: 768px) {
    padding: 40px 10px;
  }

  @media (max-width: 576px) {
    padding: 30px 10px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  transition: all 0.3s ease;

  @media (max-width: 991.95px) {
    align-items: center;
  }
`;

export const Title = styled.p`
  font-size: 17px;
  font-weight: 400;
  text-transform: uppercase;

  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 5px;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
    transition: all 0.3s ease;
  }
`;

export const Heading = styled.h3`
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.primary} 10%,
    ${({ theme }) => theme.primary_dark}
  );

  font-size: 50px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 15px;

  transition: all 0.3s ease;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 40px;
    text-align: center;
    transition: all 0.3s ease;
  }

  @media (max-width: 576px) {
    font-size: 35px;
    text-align: center;
    transition: all 0.3s ease;
  }
`;
