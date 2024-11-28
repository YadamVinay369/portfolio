import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/pageHeader/PageHeader";
import { Animate } from "react-simple-animate";
import "./Contact.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeader
        headerText="Let's Connect!"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <h3 className="contact__content__header-text">Let's Talk</h3>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="contact__content__form"
        >
          <input
            type="hidden"
            name="access_key"
            value="99cb1241-e712-4ffe-b317-29d1f9d06943"
          />

          <div className="contact__content__form__controlsWrapper">
            <Animate
              play
              duration={0.5}
              delay={0}
              start={{ transform: "translateX(-200px)" }}
              end={{ transform: "translateX(0px)" }}
            >
              <div className="nameWrapper">
                <input type="text" name="name" className="inputName" required />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
            </Animate>

            <Animate
              play
              duration={0.5}
              delay={0}
              start={{ transform: "translateX(200px)" }}
              end={{ transform: "translateX(0px)" }}
            >
              <div className="emailWrapper">
                <input
                  type="email"
                  name="email"
                  className="inputEmail"
                  required
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
            </Animate>

            <Animate
              play
              duration={0.5}
              delay={0}
              start={{ transform: "translateX(-200px)" }}
              end={{ transform: "translateX(0px)" }}
            >
              <div className="descriptionWrapper">
                <textarea
                  name="message"
                  id="description"
                  className="inputDescription"
                  rows={5}
                  required
                ></textarea>
                <label htmlFor="description" className="descriptionLabel">
                  Message
                </label>
              </div>
            </Animate>
          </div>

          <input
            type="hidden"
            name="redirect"
            value="https://web3forms.com/success"
          />
          <Animate
            play
            duration={0.5}
            delay={0}
            start={{ transform: "translateX(-200px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <button type="submit">Submit Form</button>
          </Animate>
        </form>
      </div>
    </section>
  );
};

export default Contact;
