import ButtonProps from "./CustomButtonProps";
import "./CustomButton.scss";
import useStyle from "@/app/styles/useStyles";
import Link from "next/link";

export function CustomButton({
  text,
  size,
  color,
  variant,
  animation,
  href,
}: ButtonProps) {
  const { TYPOGRAPHYS, COLORS } = useStyle();
  const buttonStyle = {
    ...TYPOGRAPHYS.text1,
    backgroundColor: COLORS[variant],
    color: color,
  };

  return href ? (
    <Link
      href={{
        pathname: href,
        query: { variant: variant },
      }}
      passHref
    >
      <button
        className={`${size ? size : "big"} ${animation && "animation"}`}
        style={buttonStyle}
      >
        {text}
      </button>
    </Link>
  ) : (
    <button
      className={`${size ? size : "big"} ${animation && "animation"}`}
      style={buttonStyle}
    >
      {text}
    </button>
  );
}
