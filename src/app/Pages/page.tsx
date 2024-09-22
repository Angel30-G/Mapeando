import LocationCard from "@/app/components/LocationCard/LocationCard";
import useStyle from "@/app/styles/useStyles";
import Text from "@/app/components/Text/Text";

import "./mainPage.scss";

//=========== Imports de imagenes
import Alajuela from "@/app/assets/images/LocationCards/Alajuela.webp";
import Liberia from "@/app/assets/images/LocationCards/Liberia.jpg";

export default function MainPage() {
  /*+++++++++++++++++++++++++++++++++++++
  Variantes disponibles
    red
    purple
    blue
    pink
    sky
  +++++++++++++++++++++++++++++++++++++*/
  const { TYPOGRAPHYS, COLORS, CONTRAST } = useStyle();

  return (
    <div className="mainPage">
      <h1
        style={{
          ...TYPOGRAPHYS.title1,
          textAlign: "center",
          color: CONTRAST.black,
        }}
      >
        Atlas de las niñeces Costa Rica
      </h1>
      <Text
        content={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        styles={{
          ...TYPOGRAPHYS.text1,
          textAlign: "center",
          marginBottom: "1rem",
        }}
      />
      <Text
        content="Territorios Mapeados"
        styles={{
          ...TYPOGRAPHYS.title2,
          color: CONTRAST.black,
          textAlign: "center",
          marginTop: "5rem",
        }}
      />
      <div
        className="LocationsContainer"
        style={{
          padding: "2rem",
          borderRadius: "2rem",
          width: "100%",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <LocationCard
          title="Liberia 2023"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolor, molestiae expedita impedit mollitia saepe blanditiis in dicta eligendi quas."
          variant="oceanBlue"
          link="/Pages/Liberia"
          image={Liberia.src}
        />
        <LocationCard
          title="Alajuela 2023"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolor, molestiae expedita impedit mollitia saepe blanditiis in dicta eligendi quas."
          variant="oceanBlue"
          link="/Pages/Alajuela"
          image={Alajuela.src}
        />
      </div>
    </div>
  );
}
