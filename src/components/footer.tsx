import { Linkedin, MapPin } from 'lucide-react';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

export const Footer = () => {

  const { theme, resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-screen w-full p-0 m-0 flex items-center justify-center">
        <ClipLoader color="gray" size={150} />
      </div>
    ) // or some loading placeholder
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  
  return (
    <footer className={`relative bg-blueGray-200 pt-8 pb-6 ${ currentTheme === "dark" ? "bg-slate-900" : "bg-gray-100" }`}>
      <div className="container mx-auto px-4 mt-10">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold mb-2">Sigamos en contacto!</h4>
            <h5 className="text-lg mt-0 mb-2 text-slate-600">
              Potenciamos tu negocio con soluciones de IA.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <a href='https://www.linkedin.com/company/blurcoreai/' target='_blank'>
                <Linkedin 
                  className='text-center text-blue-500 dark:text-blue-500 text-4xl hover:dark:text-blue-600 
                  hover:text-blue-600 cursor-pointer' 
                />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">MENU</span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Proyectos</a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Contactanos!</span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">blurcore.ai@gmail.com</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">WHATSAPP</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">+54 9 342 430-6594</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              © All rights reserved. Blurcore AI
            </div>
          </div>
        </div>
      </div>
    </footer>
	)
}
