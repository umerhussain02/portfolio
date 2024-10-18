import { useEffect, useState } from "react";
import { projects } from "../data/Data";
import Modal from "@mui/material/Modal";
import { CloseRounded, GitHub, LinkedIn } from "@mui/icons-material";

import {
  Container,
  Wrapper,
  Title,
  Heading,
  CardContainer,
  Card,
  Image,
  Tags,
  Tag,
  Details,
  CardTitle,
  Members,
  Avatar,
  Description,
  ModalContainer,
  ModalWrapper,
  ModalTitle,
  ModalDesc,
  ModalImage,
  ModalTags,
  ModalTag,
  ModalMembers,
  ModalMember,
  ModalMemberImage,
  ModalMemberName,
  ModalButtonGroup,
  ModalButton,
} from "./style/ProjectsStyle";

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [d, setD] = useState(null);

  const data = openModal?.project;

  const handelData = () => {
    setD(openModal?.project);
  };

  useEffect(() => {
    handelData();
  }, [data]);

  return (
    <Container id="projects" className="container-fluid">
      <Wrapper>
        <Title>Projects</Title>

        <Heading>My Projects</Heading>

        <CardContainer>
          {projects.map((project, index) => (
            <Card
              key={index}
              onClick={() => {
                setOpen(true);
                setOpenModal({ state: true, project: project });
              }}
            >
              <Image src={project.image} />
              <Tags>
                {project.tags?.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </Tags>

              <Details>
                <CardTitle>{project.title}</CardTitle>
                {/* <Description>{project.description}</Description> */}
              </Details>

              <Members>
                {project.member?.map((member, index) => (
                  <Avatar key={index} src={member.img} />
                ))}
              </Members>
            </Card>
          ))}
        </CardContainer>

        <Modal
          open={open}
          onClose={() => {
            setD(null);
            setOpen(false);
            setOpenModal({ state: false, project: null });
          }}
        >
          <ModalContainer>
            <ModalWrapper>
              <div className="d-flex justify-content-end align-items-center p-0">
                <CloseRounded
                  style={{
                    cursor: "pointer",
                    padding: "0px",
                    marginBottom: "0px",
                    fontSize: "35px",
                  }}
                  onClick={() => {
                    setD(null);
                    setOpen(false);
                    setOpenModal({ state: false, project: null });
                  }}
                />
              </div>
              <ModalImage src={d?.image} />
              <ModalTitle>{d?.title}</ModalTitle>
              <ModalTags>
                {d?.tags.map((tag, ind) => (
                  <ModalTag key={ind}>{tag}</ModalTag>
                ))}
              </ModalTags>
              <ModalDesc>{d?.description}</ModalDesc>
              {d?.member && (
                <>
                  <ModalMembers>
                    {d?.member.map((member, ind) => (
                      <ModalMember key={ind}>
                        <ModalMemberImage src={member.img} />
                        <ModalMemberName>{member.name}</ModalMemberName>
                        <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
                          <a
                            href={member.github}
                            target="new"
                            style={{ textDecoration: "none", color: "inherit" }}
                          >
                            <GitHub />
                          </a>
                          <a
                            href={member.linkedin}
                            target="new"
                            style={{ textDecoration: "none", color: "inherit" }}
                          >
                            <LinkedIn />
                          </a>
                        </div>
                      </ModalMember>
                    ))}
                  </ModalMembers>
                </>
              )}
              {/* <ModalButtonGroup>
                <ModalButton href={d?.github} target="_blank">
                  View Code
                </ModalButton>
                <ModalButton href={d?.live} target="_blank">
                  View Live App
                </ModalButton>
              </ModalButtonGroup> */}

              {d?.live && (
                <ModalButtonGroup>
                  <ModalButton href={d?.github} target="_blank">
                    View Code
                  </ModalButton>
                  <ModalButton href={d?.live} target="_blank">
                    View Live App
                  </ModalButton>
                </ModalButtonGroup>
              )}

              {!d?.live && (
                <ModalButton href={d?.github} target="_blank">
                  View Code
                </ModalButton>
              )}
            </ModalWrapper>
          </ModalContainer>
        </Modal>
      </Wrapper>
    </Container>
  );
};

export default Projects;
