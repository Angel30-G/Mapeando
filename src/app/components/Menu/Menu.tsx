import MenuProps from "./MenuProps";
import "./Menu.scss";
import useStyle from "@/app/styles/useStyles";

export default function Menu({ links }: MenuProps) {
  const { COLORS, CONTRAST, TYPOGRAPHYS } = useStyle();
  return (
    <div className="menu" style={{ backgroundColor: COLORS.main }}>
      {links.map((link, index) => (
        <div key={index}>
          <a
            style={{ ...TYPOGRAPHYS.text1, color: CONTRAST.white }}
            href={link.link}
          >
            {link.label}
          </a>
        </div>
      ))}
    </div>
  );
}
