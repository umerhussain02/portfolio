import { skills } from "../data/Data";
import SkillsCard from "./cards/SkillsCard";
import {
  Container,
  Wrapper,
  Title,
  Heading,
  SkillsContainer,
} from "./style/SkillsStyle";

const Skills = () => {
  console.log(skills);
  return (
    <Container id="skills" className="container-fluid">
      <Wrapper>
        <Title>Skills</Title>
        <Heading>My Skills</Heading>
        <SkillsContainer>
          {skills.map((item, index) => (
            <SkillsCard key={index} item={item} />
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

// <SkillsContainer>
//
//         </SkillsContainer>

export default Skills;
