import styled from "styled-components";

export const Container = styled.div`
  padding: 100px 50px 90px 50px;

  @media (max-width: 768px) {
    align-items: center;
    padding: 30px 25px;
  }

  /* background-color: ${({ theme }) => theme.card}; */

  background-color: hsla(264, 14%, 10%, 1);
  background-image: radial-gradient(
      at 5% 51%,
      hsla(258, 89%, 20%, 0.3) 0px,
      transparent 50%
    ),
    radial-gradient(at 86% 82%, hsla(240, 98%, 36%, 0.17) 0px, transparent 50%);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
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
    ${({ theme }) => theme.primary}
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
    margin-bottom: 20px;
    text-align: center;
    transition: all 0.3s ease;
  }
`;

export const Desc = styled.h5`
  font-size: 20px;
  font-weight: 500;
  width: 100%;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 10px;

    transition: all 0.3s ease;
  }

  @media (max-width: 576px) {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 30px;
    text-align: center;
    transition: all 0.3s ease;
  }
`;

export const ContactCard = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  width: 100%;
  /* padding: 20px 20px; */

  @media (max-width: 991.95px) {
    margin-top: 30px;
    gap: 25px;
  }

  @media (max-width: 768px) {
    width: 100%;
    gap: 25px;
  }

  @media (max-width: 576px) {
    width: 100%;
    gap: 25px;
  }
`;

export const Input = styled.input`
  font-size: 18px;
  font-weight: 600;
  width: 100%;
  height: 50px;
  padding: 5px 15px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.primary + 80};
  background-color: #171721;
  color: ${({ theme }) => theme.text_primary};
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    background-color: ${({ theme }) => theme.primary + 10} !important;
    border: 2px solid ${({ theme }) => theme.primary} !important;
    transition: all 0.3s ease;
  }

  &:active {
    background-color: ${({ theme }) => theme.primary + 10} !important;
    border: 2px solid ${({ theme }) => theme.primary} !important;
    transition: all 0.3s ease;
  }
`;

export const Textarea = styled.textarea`
  font-size: 18px;
  font-weight: 600;
  width: 100%;
  height: 200px;
  padding: 10px 15px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.primary + 80};
  background-color: #171721;
  color: ${({ theme }) => theme.text_primary};
  outline: none;
  transition: all 0.3s ease;
  resize: none;

  &:focus {
    background-color: ${({ theme }) => theme.primary + 10};
    border: 2px solid ${({ theme }) => theme.primary};
    transition: all 0.3s ease;
  }
`;

export const Send = styled.input`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.primary + 30};
  border: 2px solid ${({ theme }) => theme.primary + 80};
  border-radius: 10px;
  padding: 10px 30px;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 8px 2px #8d4ce142;
    border: 2px solid ${({ theme }) => theme.primary_dark + 80};
    background-color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 10px 50px;
    text-align: center;
    transition: 0.3s;
  }

  @media (max-width: 576px) {
    font-size: 15px;
    width: 100%;
    padding: 8px 25px;
    transition: 0.3s;
  }
`;
