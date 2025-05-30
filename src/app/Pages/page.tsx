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
          <>
          El Atlas de las Niñeces es resultado de un proyecto de extensión universitaria del Tecnológico de Costa Rica (TEC) que busca visibilizar cómo las infancias perciben y experimentan el territorio que habitan. Frente a un modelo de planificación históricamente adultocéntrico, este proyecto propone una ruptura simbólica al reconocer a niños y niñas como sujetos activos con capacidad de análisis, opinión y propuesta sobre los espacios que habitan.
          <br /><br />
          A través de talleres participativos realizados en escuelas públicas de distintas localidades del país, facilitados por población estudiantil del TEC junto a personas extensionistas y docentes, se recopilan mapas, dibujos y narrativas creadas por niños y niñas entre los 9 y 10 años, que reflejan sus vivencias, preocupaciones, deseos y vínculos con el espacio público.
          <br /><br />
          La metodología utilizada se basa en el mapeo participativo o cartografía social, una herramienta crítica que permite a las comunidades representar colectivamente su experiencia territorial. Esta metodología no solo visibiliza saberes subalternizados, sino que cuestiona las formas tradicionales de producción de conocimiento y propone un enfoque más democrático, inclusivo y situado.
          <br /><br />
          Este proyecto parte del compromiso de la universidad pública con la construcción de comunidades más justas, inclusivas y participativas. Su objetivo es integrar las voces infantiles en los procesos de planificación territorial, reconociendo su derecho a opinar, ser escuchadas y tomadas en consideración sobre los lugares que forman parte de su vida cotidiana.
          <br /><br />
          El resultado es este Atlas digital, que muestra una colección de mapas construidos por las infancias, en los que se señalan los lugares que consideran relevantes en su día a día. Estos espacios fueron clasificados en distintas categorías: lugares públicos, barrios, espacios privados, espacios naturales, instituciones y espacios comerciales. Además, todos los datos recopilados son abiertos y están disponibles para su descarga, fomentando el uso y análisis colectivo de esta información por parte de diversos actores sociales, académicos e institucionales.
          </>
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
          text=""
          variant="oceanBlue"
          link="/Pages/Liberia"
          image={Liberia.src}
        />
        <LocationCard
          title="Alajuela 2023"
          text=""
          variant="oceanBlue"
          link="/Pages/Alajuela"
          image={Alajuela.src}
        />
      </div>
    </div>
  );
}
