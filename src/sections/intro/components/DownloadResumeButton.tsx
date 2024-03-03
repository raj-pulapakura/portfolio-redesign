import { useDownloadFile } from "@/hooks/useDownloadFile";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

type DownloadButtonProps = JSX.IntrinsicElements["button"];

export default function DownloadResumeButton({
  children,
  className,
  ...props
}: DownloadButtonProps) {
  const downloadPdf = useDownloadFile();

  const handleClick = () => {
    downloadPdf(
      "/resumes/Raj Pulapakura - Machine Learning Engineer Resume.pdf",
      "Raj Pulapakura - Machine Learning Engineer Resume.pdf"
    );
  };

  return (
    <button
      className={` rounded-lg bg-indigo-300 active:bg-indigo-400 text-black font-bold text-lg lg:text-xl px-5 py-3 mb-2 w-fit ${className}`}
      onClick={handleClick}
      {...props}
    >
      <FontAwesomeIcon className="mr-3" icon={faDownload} size="lg" />
      {children}
    </button>
  );
}
