let File = require.context(
  "../assets/assets_frontend",
  false,
  /\.(png|jpe?g|svg)$/
);

const Images = (str) => File(str);
export default Images;
const specialityData = [
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
 const doctors = [
  {
      _id: 'doc1',
      name: 'Dr. Richard James',
      image: Images('./doc1.png'),
      speciality: 'General physician',
      degree: 'MBBS',
      experience: '4 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
      fees: 50,
      address: {
          line1: '17th Cross, Richmond',
          line2: 'Circle, Ring Road, London'
      }
  },
  {
      _id: 'doc2',
      name: 'Dr. Emily Larson',
      image: Images('./doc2.png'),
      speciality: 'Gynecologist',
      degree: 'MBBS',
      experience: '3 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
      fees: 60,
      address: {
          line1: '27th Cross, Richmond',
          line2: 'Circle, Ring Road, London'
      }
  },
  {
      _id: 'doc3',
      name: 'Dr. Sarah Patel',
      image: Images('./doc3.png'),
      speciality: 'Dermatologist',
      degree: 'MBBS',
      experience: '1 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
      fees: 30,
      address: {
          line1: '37th Cross, Richmond',
          line2: 'Circle, Ring Road, London'
      }
  },
  {
      _id: 'doc4',
      name: 'Dr. Christopher Lee',
      image: Images('./doc4.png'),
      speciality: 'Pediatricians',
      degree: 'MBBS',
      experience: '2 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
      fees: 40,
      address: {
          line1: '47th Cross, Richmond',
          line2: 'Circle, Ring Road, London'
      }
  },
  {
      _id: 'doc5',
      name: 'Dr. Jennifer Garcia',
      image: Images('./doc5.png'),
      speciality: 'Neurologist',
      degree: 'MBBS',
      experience: '4 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
      fees: 50,
      address: {
          line1: '57th Cross, Richmond',
          line2: 'Circle, Ring Road, London'
      }
  },
  {
      _id: 'doc6',
      name: 'Dr. Andrew Williams',
      image: Images('./doc6.png'),
      speciality: 'Neurologist',
      degree: 'MBBS',
      experience: '4 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
      fees: 50,
      address: {
          line1: '57th Cross, Richmond',
          line2: 'Circle, Ring Road, London'
      }
  },
  {
      _id: 'doc7',
      name: 'Dr. Christopher Davis',
      image: Images('./doc7.png'),
      speciality: 'General physician',
      degree: 'MBBS',
      experience: '4 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
      fees: 50,
      address: {
          line1: '17th Cross, Richmond',
          line2: 'Circle, Ring Road, London'
      }
  },
  {
      _id: 'doc8',
      name: 'Dr. Timothy White',
      image: Images('./doc8.png'),
      speciality: 'Gynecologist',
      degree: 'MBBS',
      experience: '3 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
      fees: 60,
      address: {
          line1: '27th Cross, Richmond',
          line2: 'Circle, Ring Road, London'
      }
  },
  {
      _id: 'doc9',
      name: 'Dr. Ava Mitchell',
      image: Images('./doc9.png'),
      speciality: 'Dermatologist',
      degree: 'MBBS',
      experience: '1 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
      fees: 30,
      address: {
          line1: '37th Cross, Richmond',
          line2: 'Circle, Ring Road, London'
      }
  },
  {
      _id: 'doc10',
      name: 'Dr. Jeffrey King',
      image: Images('./doc10.png'),
      speciality: 'Pediatricians',
      degree: 'MBBS',
      experience: '2 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
      fees: 40,
      address: {
          line1: '47th Cross, Richmond',
          line2: 'Circle, Ring Road, London'
      }
  },
  {
      _id: 'doc11',
      name: 'Dr. Zoe Kelly',
      image: Images('./doc11.png'),
      speciality: 'Neurologist',
      degree: 'MBBS',
      experience: '4 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
      fees: 50,
      address: {
          line1: '57th Cross, Richmond',
          line2: 'Circle, Ring Road, London'
      }
  },
  {
      _id: 'doc12',
      name: 'Dr. Patrick Harris',
      image: Images('./doc12.png'),
      speciality: 'Neurologist',
      degree: 'MBBS',
      experience: '4 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
      fees: 50,
      address: {
          line1: '57th Cross, Richmond',
          line2: 'Circle, Ring Road, London'
      }
  },
  {
      _id: 'doc13',
      name: 'Dr. Chloe Evans',
      image: Images('./doc13.png'),
      speciality: 'General physician',
      degree: 'MBBS',
      experience: '4 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
      fees: 50,
      address: {
          line1: '17th Cross, Richmond',
          line2: 'Circle, Ring Road, London'
      }
  },
  {
      _id: 'doc14',
      name: 'Dr. Ryan Martinez',
      image: Images('./doc14.png'),
      speciality: 'Gynecologist',
      degree: 'MBBS',
      experience: '3 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
      fees: 60,
      address: {
          line1: '27th Cross, Richmond',
          line2: 'Circle, Ring Road, London'
      }
  },
  {
      _id: 'doc15',
      name: 'Dr. Amelia Hill',
      image: Images('./doc15.png'),
      speciality: 'Dermatologist',
      degree: 'MBBS',
      experience: '1 Years',
      about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
      fees: 30,
      address: {
          line1: '37th Cross, Richmond',
          line2: 'Circle, Ring Road, London'
      }
  },
]
export { specialityData, doctors };
