import useDownloader from 'react-use-downloader';

export const useDownloadFile = () => {
  const { download } = useDownloader();

  return (fileUrl: string, filename: string) => download(fileUrl, filename);
};
