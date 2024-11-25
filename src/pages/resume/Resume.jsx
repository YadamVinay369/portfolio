import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/pageHeader/PageHeader";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeader
        headerText="my resume"
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  );
};

export default Resume;
