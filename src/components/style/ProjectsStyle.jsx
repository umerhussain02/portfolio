import styled from "styled-components";

export const Container = styled.div`
  /* background-color: ${({ theme }) => theme.bg_light}; */

  background-color: hsla(270, 22%, 7%, 1);
  background-image: radial-gradient(
      at 34% 66%,
      hsla(266, 85%, 17%, 0.8) 0px,
      transparent 50%
    ),
    radial-gradient(at 71% 33%, hsla(266, 85%, 17%, 0.9) 0px, transparent 50%);

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

// CARD STYLE START-----------------------------------------

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;

  margin-top: 50px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const Card = styled.div`
  width: 310px;
  padding: 15px 10px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  background-color: ${({ theme }) => theme.primary + 20};
  box-shadow: 0 0 10px 4px #1a0130;
  cursor: pointer;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 14px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 20px 10px ${({ theme }) => theme.primary + 30};
    border: 1px solid ${({ theme }) => theme.primary};
    filter: brightness(1.1);
  }

  @media (max-width: 576px) {
    width: 94%;
    gap: 30px;
  }

  @media (max-width: 320px) {
    width: 100%;
    gap: 30px;
  }

  /* @media (max-width: 390px) {
    width: 100%;
  } */
`;

export const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

export const Tags = styled.div`
  width: 100%;
  margin-top: 4px;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled.span`
  font-size: 12px;
  background-color: ${({ theme }) => theme.card + 80};
  color: ${({ theme }) => theme.text_primary};
  padding: 10px 15px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  transition: all 0.3s ease-in-out;

  &:hover {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

export const Details = styled.div`
  width: 100%;
  padding: 0px 2px;

  display: flex;
  flex-direction: column;
  gap: 0px;
`;

export const CardTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;

  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

export const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

export const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({ theme }) => theme.card};
`;

export const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  margin-top: 8px;
  max-width: 100%;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

export const ReadMore = styled.button`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  background: none;
  border: 2px solid #7000ff;
  padding: 12px 16px;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;
  margin-bottom: 3px;

  &:hover {
    box-shadow: 0 0 8px 2px #8d4ce142;
    background-color: ${({ theme }) => theme.primary};
  }

  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

// CARD STYLE END-----------------------------------------

// MODAL STYLE START-----------------------------------------

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0px auto;
  background-color: transparent;
  outline: none;
  overflow-y: scroll;
  overflow-x: hidden;
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
`;

export const ModalWrapper = styled.div`
  width: 80%;
  max-width: 800px;
  border-radius: 16px;
  margin: 10px 12px;
  height: min-content;
  border: 1px solid ${({ theme }) => theme.primary_dark};
  background-color: ${({ theme }) => theme.card_light};
  color: ${({ theme }) => theme.text_primary};
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 992px) {
    position: relative;
    top: 0;
    right: 0;
    width: 90%;
    transition: all 0.3s;
  }

  @media (max-width: 768px) {
    position: relative;
    top: 0;
    right: 0;
    width: 90%;
    transition: all 0.3s;
  }

  @media (max-width: 576px) {
    position: relative;
    top: 0;
    right: 0;
    width: 90%;
    transition: all 0.3s;
  }
`;

export const ModalTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 24px;
    margin: 10px 6px 0px 6px;
    text-align: center;
  }
`;

export const ModalDesc = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  margin: 8px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
    margin: 6px 6px;
    text-align: center;
  }
`;

export const ModalImage = styled.img`
  width: 100%;
  margin: 0 auto;
  object-fit: cover;
  border-radius: 12px;
  margin-top: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
`;

export const ModalLabel = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    margin: 8px 6px;
  }
`;

export const ModalTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 8px 0px;
  @media only screen and (max-width: 600px) {
    margin: 4px 0px;
    justify-content: center;
  }
`;

export const ModalTag = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin: 4px;
  padding: 4px 8px;
  border-radius: 8px;
  color: ${({ theme }) => theme.text_primary};
  border: 1px solid ${({ theme }) => theme.primary + 99};
  background-color: ${({ theme }) => theme.card};
  @media only screen and (max-width: 576px) {
    font-size: 12px;
  }
`;

export const ModalMembers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-wrap: wrap;
  margin: 12px 6px;
  @media only screen and (max-width: 600px) {
    margin: 4px 6px;
  }
`;

export const ModalMember = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;

  @media (max-width: 576px) {
    flex-direction: column;
    padding: 10px 0px;
  }
`;

export const ModalMemberImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 4px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  @media only screen and (max-width: 600px) {
    width: 32px;
    height: 32px;
  }
`;

export const ModalMemberName = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  @media only screen and (max-width: 600px) {
    font-size: 14px;
    text-align: center;
  }
`;

export const ModalButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 12px 0px;
  gap: 12px;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ModalButton = styled.a`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.primary + 30};
  border: 2px solid #7000ff;
  padding: 12px 16px;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;
  &:hover {
    box-shadow: 0 0 8px 2px #8d4ce142;
    border-color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary};
  }
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

// MODAL STYLE END-----------------------------------------
