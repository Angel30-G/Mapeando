import React from "react";
import Image from "next/image";
import "react-image-gallery/styles/css/image-gallery.css";
import "./Member.scss";
import profile from "@/app/assets/images/profile.png";
import useStyle from "@/app/styles/useStyles";

const MemberCard = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => {
  const { COLORS, CONTRAST, TYPOGRAPHYS } = useStyle();

  return (
    <div className="card">
      <Image src={profile} alt={name} />
      <h3 style={{ ...TYPOGRAPHYS.text1 }}>{name}</h3>
      <p style={{ ...TYPOGRAPHYS.text1 }}>{description}</p>
    </div>
  );
};

export default MemberCard;
