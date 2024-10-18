import styled from "styled-components";

export const Container = styled.div`
  /* background: ${({ theme }) => theme.bg}; */
  background-color: hsla(270, 22%, 7%, 1);
  background-image: radial-gradient(
      at 12% 53%,
      hsla(70, 0%, 0%, 0) 0px,
      transparent 50%
    ),
    radial-gradient(at 80% 46%, hsla(262, 89%, 39%, 0.31) 0px, transparent 50%);

  @media (max-width: 991px) {
    background-color: hsla(270, 22%, 7%, 1);
    background-image: radial-gradient(
        at 12% 53%,
        hsla(70, 0%, 0%, 0) 0px,
        transparent 50%
      ),
      radial-gradient(at 52% 33%, hsla(262, 91%, 22%, 0.3) 0px, transparent 50%);
  }

  margin-bottom: 50px;
`;

export const LeftCol = styled.div`
  order: 1;
  padding: 0 0;

  @media (max-width: 991.95px) {
    order: 2;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  padding: 90px 0 10px 40px;

  @media (max-width: 1070px) {
    padding: 80px 0 10px 50px;
    transition: all 0.3s ease;
  }

  @media (max-width: 991.95px) {
    align-items: center;
    padding: 30px 40px 30px 40px;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    align-items: center;
    padding: 30px 20px 30px 20px;
    transition: all 0.3s ease;
  }

  @media (max-width: 576px) {
    padding: 30px 20px 30px 20px;
    transition: all 0.3s ease;
  }

  @media (max-width: 450px) {
    padding: 30px 10px 30px 10px;
    transition: all 0.3s ease;
  }
  /* 
  @media (max-width: 370px) {
    padding: 30px 10px 30px 10px;
    transition: all 0.3s ease;
  } */
`;

export const Title = styled.div`
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 3px;
    transition: 0.3s;
  }

  @media (max-width: 325px) {
    text-align: center;
    margin-bottom: 10px;
  }
`;

export const NameContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: start;
  align-items: center;
  gap: 13px;

  margin-bottom: 25px;

  @media (max-width: 768px) {
    gap: 10px;
    margin-bottom: 20px;
    transition: 0.3s;
  }

  @media (max-width: 576px) {
    justify-content: center;
    gap: 8px;
    margin-bottom: 18px;
    transition: 0.3s;
  }

  @media (max-width: 450px) {
    justify-content: center;
    margin-bottom: 20px;
    transition: 0.3s;
  }
`;

export const FirstName = styled.h3`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 3px;
    width: 100%;
    height: 6px;
    border-radius: 10px;
    box-shadow: 0 0 20px #b177f386;
    transition: all 0.3s ease-in-out;
    background: linear-gradient(90deg, #b481f8, #7000ff);
  }

  font-size: 50px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 0px;

  @media (max-width: 1070px) {
    font-size: 47px;
    transition: all 0.3s ease;
  }

  @media (max-width: 960px) {
    font-size: 45px;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    font-size: 40px;
    transition: 0.3s;

    &::after {
      left: 0;
      bottom: 1px;
      width: 100%;
      height: 5px;
      border-radius: 10px;
    }
  }

  @media (max-width: 576px) {
    font-size: 35px;
    transition: 0.3s;

    &::after {
      left: 0;
      bottom: -1px;
      width: 100%;
      height: 3px;
      border-radius: 10px;
    }
  }

  @media (max-width: 325px) {
    text-align: center;
    font-size: 30px;
    transition: 0.3s;

    &::after {
      left: 0;
      bottom: 0px;
      width: 100%;
      height: 3px;
      border-radius: 10px;
    }
  }
`;

export const LastName = styled.h3`
  font-size: 50px;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 0px;

  @media (max-width: 1070px) {
    font-size: 47px;
    transition: all 0.3s ease;
  }

  @media (max-width: 960px) {
    font-size: 45px;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    font-size: 40px;
    transition: 0.3s;
  }

  @media (max-width: 576px) {
    font-size: 35px;
    transition: 0.3s;
  }

  @media (max-width: 325px) {
    text-align: center;
    font-size: 30px;
    transition: 0.3s;
  }
`;

export const Textloop = styled.div`
  font-size: 28px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 40px;

  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;

  @media (max-width: 1070px) {
    font-size: 26px;
    transition: all 0.3s ease;
  }

  @media (max-width: 996px) {
    font-size: 25px;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 30px;
    transition: 0.3s;
  }

  @media (max-width: 576px) {
    font-size: 20px;
    margin-bottom: 28px;
    transition: 0.3s;
  }

  @media (max-width: 450px) {
    text-align: center;
    font-size: 16px;
    margin-bottom: 20px;
    transition: 0.3s;
  }

  @media (max-width: 300px) {
    line-height: 25px;
    margin-bottom: 20px;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 23px;

  margin-bottom: 40px;

  @media (max-width: 768px) {
    gap: 22px;
    margin-bottom: 35px;
    transition: 0.3s;
  }

  @media (max-width: 576px) {
    justify-content: center;
    gap: 20px;
    transition: 0.3s;
  }
`;

export const SocialLinks = styled.a`
  font-size: 30px;
  font-weight: 600;
  cursor: pointer;
  color: ${({ theme }) => theme.text_primary};

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.primary};
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    font-size: 25px;
    transition: 0.3s;
  }

  @media (max-width: 576px) {
    text-align: center;
    font-size: 25px;
    transition: 0.3s;
  }
`;

export const ResumeButton = styled.a`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.primary + 30};
  border: 2px solid #7000ff;
  border-radius: 10px;
  padding: 10px 30px;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 8px 2px #8d4ce142;
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
    padding: 8px 25px;
    transition: 0.3s;
  }
`;

export const RightCol = styled.div`
  order: 2;
  padding: 0 0;

  @media (max-width: 991.95px) {
    order: 1;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;

  padding: 70px 40px 0px 0;

  @media (max-width: 1070px) {
    padding: 65px 40px 0 0;
    transition: all 0.3s ease;
  }

  @media (max-width: 991.95px) {
    padding: 50px 20px 40px 20px;
    justify-content: center;
    transition: all 0.3s ease;
  }
`;

export const Image = styled.img`
  width: 420px;
  height: 420px;

  z-index: 1;

  @media (max-width: 1070px) {
    width: 400px;
    height: 400px;
    transition: all 0.3s ease;
  }

  @media (max-width: 991.95px) {
    width: 450px;
    height: auto;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    width: 400px;
    height: auto;
    transition: all 0.3s ease;
  }

  @media (max-width: 576px) {
    width: 80%;
    height: auto;
    transition: all 0.3s ease;
  }
`;

export const Desc = styled.div`
  font-size: 35px;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 0;
  padding: 0 10px;

  @media (max-width: 991.95px) {
    font-size: 30px;
    font-weight: 400;
    padding: 0 20px;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    font-size: 25px;
    transition: all 0.3s ease;
  }

  @media (max-width: 576px) {
    font-size: 20px;
    transition: all 0.3s ease;
  }

  @media (max-width: 450px) {
    font-size: 17px;
    transition: all 0.3s ease;
  }
`;
