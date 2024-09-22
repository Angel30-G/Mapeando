import React from "react";
import MemberCard from "@/app/components/MemberCard/MemberCard";
import "./styles.scss";
import useStyle from "@/app/styles/useStyles";

export default function Credits() {
  const { TYPOGRAPHYS, COLORS, CONTRAST } = useStyle();
  return (
    <div className="headerBox">
      <div className="collaborators">
        <MemberCard name="Carlos Jiménez" description="Profesor" />
        <MemberCard name="María Rodríguez" description="Supervisora" />
        <MemberCard name="Luis Fernández" description="Extensionista" />
        <MemberCard name="María Rodríguez" description="Supervisora" />
        <MemberCard name="Luis Fernández" description="Extensionista" />
        <MemberCard name="María Rodríguez" description="Supervisora" />
        <MemberCard name="Luis Fernández" description="Extensionista" />
        <MemberCard name="Ana Morales" description="Coordinadora" />
      </div>
      <div className="studentsContainer">
        <div className="students">
          <h1 style={{ ...TYPOGRAPHYS.title3 }}>Estudiantes Liberia</h1>
          <div className="container">
            <ul>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Sofía Herrera</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Daniela Ureña</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Carlos Quesada</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Javier Solano</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>María Araya</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Gabriel Chacón</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Lucía Fernández</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Alejandro Rojas</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Isabel Vargas</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Antonio Aguilar</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Carolina Mora</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Eduardo Castro</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Patricia Soto</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Felipe Segura</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Diego Blanco</li>
            </ul>
            <ul>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Sofía Herrera</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Daniela Ureña</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Carlos Quesada</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Javier Solano</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>María Araya</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Gabriel Chacón</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Lucía Fernández</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Alejandro Rojas</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Isabel Vargas</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Antonio Aguilar</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Carolina Mora</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Eduardo Castro</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Patricia Soto</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Felipe Segura</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Diego Blanco</li>
            </ul>
            <ul>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Sofía Herrera</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Daniela Ureña</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Carlos Quesada</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Javier Solano</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>María Araya</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Gabriel Chacón</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Lucía Fernández</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Alejandro Rojas</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Isabel Vargas</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Antonio Aguilar</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Carolina Mora</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Eduardo Castro</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Patricia Soto</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Felipe Segura</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Diego Blanco</li>
            </ul>
          </div>
        </div>{" "}
        <div className="students">
          <h1 style={{ ...TYPOGRAPHYS.title3 }}>Estudiantes Alajuela</h1>
          <div className="container">
            <ul>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Sofía Herrera</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Daniela Ureña</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Carlos Quesada</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Javier Solano</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>María Araya</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Gabriel Chacón</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Lucía Fernández</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Alejandro Rojas</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Isabel Vargas</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Antonio Aguilar</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Carolina Mora</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Eduardo Castro</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Patricia Soto</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Felipe Segura</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Diego Blanco</li>
            </ul>
            <ul>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Sofía Herrera</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Daniela Ureña</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Carlos Quesada</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Javier Solano</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>María Araya</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Gabriel Chacón</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Lucía Fernández</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Alejandro Rojas</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Isabel Vargas</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Antonio Aguilar</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Carolina Mora</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Eduardo Castro</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Patricia Soto</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Felipe Segura</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Diego Blanco</li>
            </ul>
            <ul>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Sofía Herrera</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Daniela Ureña</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Carlos Quesada</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Javier Solano</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>María Araya</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Gabriel Chacón</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Lucía Fernández</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Alejandro Rojas</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Isabel Vargas</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Antonio Aguilar</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Carolina Mora</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Eduardo Castro</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Patricia Soto</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Felipe Segura</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Diego Blanco</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
