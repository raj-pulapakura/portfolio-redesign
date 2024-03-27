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
      "/resumes/Raj Pulapakura - Resume.pdf",
      "Raj Pulapakura - Resume.pdf"
    );
  };

  return (
    <button
      className={` rounded-lg border-2 border-indigo-400 active:bg-indigo-300 text-black font-bold text-lg px-5 py-3 mb-2 w-fit ${className}`}
      onClick={handleClick}
      {...props}
    >
      <FontAwesomeIcon className="mr-3" icon={faDownload} size="lg" />
      {children}
    </button>
  );
}
