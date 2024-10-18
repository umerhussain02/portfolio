import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import logo from "../assets/logo.png";
import {
  Container,
  Wrapper,
  RightWrapper,
  LeftWrapper,
  Logo,
  MyLogo,
  NavMenu,
  NavItem,
  NavLink,
  MobileMenu,
  MobileIcon,
  MobileLink,
} from "./style/HeaderStyle";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Wrapper>
        <LeftWrapper>
          <Logo to="hero">
            <MyLogo src={logo} alt="logo" className="img-fluid" />
          </Logo>
        </LeftWrapper>

        <RightWrapper>
          <NavMenu>
            <NavItem>
              <NavLink
                to="hero"
                spy={true}
                duration={500}
                smooth={true}
                offset={-200}
              >
                Home
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                to="skills"
                spy={true}
                duration={500}
                smooth={true}
                offset={0}
              >
                Skills
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                to="projects"
                spy={true}
                duration={500}
                smooth={true}
                offset={0}
              >
                Projects
              </NavLink>
            </NavItem>

            {/* <NavItem>
              <NavLink
                to="education"
                spy={true}
                duration={500}
                smooth={true}
                offset={-80}
              >
                Education
              </NavLink>
            </NavItem> */}

            <NavItem>
              <NavLink
                to="contact"
                spy={true}
                duration={500}
                smooth={true}
                offset={0}
              >
                Contact
              </NavLink>
            </NavItem>
          </NavMenu>
        </RightWrapper>

        <MobileIcon
          onClick={() => {
            setOpen(!open);
          }}
        >
          {!open ? <FiMenu /> : <AiOutlineClose />}
        </MobileIcon>

        {open && (
          <MobileMenu open={open}>
            <MobileLink
              onClick={() => {
                setOpen(!open);
              }}
              to="hero"
              spy={true}
              duration={500}
              smooth={true}
              offset={-200}
            >
              Home
            </MobileLink>

            <MobileLink
              onClick={() => {
                setOpen(!open);
              }}
              to="skills"
              spy={true}
              duration={500}
              smooth={true}
              offset={-30}
            >
              Skills
            </MobileLink>

            <MobileLink
              onClick={() => {
                setOpen(!open);
              }}
              to="projects"
              spy={true}
              duration={500}
              smooth={true}
              offset={-30}
            >
              Projects
            </MobileLink>

            {/* <MobileLink
              onClick={() => {
                setOpen(!open);
              }}
              to="education"
              spy={true}
              duration={500}
              smooth={true}
              offset={-80}
            >
              Education
            </MobileLink> */}

            <MobileLink
              onClick={() => {
                setOpen(!open);
              }}
              to="contact"
              spy={true}
              duration={500}
              smooth={true}
              offset={-30}
            >
              Contact
            </MobileLink>
          </MobileMenu>
        )}
      </Wrapper>
    </Container>
  );
};

export default Header;
