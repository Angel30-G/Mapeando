import TextProps from "./TextProps";

export default function Text({
  content,
  color = "#111",
  background = "transparent",
  styles,
}: TextProps) {
  const customStyles = {
    backgroundColor: background,
    color: color,
    padding: ".5rem",
    borderRadius: "1rem",
    ...styles,
  };

  return <p style={customStyles}>{content}</p>;
}
