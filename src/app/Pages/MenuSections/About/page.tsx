import useStyle from "@/app/styles/useStyles";
import Text from "@/app/components/Text/Text";
import "./styles.scss";
import LabExp from "@/app/assets/images/LabExp.jpg";
import Image from "next/image";
export default function About() {
  const { TYPOGRAPHYS, COLORS, CONTRAST } = useStyle();

  return (
    <div className="headerBox">
      <h1
        style={{
          ...TYPOGRAPHYS.title1,
          textAlign: "center",
          color: CONTRAST.black,
          marginTop: "10rem",
        }}
      >
        Sobre el Laboratorío Experimental
      </h1>
      <div
        className="imageWithTextf"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Image
          src={LabExp.src}
          alt="Laboratorio experimental"
          width={200}
          height={200}
        />
        <Text
          content={
           "El Atlas de las Niñeces es una iniciativa gestionada desde el Laboratorio Experimental de Computación y Comunidades (LabComún), una red académica de extensión e investigación del Centro Académico de Alajuela del Tecnológico de Costa Rica (TEC). LabComún promueve el intercambio y la construcción de conocimiento entre la universidad pública y las comunidades, enfocándose en áreas como la Pedagogía de la Computación y la Computación Descolonial. Desde este laboratorio, impulsamos procesos colaborativos que integran tecnologías libres, participación y justicia social. Utilizamos software libre, datos abiertos e investigación-acción participativa como ejes fundamentales para nuestro trabajo con las comunidades.  A través de este proyecto, buscamos contribuir al reconocimiento de las infancias como actores territoriales, articulando esfuerzos entre escuelas públicas, comunidades y población estudiantil del TEC."
          }
          styles={{
            ...TYPOGRAPHYS.text1,
            marginLeft: "3rem",
            marginBottom: "1rem",
          }}
        />
      </div>
    </div>
  );
}
