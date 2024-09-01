import useStyle from "@/app/styles/useStyles";
import Text from "@/app/components/Text/Text";
import "./generalStyles.scss";
export default function ContactPage() {
  const { TYPOGRAPHYS, COLORS, CONTRAST } = useStyle();

  return (
    <div className="headerBox">
      <h1>Contactenos</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum ducimus
        eos eum quam nulla ipsum illum. Sequi deleniti vero blanditiis illum at!
        Id ullam earum consequuntur incidunt fugiat enim impedit!
      </p>
      <div className="links">
        <div className="linkBox">Facebook</div>
        <div className="linkBox">Correo</div>
        <div className="linkBox">Instagram</div>
      </div>
    </div>
  );
}
