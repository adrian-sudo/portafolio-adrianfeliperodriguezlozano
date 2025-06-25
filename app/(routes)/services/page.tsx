import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import { Mail } from "lucide-react";

const ServicesPage = () => {
  return (
    <>
      <TransitionPage />
      <CircleImage />
      <AvatarServices />
      <div className="grid items-center justify-center min-h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 px-4">
        <div className="max-w-[450px]">
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
            Mis <span className="font-bold text-secondary">servicios.</span>
          </h1>
          <p className="mb-6 text-lg text-gray-300 md:text-xl">
            Ofrezco servicios de desarrollo Full Stack especializados en crear
            soluciones web completas y de alto rendimiento. Con experiencia en
            tecnologías modernas como React, Next.js, Node.js y bases de datos
            SQL/NoSQL, diseño y desarrollo aplicaciones web escalables desde el
            frontend hasta el backend.
          </p>

          <a
            href="mailto:adrianfeliperodriguezlozano05@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all rounded-lg md:px-5 md:py-3 md:text-base bg-secondary hover:bg-secondary/80 text-darkBg hover:shadow-lg hover:shadow-secondary/30"
          >
            <Mail size={18} className="flex-shrink-0" />
            Contacta conmigo
          </a>
        </div>

        {/* SLIDER */}
        <div className="w-full">
          <SliderServices />
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
