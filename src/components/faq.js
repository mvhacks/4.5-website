import React from "react";
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
// combining the above two into a single list of QA objects -
// I recommend that we eventually rewrite the above two lists into one list of objects
const QAs = QUESTIONS.map((question, index) => {
  return {
    question: question,
    answer: ANSWERS[index]
  };
});

class Faq extends React.Component {

  constructor(props) {
    super(props);
    this.parentFaq = React.createRef()
    this.answerRef = React.createRef();
    this.question = props.question;
    this.answer = props.answer;
    window.addEventListener("resize", e=>{
      // check if parentFaq is visible
      if (this.parentFaq.current.classList.contains("visible")) {
        // if visible, set the max height of the answer to its current value
        this.answerRef.current.style.maxHeight = this.answerRef.current.scrollHeight + "px";
      }
    })
  }
  render() {
    return (
        <div ref={this.parentFaq} className={"faq"}>
          <button className={"faq-question"}
               onClick={() => {
                 // set the max height of the answer to its current value
                if (this.parentFaq.current.classList.toggle("visible")) {
                  this.answerRef.current.style.maxHeight = this.answerRef.current.scrollHeight + "px";
                }
                else {
                  this.answerRef.current.style.maxHeight = "0px";
                }
               }}>
            {this.question}
          </button>
          <div className={"faq-answer"}
               dangerouslySetInnerHTML={{__html: `<p><br/>${this.answer}<br/>&nbsp;</p>`}}
               ref={this.answerRef}>
          </div>
        </div>
    );
  }

}

function Faqs(props) {
  // return a map of the QAs to the FAQ component
  return (
    <div className="faqs">
      {QAs.map((qa, index) => {
        return <Faq key={index} question={qa.question} answer={qa.answer}/>
      })
      }
    </div>
  )
}

export default Faqs;
