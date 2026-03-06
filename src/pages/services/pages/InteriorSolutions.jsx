import { servicesData } from "../servicesMap";
import ServiceContentLayout from "./ServiceContentLayout";

export default function InteriorSolutions() {
  const data = servicesData.find((s) => s.id === "interior-solutions");

  // ✅ show collage first image as side image (optional)
  const sideImage = Array.isArray(data?.img) ? data.img[0] : data?.img;

  return <ServiceContentLayout data={{ ...data, sideImage }} />;
}