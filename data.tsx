import {
  BookText,
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Github,
  Crop,
  Pencil,
  Computer,
  Book,
  Rocket,
  Speech,
} from "lucide-react";

export const socialNetworks = [
  {
    id: 1, // Cambia el ID a 1 (único)
    logo: <Github size={30} strokeWidth={1} />, // Icono de GitHub
    src: "https://github.com/adrian-sudo", // URL de GitHub
  },
  {
    id: 2,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/adrián-felipe-rodríguez-lozano-52a332363",
  },
];
export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "/about-me",
  },
  {
    id: 3,
    title: "Book",
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: "/services",
  },
  {
    id: 4,
    title: "Target",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "/portfolio",
  },
  {
    id: 5,
    title: "Home",
    icon: <Speech size={25} color="#fff" strokeWidth={1} />,
    link: "/testimonials",
  },
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Diseñador de Interfaces y Desarrollador Frontend",
    subtitle: "Asoprocoo",
    description:
      "Diseñar interfaces atractivas y funcionales que mejoren la experiencia del usuario. Colaborar con equipos multidisciplinarios para crear soluciones digitales innovadoras y efectivas, combinando creatividad, y tecnologia.",
    date: "2020-21",
  },
  {
    id: 3,
    title: "Desarrollador Web - Movil",
    subtitle: "CodeCrafters ",
    description:
      "Desarrollar aplicaciones web y móviles de alta calidad, utilizando tecnologías modernas y mejores prácticas de desarrollo. Colaborar con diseñadores y otros desarrolladores para crear experiencias de usuario excepcionales. Documentar y mantener el código y Api`s de manera efectiva, asegurando la escalabilidad y el rendimiento óptimo de las aplicaciones.",
    date: "2022-2023",
  },
  {
    id: 4,
    title: "Freenlance Full Stack ",
    subtitle: "Sistema de Inventario.",
    description:
      "Backend: Desarrollo de la lógica del servidor, gestión de bases de datos y creación de API RESTful para la comunicación entre el frontend y el backend. Frontend: Creación de interfaces de usuario atractivas y funcionales utilizando tecnologías modernas, base de datos, y frameworks de desarrollo web. Herramientas de control de versiones como Git para gestionar el código y colaborar con otros desarrolladores.",
    date: "2024",
  },
  {
    id: 4,
    title: "Practicas Sena",
    subtitle: "CasaLuker",
    description:
      "Brindar soporte técnico y mantenimiento a sistemas informáticos. Hardware: Diagnóstico y reparación de problemas de hardware, instalación de componentes y actualización de equipos. Software: Instalación, configuración y actualización de sistemas operativos y aplicaciones. Redes: Configuración y mantenimiento de redes locales, resolución de problemas de conectividad.",
    date: "2024 - 2025",
  },
];

export const dataCounter = [
  {
    id: 0,
    endCounter: 3,
    text: "Años de experiencia",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 10,
    text: "Clientes satisfechos",
    lineRight: true,
    lineRightMobile: false,
  },
  {
    id: 2,
    endCounter: 200,
    text: "Proyectos finalizados",
    lineRight: true,
    lineRightMobile: true,
  },
];

export const serviceData = [
  {
    icon: <Crop />,
    title: "Branding",
    description:
      "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
  },
  {
    icon: <Pencil />,
    title: "Diseño web",
    description:
      "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
  },
  {
    icon: <Computer />,
    title: "Desarrollo web y móvil",
    description:
      "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
  },
  {
    icon: <Book />,
    title: "Copywriting",
    description:
      "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "App Restaurante Gourmet",
    image: "/image-1.jpg",
    urlGithub: "https://github.com/adrian-sudo/restaurante-gourmet",
    urlDemo: "#!",
  },
  {
    id: 2,
    title: "Sistemas De Inventario",
    image: "/image-3.jpg",
    urlGithub: "https://github.com/adrian-sudo/uu",
    urlDemo: "#!",
  },
  {
    id: 3,
    title: "web panadería",
    image: "/image-2.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 3,
    title: "Proyecto de Portafolio",
    image: "/image-4.jpg",
    urlGithub: "https://github.com/adrian-sudo/multiapp",
    urlDemo: "#!",
  },
];

export const dataTestimonials = [
  {
    id: 1,
    name: "William Peñaranda",
    description:
      "Gran persona, siempre dispuesto a ayudar y aportar su conocimiento. Su profesionalismo y dedicación son admirables. ",
    imageUrl: "/profile1.png",
  },
  {
    id: 2,
    name: "Sebastian Orozco",
    description:
      "Trabaje con el en CasaLuker, y puedo decir que es un profesional excepcional. Su habilidad para resolver problemas y su enfoque en la calidad son impresionantes. una persona confiable y comprometida con su trabajo muy feliz de haber trabajado con el.",
    imageUrl: "/profile2.png",
  },
  {
    id: 3,
    name: "Willian Rodriguez",
    description:
      "Un muchacho muy profesional, siempre dispuesto a ayudar y aportar su conocimiento. Su profesionalismo y dedicación son admirables. Creo el Sistema de Inventario para mi empresa y quedé muy satisfecho con el resultado.",
    imageUrl: "/profile3.png",
  },
];
