import { useState } from "react";
import style from "styled-components";

const ContactContainer = style.section`
  padding: 120px 0;
`;

const ContactTitle = style.h2`
  font-size: 48px;
  color: #fff;
  background-color: #fe0000;
  width: 120px;
  height: 120px;
  margin: 0 auto;
  border-radius: 60px;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 12px solid #d00000;

  flex-direction: column;
  text-shadow: 0 0 4px rgba(0,0,0,1)
`;
const ContactTitleJp = style.span`
  display: block;
  font-size: 9px;
`;
const ContactItems = style.section`
font-family: "Noto Sans JP", sans-serif;
`;
const FormContainer = style.div`
  max-width: 900px;
  margin: 40px auto;
  display: flex;
  justify-content: space-between;
  aline-items: end;

  & label {
    padding: 0 2px;
  }
`;
const ContactText = style.p`
width: 400px;
text-aline: right;
margin-right: 0;
  & span {
    display: block;
    padding: 8px 0;
  }
`;
const Line = style.div`
  width: 4px;
  background: #000;
  border-radius: 2px;
`;
const Required = style.span`
  font-family: "Noto Sans JP", sans-serif;
  color: #fff;
  background-color: #f33;
  font-size: 10px;
  padding: 0 4px 1px 4px;
  border-radius: 4px;
`;
const InputBox = style.div`
  & input,textarea {
    background: #fff;
    border-radius: 4px;
    border: 2px solid #fff;
    resize: none;
    width: 400px;
    margin:10px 0 30px 0;
  }
  & textarea {
    height: 100px;
  }
`;
const Submit = style.div`
  & button {
    color: #000;
    padding: 8px 24px;
    border-radius: 8px;
    border: 2px solid #000;
    transition: all 0.3s ease-in;
  }
  & button:hover {
    background: rgb(255, 0, 0,0.8);
    color: #fff;
  }
`;
export default function Contact(props) {
  const [contact, setContact] = useState({
    company: "",
    name: "",
    email: "",
    subject: "StaticForms - Contact Form",
    honeypot: "", // if any value received in this field, form submission will be ignored.
    message: "",
    replyTo: "@", // this will set replyTo of email to email address entered in the form
    accessKey: process.env.access_key, // get your access key from https://www.staticforms.xyz
  });

  const [response, setResponse] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        body: JSON.stringify(contact),
        headers: { "Content-Type": "application/json" },
      });

      const json = await res.json();

      if (json.success) {
        setResponse({
          type: "success",
          message: "送信が完了しました。",
        });
      } else {
        setResponse({
          type: "error",
          message: json.message,
        });
      }
    } catch (e) {
      console.log("An error occurred", e);
      setResponse({
        type: "error",
        message: "送信時にエラーが発生しました。",
      });
    }
  };
  return (
    <ContactContainer id="contact">
      <ContactTitle>
        Contact<ContactTitleJp>ご意見・お問い合わせ</ContactTitleJp>
      </ContactTitle>
      <FormContainer>
        <ContactText>
          ご連絡など、お気軽にお問い合わせくださいませ。
          <span>下記フォームよりわかる範囲でご記入ください。</span>
          必須の項目は必ずご記入お願いします。
        </ContactText>
        <Line></Line>
        {/* email form */}
        <div>
          <div className="section">
            <div className="container">
              <div className="columns">
                <div className="column" />
                <div className="column  is-two-thirds">
                  <div
                    className={
                      response.type === "success"
                        ? "tile box notification is-primary"
                        : "is-hidden"
                    }
                  >
                    <p>{response.message}</p>
                  </div>
                  <div
                    className={
                      response.type === "error"
                        ? "tile box notification is-danger"
                        : "is-hidden"
                    }
                  >
                    <p>{response.message}</p>
                  </div>
                  <div
                    className={
                      response.message !== "" ? "is-hidden" : "columns"
                    }
                  >
                    <div className="column content">
                      <form
                        action="https://api.staticforms.xyz/submit"
                        method="post"
                        onSubmit={handleSubmit}
                      >
                        <div className="field">
                          <label className="label">貴社名</label>
                          <InputBox className="control">
                            <input
                              className="input"
                              type="text"
                              placeholder="Company"
                              name="company"
                              onChange={handleChange}
                            />
                          </InputBox>
                        </div>
                        <div className="field">
                          <label className="label">
                            お名前<Required>必須</Required>
                          </label>
                          <InputBox className="control">
                            <input
                              className="input"
                              type="text"
                              placeholder="Name"
                              name="name"
                              onChange={handleChange}
                              required
                            />
                          </InputBox>
                        </div>
                        <div className="field">
                          <label className="label">
                            メールアドレス<Required>必須</Required>
                          </label>
                          <InputBox className="control">
                            <input
                              className="input"
                              type="email"
                              placeholder="Email"
                              name="email"
                              onChange={handleChange}
                              required
                            />
                          </InputBox>
                        </div>
                        <div className="field" style={{ display: "none" }}>
                          <label className="label">Title</label>
                          <InputBox className="control">
                            <input
                              type="text"
                              name="honeypot"
                              style={{ display: "none" }}
                              onChange={handleChange}
                            />
                            <input
                              type="hidden"
                              name="subject"
                              onChange={handleChange}
                            />
                          </InputBox>
                        </div>
                        <div className="field">
                          <label className="label">
                            ご用件<Required>必須</Required>
                          </label>
                          <InputBox className="control">
                            <textarea
                              className="textarea"
                              placeholder="Message"
                              name="message"
                              onChange={handleChange}
                              required
                            />
                          </InputBox>
                        </div>
                        <div className="field is-grouped">
                          <Submit className="control">
                            <button className="button is-primary" type="submit">
                              送信
                            </button>
                          </Submit>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="column" />
              </div>
            </div>
          </div>
        </div>
      </FormContainer>
    </ContactContainer>
  );
}
