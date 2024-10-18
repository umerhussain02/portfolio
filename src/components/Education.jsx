import { education } from "../data/Data";
import EducationCard from "./cards/EducationCard";
import { Container, Wrapper, Title, Heading } from "./style/EducationStyle";

const Education = () => {
  return (
    <Container id="education">
      <Wrapper>
        <Title>Education</Title>

        <Heading>My Education</Heading>

        <div className="row my-5">
          {education.map((edu, ind) => (
            <EducationCard key={ind} edu={edu} />
          ))}
        </div>
      </Wrapper>
    </Container>
  );
};

export default Education;
