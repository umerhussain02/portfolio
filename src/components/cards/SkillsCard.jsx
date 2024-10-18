import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.primary + 20};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  transition: all 0.3s ease-in-out;

  &:hover {
    border: 1px solid ${({ theme }) => theme.primary};
    filter: brightness(1.1);
    transition: all 0.3s ease-in-out;
    box-shadow: 0 5px 8px ${({ theme }) => theme.primary_dark + 50};
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 30px;
  transition: all 0.3s ease;
  height: 100%;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const CardTitle = styled.h3`
  font-size: 30px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 28px;
    transition: all 0.3s ease;
  }

  @media (max-width: 576px) {
    font-size: 24px;
    transition: all 0.3s ease;
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;

  padding: 5px 5px;
  margin-top: 20px;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: center;
    transition: all 0.3s ease;
  }

  @media (max-width: 576px) {
    margin-top: 10px;
    transition: all 0.3s ease;
  }
`;

const ListItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  padding: 5px 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 960px) {
    font-size: 15px;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 20px;
    transition: all 0.3s ease;
  }
`;

const Icon = styled.img`
  width: 48px;
  height: 48px;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 58px;
    height: 58px;
    transition: all 0.3s ease;
  }

  @media (max-width: 567px) {
    width: 38px;
    height: 38px;
    transition: all 0.3s ease;
  }
`;

const SkillsCard = ({ item }) => {
  return (
    <Card>
      <CardWrapper>
        <CardTitle>{item.title}</CardTitle>
        <SkillsList>
          {item.skills.map((items, index) => (
            <ListItems key={index}>
              <Icon src={items.image} /> {items.name}
            </ListItems>
          ))}
        </SkillsList>
      </CardWrapper>
    </Card>
  );
};

export default SkillsCard;
