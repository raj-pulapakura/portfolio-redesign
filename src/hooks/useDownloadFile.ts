import useDownloader from "react-use-downloader";

export const useDownloadFile = () => {
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  return (fileUrl: string, filename: string) => download(fileUrl, filename);
};
