import React from "react";
import "./ModalDownload.scss";
import Text from "@/app/components/Text/Text";
import useStyle from "@/app/styles/useStyles";
import FileDownloader from "@/app/components/FileDownloader/FileDownloader";
import ModalDownloadProps from "./ModalDownloadProps";

interface Item {
  id: number;
  content: string;
}

export default function ModalDownload({ data, close }: ModalDownloadProps) {
  const { COLORS, CONTRAST, TYPOGRAPHYS } = useStyle();

  return (
    <div className="modalContainer">
      <div className="modal">
        <p
          style={{
            ...TYPOGRAPHYS.text1,
            color: COLORS.main,
          }}
          className="close"
          onClick={close}
        >
          Cerrar
        </p>
        <Text
          content="Descarga de archivos"
          styles={{
            ...TYPOGRAPHYS.title3,
            textAlign: "center",
            color: CONTRAST.black,
            marginTop: "-2rem",
          }}
        />
        <hr />
        <div className="files">
          {data &&
            data.filesNames.map((item: string) => (
              <div className="item" key={item}>
                <p
                  style={{
                    ...TYPOGRAPHYS.text2,
                    color: CONTRAST.black,
                  }}
                >
                  <b>Archivo: </b>
                  {item}
                </p>
                <FileDownloader fileName={item} folderName={data.folderName} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
