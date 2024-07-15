import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

import mail from "../assets/mail.svg";
import telf from "../assets/telf.svg";
import pen from "../assets/pen.svg";

export const navigation = [
  {
    id: "0",
    title: "Inici",
    url: "#inici",
  },
  {
    id: "1",
    title: "Sobre Nosaltres",
    url: "#about",
  },
  {
    id: "2",
    title: "Serveis",
    url: "#serveis",
  },
  {
    id: "3",
    title: "Contacta'ns",
    url: "#contacte",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];
export const collabText =
  "Tenim a disposició totes les tecnologies i eines del mercat necessàries per a un producte final impecable.";

export const collabContent = [
  {
    id: "0",
    title: "Personalització",
    text: "Programem tot des de zero per modificar cada detall del teu projecte al teu gust.",
  },
  {
    id: "1",
    title: "Preus competitius",
    text: "Creem i dissenyem webs accessibles per a tots els pressupostos, enfocant-nos en digitalitzar negocis petits i mitjans.",
  },
  {
    id: "2",
    title: "Destaca't dels altres",
    text: "Et diferenciem de la resta i t'assegurem impulsar el teu màrqueting"
  },
];

export const contactContent= [
  {
    id: "0",
    title: "Per email",
    text: "info@webify.cat",
    icon: mail,
  },
  {
    id: "1",
    title: "Per telèfon",
    text: "611 409 745",
    icon: telf,
  },
  {
    id: "2",
    title: "Pel formulari",
    text: "Emplena el formulari de contacte i ens faràs arribar un correu.",
    icon: pen,
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Bàsic",
    description: "Simplement disseny web.",
    price: "200",
    features: [
      "Desenvolupem el teu portal web",
      "Modifiquem i ho ajustem tot al teu gust",
      "T'ajudem a adquirir el teu domini i publicar la web",
    ],
  },
  {
    id: "1",
    title: "Bàsic + SEO",
    description: "Dissenyem la teva web i ens encarreguem d'optimitzar-la.",
    price: "250",
        features: [
      "Tots els avantatges del paquet bàsic",
      "Optimitzem la teva web pels motors de cerca",
      "Et posicionem a Google",
    ],

  },
  {
    id: "2",
    title: "Prèmium",
    description: "Per a necessitats exclusives i funcionalitats avançades.",
    price: null,
    features: [
      "Solucions personalitzades per a necessitats especials",
      "Implementem la funcionalitat que necessitis",
      "Format web pel teu projecte",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
