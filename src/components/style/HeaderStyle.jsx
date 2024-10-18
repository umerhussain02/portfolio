import { Link } from "react-scroll";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  padding: 10px 35px;

  background: rgba(18, 14, 22, 0.8);
  backdrop-filter: blur(5px);
  position: sticky;
  top: 0;

  @media (max-width: 600px) {
    padding: 10px 15px;
  }

  z-index: 10;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 100%;

  @media (max-width: 960px) {
    align-items: center;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 960px) {
    display: none;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 600px) {
    font-size: 19px;
  }
`;

export const MyLogo = styled.img`
  width: 24px;

  @media (max-width: 768px) {
    width: 22px;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 20px;
  margin-bottom: 0px;
`;

export const NavItem = styled.li`
  padding: 0 5px;
`;

export const NavLink = styled(Link)`
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text_primary};

  position: relative;

  &::after {
    content: "";
    text-align: center;
    position: absolute;
    left: 0;
    bottom: -8px;
    background: linear-gradient(90deg, #b481f8, #7000ff);
    height: 3px;
    width: 0%;
    transition: all 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 0 10px #af72ff9e;
    transition: all 0.3s ease-in-out;
  }

  &.active {
    color: ${({ theme }) => theme.primary};
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 1.8rem;
    color: ${({ theme }) => theme.text_primary};

    &:hover {
      transition: 0.2s;
      cursor: pointer;
      color: ${({ theme }) => theme.primary};
    }
  }
`;

export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    gap: 12px;

    padding: 10px 10px 20px 25px;
    z-index: -1;

    position: absolute;
    top: 48.5px;
    right: 0;
    width: 100%;

    background: linear-gradient(
      30deg,
      ${({ theme }) => theme.bg},
      ${({ theme }) => theme.card + 99}
    );
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
  }
`;

export const MobileLink = styled(Link)`
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text_primary};
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &::after {
    content: "";
    text-align: center;
    position: absolute;
    left: 0;
    bottom: -5px;
    background: linear-gradient(90deg, #b481f8, #7000ff);
    height: 3px;
    width: 0%;
    transition: all 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
    border: none;
    border-radius: 10px;
    box-shadow: 0 0 10px #af72ff9e;
    transition: all 0.3s ease-in-out;
  }

  /* &.active {
    color: ${({ theme }) => theme.primary};
  } */
`;
