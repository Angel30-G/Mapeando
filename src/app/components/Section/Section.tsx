import Text from "@/app/components/Text/Text";
import SectionProps from "./SectionProps";
import useStyle from "@/app/styles/useStyles";
import "./Section.scss";

export default function Section({ title, content }: SectionProps) {
  const { COLORS, TYPOGRAPHYS } = useStyle();
  return (
    <section>
      <h2
        style={{
          ...TYPOGRAPHYS.title2,
          textAlign: "center",
          color: COLORS["oceanBlue"],
        }}
      >
        {title}
      </h2>
      <Text
        content={content}
        styles={{ ...TYPOGRAPHYS.text1, textAlign: "center" }}
      />
    </section>
  );
}
