"use client";

import { useRouter } from "next/router";
import MainPage from "@/app/components/MainPage/MainPage";

const pageData = {
  videoLink: "https://www.youtube.com/embed/CnHtFwKbPzQ?si=trdzmczsFMnJwz-0",
  place: "Alajuela",
  mapLink:
    "//umap.openstreetmap.fr/pt-br/map/mapa-alajuela-por-nineces_991953?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false&captionMenus=true",
  brochureLink:
    "https://drive.google.com/file/d/1Vlo1YhVME4eBpbtXQrxP6YHI-pNVrdbm/preview",
  schoolName: "Escuela Ascención Esquivel",
  activityText:
    "Profesores y estudiantes del Tecnológico de Costa Rica (TEC) visitamos la Escuela Ascención Esquivel en Alajuela, en busca de especialistas para apoyarnos en un proyecto muy importante sobre la ciudad. Por suerte, nos encontramos con niñas y niños de 4°, quienes nos contaron sus pensares y sentires sobre el lugar donde viven. Por medio de mapas nos indicaron los lugares que más les gustan, los que consideran seguros, donde juegan y en general, los que hacen parte de su cotidiano de alguna manera.",
  downloadData: {
    folderName: "Alajuela2023",
    filesNames: [
      "comerciales.geojson",
      "institucionales.geojson",
      "naturales.geojson",
      "privados.geojson",
      "públicos.geojson",
      "urbanos.geojson",
    ],
  },
};

export default function Alajuela() {
  const router = useRouter();
  const { variant } = router.query;

  const variantString = Array.isArray(variant) ? variant[0] : variant;
  return (
    <MainPage
      variant={variantString}
      place={pageData.place}
      videoLink={pageData.videoLink}
      brochureLink={pageData.brochureLink}
      mapLink={pageData.mapLink}
      SchoolName={pageData.schoolName}
      activityText={pageData.activityText}
      downloadData={pageData.downloadData}
    />
  );
}
