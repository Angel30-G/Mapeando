"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import MainPage from "@/app/components/MainPage/MainPage";
import liberiaImages from "@/app/imagesFiles/liberiaImages";

const pageData = {
  place: "Liberia",
  videoLink: "https://www.youtube.com/embed/UTcbZrgnPdM?si=t56DwKq7XKnZmime",
  mapLink:
    "//umap.openstreetmap.fr/es/map/mapa-liberia-por-nineces_988827?scaleControl=false&miniMap=false&scrollWheelZoom=true&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false&captionMenus=true",
  brochureLink:
    "https://drive.google.com/file/d/1YN2pLflREt-DLABQOD7WkRHdloUYaXKr/preview",
  schoolName: "Escuela Alba Ocampo Alvarado",
  activityText: `Profesores y estudiantes del Tecnológico de Costa Rica (TEC) visitamos la Escuela Alba Ocampo en Liberia en busca de especialistas para apoyarnos en un proyecto muy importante sobre la ciudad.
  Por suerte, nos encontramos con niñas y niños de 4°, quienes nos contaron sus pensares y sentires sobre el lugar donde viven. Por medio de mapas nos indicaron los lugares que más les gustan, los que consideran seguros, donde juegan y en general, los que hacen parte de su cotidiano de alguna manera.`,
  downloadData: {
    folderName: "public/files/Liberia2023",
    filesNames: [
      "comerciales.geojson",
      "institucionales.geojson",
      "Espacios seguros.geojson",
      "naturales.geojson",
      "privados.geojson",
      "públicos.geojson",
      "juegos.geojson",
      "urbanos.geojson",
      "seguros.geojson",
    ],
  },
};

export default function Liberia() {
  const searchParams = useSearchParams();
  const [variant, setVariant] = useState<string | null>(null);

  useEffect(() => {
    const variantParam = searchParams.get("variant");
    setVariant(variantParam);
  }, [searchParams]);

  return (
    <MainPage
      variant={variant || "blue"}
      place={pageData.place}
      videoLink={pageData.videoLink}
      brochureLink={pageData.brochureLink}
      mapLink={pageData.mapLink}
      SchoolName={pageData.schoolName}
      activityText={pageData.activityText}
      images={liberiaImages}
      downloadData={pageData.downloadData}
    />
  );
}
