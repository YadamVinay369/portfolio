import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/pageHeader/PageHeader";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeader
        headerText="Let's Connect!"
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  );
};

export default Contact;
