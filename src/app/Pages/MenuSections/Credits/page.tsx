import React from "react";
import MemberCard from "@/app/components/MemberCard/MemberCard";
import "./styles.scss";
import useStyle from "@/app/styles/useStyles";

export default function Credits() {
  const { TYPOGRAPHYS, COLORS, CONTRAST } = useStyle();
  return (
    <div className="headerBox">
      <div className="collaborators">
        <MemberCard name="Dra. Rosa Elena Malavassi Aguilar" description="Escuela de Arquitectura y Urbanismo, ITCR " />
        <MemberCard name="Arq. Dominique Chang Albizurez" description="Escuela de Arquitectura y Urbanismo, ITCR " />
        <MemberCard name="MDU. Arq. Mauricio Guevara Murillo " description="Escuela de Arquitectura y Urbanismo, ITCR " />
        <MemberCard name="Dr. Francisco Mojica Mendieta " description="Escuela de Ciencias Sociales, ITCR " />
        <MemberCard name="Dr. Jaime Gutiérrez Alfaro " description="Unidad Desconcentrada Ingeniería en Computación, Centro Académico de Alajuela, ITCR " />
        <MemberCard name="Arq Pablo Acuña Quiel " description="Unidad Desconcentrada Ingeniería en Computación, Centro Académico de Alajuela, ITCR " />
        <MemberCard name="Licda. Claudia Rojas Bravo" description="LabComun, ITCR " />
  
      </div>
      <div className="studentsContainer">
        <div className="students">
          <h1 style={{ ...TYPOGRAPHYS.title3 }}>Grupo de estudiantes asistentes del TEC</h1>
          <div className="container">
            <ul>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Isaac Melendez Gatgens</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Pablo Sandí Sanchez</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Jeaustin Obando Arias</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Fernando Vega Valerio</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Royner Miranda Segura</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Jesus Molina</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Valeria Arias Umaña</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Ervin Rodriquez Villanueva</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Brandon Retana Chacon</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Rosa Elena Malavassi Aguilar</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Gerald Matarrita Alavarado</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>José Andrés Vargas Serrano</li>
            </ul>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
