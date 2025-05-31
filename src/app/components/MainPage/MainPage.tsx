"use client";

import React, { useState } from "react";
import "./MainPage.scss";
import MapIcon from "@/app/assets/icons/MapIcon";
import Section from "../Section/Section";
import MainPageProps from "./MainPageProps";
import useStyle from "@/app/styles/useStyles";
import MyImageGallery from "../ImageGallery/ImageGallery";
import Download from "@/app/assets/icons/Download";
import ModalDowload from "../ModalDownLoad/ModalDownload";



export default function MainPage({
  variant = "blue",
  videoLink,
  mapLink,
  brochureLink,
  SchoolName,
  activityText,
  place,
  images,
  downloadData,
}: MainPageProps) {
  const { COLORS, CONTRAST, TYPOGRAPHYS } = useStyle();
  const [showDownload, setShowDownload] = useState(false);
  return (
    <div className="mainPage">
      {/* Banner de bienvenida */}
      <div className="welcome" style={{ backgroundColor: COLORS[variant] }}>
        <div className="border">
          <h1
            className="title"
            style={{ ...TYPOGRAPHYS.title2, color: CONTRAST.white }}
          >
            Niñeces mapeando {place}
          </h1>
          <p
            className="place"
            style={{
              backgroundColor: CONTRAST.white,
              color: COLORS[variant],
            }}
          >
            <MapIcon color={COLORS[variant]} />
            <i
              className="fa-solid fa-map-location"
              style={{ color: COLORS[variant] }}
            />
            {SchoolName}
          </p>
        </div>
      </div>
      <div className="sectionContainer" style={{ marginTop: "-1rem" }}>
        <Section title="¿De qué trató la actividad?" content={activityText} />
        <div className="videoContainer">
          <iframe
            width="100%"
            height="500"
            style={{ borderRadius: "1rem" }}
            src={videoLink}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>

      {images && (
        <div className="sectionContainer">
          <Section
            title="Descubre nuestra galeria de imágenes"
            content="Los niños y niñas nos han ayudado con su conocimiento y estamos
            emocionados de compartir su increíble trabajo. A través de esta
            actividad, los estudiantes de 4° grado han aprendido sobre
            cartografía y la importancia de los mapas en la planificación
            urbana. Mira el proceso completo en nuestra galería de imágenes"
          />
          <MyImageGallery images={images} />
        </div>
      )}

      <div className="map">
        <div className="sectionContainer">
          <Section
            title="Explora nuestro mapa interactivo"
            content={
              <>
                Toda la información que los niños y niñas de 4° grado nos
                compartieron es ahora parte del mapa digital libre de
                OpenStreetMap, explora su mapa y recuerda <br />
                "La opinión de las infancias sobre la ciudad que habitan es muy
                importante para la planificación y gestión de la ciudadanía"
              </>
            }
          />
        </div>
        <iframe
          style={{ borderRadius: "1rem", marginTop: "2rem" }}
          width="100%"
          height="500px"
          allowFullScreen
          allow="geolocation"
          src={mapLink}
        />
        <p>
          <a href={mapLink}>Ver pantalla completa</a>
        </p>
      </div>
      <div className="download">
        <p
          style={{
            color: CONTRAST.black,
            ...TYPOGRAPHYS.text1,
          }}
          onClick={() => {
            setShowDownload(true);
          }}
        >
          Descargar datos geográficos
          <Download />
        </p>
      </div>

{brochureLink && (
  <div className="sectionContainer">
    <Section title="Obten más información en nuestro brochure" />

    <iframe
      id="brochure-liberia"
      width="100%"
      height="600px"
      src={brochureLink}
    />

    <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem", paddingTop: "4rem"}}>
      <a 
        href={place === "Alajuela" ? "/Brochure_Alajuela.pdf" : "/Brochure_Liberia.pdf"}
        download={`Brochure_Niñeces_Mapeando_${place}.pdf`}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.5rem 1rem",
          backgroundColor: COLORS[variant],
          color: CONTRAST.white,
          borderRadius: "0.5rem",
          textDecoration: "none",
          ...TYPOGRAPHYS.text1,
        }}
      >
        <Download color={CONTRAST.white} />
        Descargar Brochure (PDF)
      </a>
    </div>
  </div>
)}

{place === "Liberia" && (
  <div className="studentsContainer">
        <div className="students">
          <h1 style={{ ...TYPOGRAPHYS.title3 }}>Grupo de niñas y niños que participaron en talleres de la Escuela Alba Ocampo, Liberia</h1>
          <div className="container">
            <ul>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Juan Pablo Solís</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Iván Garay Alfaro</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Josué Alfaro Murillo</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Gabriel Alfaro Murillo</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Isabella Lago Obando</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Jimena Esquivel Mora</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Luzciana Barboza Padilla</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Daniela Mata</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Daisy Rebeca Eras Vargas</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Thiago José Marchena Ugarte</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Royner Andrés López Calderón</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Carlos José Chavarría </li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Saymond Mendoza Garnier </li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Auxiliadora Kiany Saborío </li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Maripaz Centeno Centeno </li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Alejandro Castillo Chavarría</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>José Mario Chaves</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Eithan A. Rio Solano</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Valerie Alvares Medina</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Kessler David Rodríguez Rodríguez</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Jean Marki Castillo Bastos</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Valarie Nicole Corella Jiménez</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Valenthina López Villalobos</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Sharith Salazar Morales</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Dylan Daniel González Morales</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Misael Morena Ramírez</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Mariana Valentina Eras Hernández</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Kendall Manuel Quirós Moreno</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Mateo Eras Ocampo</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Justin Stiven Zúñiga Quesada</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Maylen Celeste Castañeda</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Gael Santiago Vásquez Meza</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Melissa Isabela Orozco</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Britney María Torres </li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Neymar Javier Zamora Bello</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Danna Sofia Salas Ruiz</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Sebastián Hernández Martínez</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Meredith López Maroto</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Lia Kaylani Mendoza Quirós</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Whitney Camila Cardois Torres</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Valentina Aguilar Cisneros</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Marissa López Maroto</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Jimena de los Ángeles Ruiz</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Alejandro Serrano Méndez</li>
              <li style={{ ...TYPOGRAPHYS.text1 }}>Yorjany Ugarte Chacón</li>
            </ul>
          </div>
        </div>{" "}
      </div>
      )}

      {showDownload && (
        <ModalDowload
          data={downloadData}
          close={() => {
            setShowDownload(false);
          }}
        />
      )}
    </div>
  );
}
