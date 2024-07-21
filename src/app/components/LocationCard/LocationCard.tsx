import LocationCardProps from "./LocationCardProps";
import "./LocationCard.scss";
import useStyle from "@/app/styles/useStyles";
import MapIconCover from "@/app/assets/icons/MapIcon";
import Image from "next/image";

// Sub-Components ===============>
import { CustomButton as Button } from "../Button/CustomButton";
import Text from "../Text/Text";
import Link from "next/link";

export default function LocationCard({
  title,
  text,
  variant,
  link,
  image,
}: LocationCardProps) {
  const { COLORS, CONTRAST, TYPOGRAPHYS } = useStyle();

  return (
    <div className="locationCard">
      <div
        className="imageContainer"
        style={{ backgroundColor: COLORS[variant] }}
      >
        {image ? (
          <Image src={image} alt={image} layout="fill" objectFit="cover" />
        ) : (
          <MapIconCover width="90" height="90" color={CONTRAST.white} />
        )}
      </div>
      <div className="information">
        <Text
          content={title}
          styles={TYPOGRAPHYS.title3}
          color={CONTRAST.black}
        />
        <Text
          content={text}
          styles={TYPOGRAPHYS.text1}
          color={CONTRAST.black}
        />
        <Button
          text="Visitar"
          variant={variant}
          color={CONTRAST.white}
          size="big"
          href={link}
        />
      </div>
    </div>
  );
}
