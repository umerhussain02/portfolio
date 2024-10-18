import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Container,
  Wrapper,
  Title,
  Heading,
  Desc,
  ContactCard,
  Input,
  Textarea,
  Send,
} from "./style/ContactStyle";

const Contact = () => {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState("Send");

  const sendEmail = (e) => {
    e.preventDefault();

    setSending("Sending...");

    setTimeout(() => {
      setSending("Send");
    }, 1900);

    emailjs
      .sendForm(
        "service_5hfn91m",
        "template_0zn0i97",
        form.current,
        "GX_E9Y4ivYJ9o0665"
      )
      .then(
        (result) => {
          e.target.reset();

          setName("");
          setEmail("");
          setMessage("");
          toast.success("Message Send");
        },
        (error) => {
          toast.error("Message Not Send");
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Container id="contact">
        <div className="row justify-content-center align-items-center p-0">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 p-0">
            <div className="d-flex flex-column justify-content-center align-items-center align-items-lg-start ">
              <Title>Contact</Title>
              <Heading>Get In Touch</Heading>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-6 p-0">
            <div className="d-flex justify-content-center align-items-center w-100">
              <ContactCard ref={form} onSubmit={sendEmail}>
                <div className="d-flex flex-column align-items-center w-100">
                  <Input
                    type="text"
                    name="user_name"
                    required="required"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                  />
                </div>

                <div className="d-flex flex-column align-items-center w-100">
                  <Input
                    type="email"
                    name="user_email"
                    required="required"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>

                <div className="d-flex flex-column align-items-center w-100">
                  <Textarea
                    name="user_message"
                    value={message}
                    required="required"
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message"
                  />
                </div>
                <Send type="submit" value={sending} />
                <ToastContainer position="bottom-right" />
              </ContactCard>
            </div>
          </div>
        </div>
        {/* <Wrapper>
          <Title>Contact</Title>
          <Heading>Get In Touch</Heading>

          <div className="d-flex justify-content-center align-items-center w-100">
            <ContactCard ref={form} onSubmit={sendEmail}>
              <div className="d-flex flex-column align-items-center w-100">
                <Input
                  type="text"
                  name="user_name"
                  required="required"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                />
              </div>

              <div className="d-flex flex-column align-items-center w-100">
                <Input
                  type="email"
                  name="user_email"
                  required="required"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>

              <div className="d-flex flex-column align-items-center w-100">
                <Textarea
                  name="user_message"
                  value={message}
                  required="required"
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message"
                />
              </div>
              <Send type="submit" value="Send" />
            </ContactCard>
          </div>
        </Wrapper> */}
      </Container>
    </>
  );
};

export default Contact;
