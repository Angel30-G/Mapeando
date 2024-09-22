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
          Descargar datos geograficos
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
          ></iframe>
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
