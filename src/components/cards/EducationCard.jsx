import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  border-radius: 10px;
  padding: 10px 10px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  background-color: ${({ theme }) => theme.primary + 20};
  border: 1px solid ${({ theme }) => theme.text_primary + 20};

  &:hover {
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.primary};
  }

  @media only screen and (max-width: 768px) {
    padding: 10px;
    /* gap: 8px; */
  }

  @media (max-width: 380px) {
    padding: 10px;
    /* gap: 8px; */
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Span = styled.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Degree = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const EducationCard = ({ edu }) => {
  return (
    <>
      <div className="col-12 col-sm-12 col-md-6 mb-4">
        <Card>
          <Top>
            <Body>
              <Name>{edu.school}</Name>
              <Degree>{edu.degree}</Degree>
              <Date>{edu.date}</Date>
            </Body>
          </Top>

          <Description>
            <Span>{edu.desc}</Span>
          </Description>
        </Card>
      </div>
    </>
  );
};

export default EducationCard;
