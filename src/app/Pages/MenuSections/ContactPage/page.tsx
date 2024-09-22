import useStyle from "@/app/styles/useStyles";
import Text from "@/app/components/Text/Text";
import "./styles.scss";
export default function ContactPage() {
  const { TYPOGRAPHYS, COLORS, CONTRAST } = useStyle();

  return (
    <div className="headerBox">
      <div className="info">
        <h1 style={{ ...TYPOGRAPHYS.title1 }}>Contactanos</h1>
        {/* <p style={{ ...TYPOGRAPHYS.text1, textAlign: "center" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,
        </p> */}
        <div className="form">
          <form action="">
            <label htmlFor="" style={{ ...TYPOGRAPHYS.text1 }}>
              Nombre completo
            </label>
            <input type="text" style={{ ...TYPOGRAPHYS.text1 }} />

            <label htmlFor="" style={{ ...TYPOGRAPHYS.text1 }}>
              Correo electrónico
            </label>
            <input type="email" style={{ ...TYPOGRAPHYS.text1 }} />

            <label htmlFor="" style={{ ...TYPOGRAPHYS.text1 }}>
              Número teléfonico
            </label>
            <input type="number" style={{ ...TYPOGRAPHYS.text1 }} />

            <label htmlFor="" style={{ ...TYPOGRAPHYS.text1 }}>
              Mensaje
            </label>
            <input type="textarea" style={{ ...TYPOGRAPHYS.text1 }} />

            <button style={{ ...TYPOGRAPHYS.text2 }}>Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
