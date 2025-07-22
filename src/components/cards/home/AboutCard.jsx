import {
  ArrowUpRight,
  FileText,
  Github,
  GithubIcon,
  Linkedin,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { useGlobal } from "../../../contexts/GlobalContext";

const AboutCard = () => {
  const { admin } = useGlobal();

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = admin.resume;
    link.download = "Ashwin-Kumar-Resume.pdf";
    link.click();
    link.remove();
    document.body.removeChild(link);
  };

  const linkedIn = admin?.links?.find((link) => link?.title === "LinkedIn");
  const github = admin?.links?.find((link) => link?.title === "Github");

  return (
    <div className="group flex flex-col items-start justify-between w-full h-full gap-4">
      <div className="flex flex-col items-start justify-center w-full gap-2">
        <div className="flex items-center justify-between w-full">
          <h3 className="text-2xl">
            Hi, I'm{" "}
            <span className="text-primary font-secondary">{admin.name}</span>{" "}
          </h3>
          <Link
            to={"/about"}
            type="button"
            className="border border-border rounded-full group-hover:rotate-45 group-hover:bg-primary group-hover:text-dark transition-all duration-300 ease-in-out  p-1.5"
          >
            <ArrowUpRight size={32} />
          </Link>
        </div>
        <p className="text-xl">
          I am a{" "}
          <span className="text-primary font-secondary">Computer Engineer</span>{" "}
          based in Pune, Maharashtra, India. I love creating (web) apps and
          especially{" "}
          <span className="text-primary font-secondary">
            user facing interfaces.
          </span>
          Apart from work, you can find me jamming to my playlists, watching
          movies or fiddling with a camera.
        </p>
      </div>
      <div className="flex items-center gap-4 self-end m-4">
        <button
          type="button"
          className="text-primary rounded-full   active:translate-y-0.75 cursor-pointer transition-all duration-300"
          onClick={handleDownloadResume}
        >
          <FileText size={32} strokeWidth={1.5} />
        </button>
        <a
          href={linkedIn?.url}
          target="_blank"
          rel="noreferrer"
          className="text-primary rounded-full   active:translate-y-0.75 cursor-pointer transition-all duration-300"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2xl" />
        </a>
        <a
          href={github?.url}
          target="_blank"
          rel="noreferrer"
          className="rounded-full   text-primary active:translate-y-0.75 cursor-pointer transition-all duration-300"
        >
          <FontAwesomeIcon icon={faGithub} size="2xl" />
        </a>
      </div>
    </div>
  );
};

export default AboutCard;
