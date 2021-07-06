import * as React from "react";
import "../styles/faq.css";

const QUESTIONS = [
  "What is a hackathon?", "How much does it cost?", "Do I need programming experience?",
  "Who can attend?", "What do I need?", "Do I need a team?", "What are the rules?",
  "I have other questions!"
];

const ANSWERS = [
  `A hackathon is a competitive educational event in which students come together to develop an idea for a project
      into a real product. MVHacks will provide hackers with educational resources, 
      including seminars and mentors, and an environment that will enable their success.`,
  "It is completely free! All food, swag, and prizes are provided at no charge.<br/><br/>",
  `No - this is a fantastic learning opportunity! Hackers can expect to be able to attend 
      educational workshops run by industry professionals in addition to experienced adult mentors 
      to help them learn and succeed.`,
  `All high school students are eligible to attend MVHacks as hackers. 
      Interested in attending but not a high school student? Consider signing up to be a mentor.`,
  "For the event, all you need is your school ID, laptop, charger, and a desire to hack!<br/>",
  `Teams of up to 4 are allowed. You may work as an individual, but we recommend collaborating. There will be a team mixer at
       start of the hackathon.`,
  `Be nice, respectful, and have fun! Hackers are expected to behave appropriately and safely at all times, and abide by the 
       <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank">MLH Code of Conduct</a>.`,
  `Contact us through our Facebook, Twitter, or email:
       <a href="mailto:contact@mv-hacks.com">contact@mv-hacks.com</a>.<br/>`
];

let index = 0;

class Faq extends React.Component {

  constructor(props) {
    super(props);

    index %= QUESTIONS.length;
    this.question = QUESTIONS[index];
    this.answer = ANSWERS[index];
    index++;

    this.answerRef = React.createRef();

    this.visible = false;
  }

  render() {
    return (
        <div className={"faq" + (this.visible ? " bordered" : "")}>
          <div className={"faq-question" + (this.visible ? " selected" : "")}
               onClick={() => {
                 this.visible = !this.visible;
                 this.answerRef.current.style.maxHeight =
                     (this.visible ? this.answerRef.current.scrollHeight + "px" : "0px");
                 this.forceUpdate();
               }}>
            {this.question}
          </div>
          <div className={"faq-answer" + (this.visible ? " visible" : "")}
               dangerouslySetInnerHTML={{__html: `<p><br/>${this.answer}<br/>&nbsp;</p>`}}
               ref={this.answerRef}>
          </div>
        </div>
    );
  }

}

function Faqs(props) {
  return (
      <table id="faq-table">
        <tr>
          <td className="padded-td">
            <Faq/>
            <br/>
          </td>
          <td>
            <Faq/>
            <br/>
          </td>
        </tr>
        <tr>
          <td>
            <Faq/>
            <br/>
          </td>
          <td>
            <Faq/>
            <br/>
          </td>
        </tr>
        <tr>
          <td>
            <Faq/>
            <br/>
          </td>
          <td>
            <Faq/>
            <br/>
          </td>
        </tr>
        <tr>
          <td>
            <Faq/>
            <br/>
          </td>
          <td>
            <Faq/>
            <br/>
          </td>
        </tr>
      </table>
  );
}

export default Faqs;