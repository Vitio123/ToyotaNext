"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  // Función para manejar los enlaces externos
  const handleExternalLink = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    url: string | URL | undefined
  ) => {
    e.preventDefault();
    if (
      confirm(
        "Se está dirigiendo a la página oficial de Toyota. ¿Desea continuar?"
      )
    ) {
      window.open(url, "_blank");
    }
  };

  // Enlaces principales del footer
  const footerLinks = [
    {
      title: "Modelos",
      links: [
        {
          name: "Agya",
          url: "https://www.toyotaperu.com.pe/listado-modelos-toyota/auto-agya",
        },
        {
          name: "Rush",
          url: "https://www.toyotaperu.com.pe/listado-modelos-toyota/camioneta-rush",
        },
        {
          name: "Hilux",
          url: "https://www.toyotaperu.com.pe/listado-modelos-toyota/camioneta-hilux",
        },
        {
          name: "Fortuner",
          url: "https://www.toyotaperu.com.pe/listado-modelos-toyota/camioneta-fortuner",
        },
      ],
    },
    {
      title: "Servicios",
      links: [
        {
          name: "Toyota Financiamiento",
          url: "https://www.toyotaperu.com.pe/calculadora-toyota-life",
        },
        {
          name: "Mantenimiento",
          url: "https://www.toyotaperu.com.pe/mantenimiento-toyota",
        },
        { name: "Accesorios", url: "https://www.toyotaperu.com.pe/accesorios" },
        {
          name: "Servicio al Cliente",
          url: "https://www.toyotaperu.com.pe/comunicados-toyota",
        },
      ],
    },
    {
      title: "Toyota",
      links: [
        {
          name: "Acerca de Toyota",
          url: "https://www.toyotaperu.com.pe/historia",
        },
        {
          name: "Consultas",
          url: "https://www.toyotaperu.com.pe/contacto/consultas",
        },
        {
          name: "Reclamos",
          url: "https://www.toyotaperu.com.pe/contacto/reclamos",
        },
        {
          name: "Concesionarios",
          url: "https://www.toyotaperu.com.pe/concesionarios-toyota",
        },
      ],
    },
  ];

  // Redes sociales (se mantienen igual; se recomienda verificar que los perfiles sean oficiales)
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/ToyotaPeru",
      icon: "M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/toyotaperu/",
      icon: "M10 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.717-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 0C7.284 0 6.944.012 5.877.06 2.246.227.227 2.242.061 5.877.01 6.944 0 7.284 0 10s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122C19.777 2.249 17.76.228 14.124.06 13.057.01 12.716 0 10 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/user/ToyotaPeru",
      icon: "M6 4l8 6-8 6V4z",
    },
  ];

  return (
    <footer className="bg-[#202020] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Top section with logo and links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {/* Brand section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-white rounded-lg p-2">
                <Image
                  src="/logo.svg"
                  alt="Toyota Logo"
                  width={120}
                  height={30}
                  className="object-contain"
                />
              </div>
            </div>

            <p className="text-gray-400 text-sm">
              Mejorando la movilidad para todos. Descubre el futuro de la
              automoción con Toyota.
            </p>

            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  onClick={(e) => handleExternalLink(e, social.url)}
                  aria-label={`Visitar ${social.name}`}
                  className="w-10 h-10 rounded-full bg-[#333333] hover:bg-[#BD0100] flex items-center justify-center transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links sections */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-[#BD0100] font-bold text-lg tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.url}
                      onClick={(e) => handleExternalLink(e, link.url)}
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-[#BD0100] group-hover:w-2 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-start">
              <a
                href="https://www.toyotaperu.com.pe/terminos-y-condiciones"
                onClick={(e) =>
                  handleExternalLink(
                    e,
                    "https://www.toyotaperu.com.pe/terminos-y-condiciones"
                  )
                }
                className="text-xs text-gray-400 hover:text-white transition-colors duration-300"
              >
                Términos y Condiciones
              </a>
              <a
                href="https://www.toyotaperu.com.pe/politica-de-privacidad"
                onClick={(e) =>
                  handleExternalLink(
                    e,
                    "https://www.toyotaperu.com.pe/politica-de-privacidad"
                  )
                }
                className="text-xs text-gray-400 hover:text-white transition-colors duration-300"
              >
                Política de Privacidad
              </a>
              <a
                href="https://www.toyotaperu.com.pe/libro-de-reclamaciones"
                onClick={(e) =>
                  handleExternalLink(
                    e,
                    "https://www.toyotaperu.com.pe/libro-de-reclamaciones"
                  )
                }
                className="text-xs text-gray-400 hover:text-white transition-colors duration-300"
              >
                Libro de Reclamaciones
              </a>
            </div>

            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Toyota Perú. Todos los derechos
              reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
