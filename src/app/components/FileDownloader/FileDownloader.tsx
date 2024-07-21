import React from "react";
import Download from "@/app/assets/icons/Download";
import useStyle from "@/app/styles/useStyles";

interface FileDownloaderProps {
  fileName: string;
  folderName: string;
}

const FileDownloader: React.FC<FileDownloaderProps> = ({
  fileName,
  folderName,
}) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `/api/download?fileName=${fileName}&folderName=${folderName}`;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    link.parentNode?.removeChild(link);
  };

  const { COLORS, CONTRAST, TYPOGRAPHYS } = useStyle();

  return (
    <div
      onClick={handleDownload}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1rem",
        cursor: "pointer",
      }}
    >
      <p
        style={{
          color: COLORS.main,
          ...TYPOGRAPHYS.text2,
        }}
      >
        Descargar
      </p>
      <Download width="30" height="30" color={COLORS.main} />
    </div>
  );
};

export default FileDownloader;
