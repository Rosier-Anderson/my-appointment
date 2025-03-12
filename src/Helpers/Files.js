let File = require.context(
  "../assets/assets_frontend",
  false,
  /\.(png|jpe?g|svg)$/
);
export const specialityData = [
  {
    speciality: "General physician",
    image: "./General_physician.svg",
    alt: "General physician icon",
  },
  {
    speciality: "Gynecologist",
    image: "./Gynecologist.svg",
    alt: "Gynecologist icon",
  },
  {
    speciality: "Dermatologist",
    image: "./Dermatologist.svg",
    alt: "Dermatologist icon",
  },
  {
    speciality: "Pediatricians",
    image: "./Pediatricians.svg",
    alt: "Pediatricians icon",
  },
  {
    speciality: "Neurologist",
    image: "./Neurologist.svg",
    alt: "Neurologist icon",
  },
  {
    speciality: "Gastroenterologist",
    image: "./Gastroenterologist.svg",
    alt: "Gastroenterologist icon",
  },
];

const Images = (str) => File(str);
export default Images;
