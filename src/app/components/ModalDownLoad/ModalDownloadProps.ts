export default interface ModalDownloadProps {
  data?: {
    folderName: string;
    filesNames: string[];
  };
  close: () => void;
}
