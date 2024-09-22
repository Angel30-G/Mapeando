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
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages leap into electronic typesetting,"
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
