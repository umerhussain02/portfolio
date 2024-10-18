import { Bio } from "../data/Data";
import Typewriter from "typewriter-effect";
import Pic from "../images/hero.png";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";

import {
  Container,
  LeftCol,
  LeftWrapper,
  Title,
  NameContainer,
  FirstName,
  LastName,
  Textloop,
  LinksContainer,
  SocialLinks,
  ResumeButton,
  RightCol,
  RightWrapper,
  Image,
  Desc,
} from "./style/HeroStyle";

const Hero = () => {
  return (
    <Container id="hero" className="container-fluid">
      <div className="row">
        <LeftCol className="col-12 col-sm-12 col-md-12 col-lg-7">
          <LeftWrapper>
            <Title>Hi, my name is</Title>

            <NameContainer>
              <FirstName>Umer</FirstName>
              <LastName>Hussain</LastName>
            </NameContainer>

            <Textloop>
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </Textloop>

            <LinksContainer>
              <SocialLinks href={`mailto:${Bio.email}`}>
                <EmailIcon fontSize="inherit" />
              </SocialLinks>
              <SocialLinks href={Bio.linkedin} target="_blank">
                <LinkedInIcon fontSize="inherit" />
              </SocialLinks>

              <SocialLinks href={Bio.github} target="_blank">
                <GitHubIcon fontSize="inherit" />
              </SocialLinks>
            </LinksContainer>

            <ResumeButton href={Bio.resume} target="_blank">
              Check Resume
            </ResumeButton>
          </LeftWrapper>
        </LeftCol>

        <RightCol className="col-12 col-sm-12 col-md-12 col-lg-5">
          <RightWrapper>
            <Image src={Pic} alt="pic" className="img-fluid" />
          </RightWrapper>
        </RightCol>
      </div>

      <div className="row">
        <div className="col-12 py-5 mt-0 mt-md-2 mt-lg-3 mt-xl-5">
          <Desc>{Bio.description}</Desc>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
