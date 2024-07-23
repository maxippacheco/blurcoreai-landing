"use client"

import React, { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Activity, BadgeDollarSign, Heart, PhoneCall, ShoppingCart, TrendingUp, Truck } from "lucide-react"
import ClipLoader from "react-spinners/ClipLoader";
import { Button } from "@/components/ui/button"
import { ServicesCard, ServicesCardWithIcon } from "@/components/service-card"
import { Footer } from "@/components/footer"

export default function App() {

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
    <>
      <div className={`flex flex-col h-[80vh] ${currentTheme === "dark" ? "bg-slate-900" : "bg-gray-100"}`} id="home">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">
              Bienvenido a <span className="font-extrabold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
                BlurcoreAI</span>
            </h1>
            <p className="text-xl mb-4">Potencia tu negocio con IA personalizada.</p>
            <Button>Agenda una demo</Button>
          </div>
        </div>
      </div>

      <div className="container h-auto lg:h-[70vh] flex flex-col items-center justify-center mx-auto px-4 py-8 mt-14" id="servicios">
        <h3 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Nuestros servicios</h3>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
          <ServicesCard 
            title="Chatbots"
            description="Mejora la experiencia del cliente con nuestros chatbots inteligentes. 
            Capaces de atender consultas, proporcionar información y resolver problemas en tiempo real, nuestros chatbots 
            están diseñados para ofrecer un soporte al cliente eficiente y accesible las 24 horas del día."
          />
          <ServicesCard 
            title="Asistentes"
            description="Potencia tu equipo con asistentes virtuales personalizados. 
            Ya sea para la atención al cliente, la gestión de agendas o la automatización de procesos internos, 
            nuestros asistentes virtuales están preparados para asumir tareas complejas y adaptarse a las 
            necesidades específicas de tu negocio."
          />
          <ServicesCard 
            title="Automatizaciones"
            description="Optimiza tus procesos empresariales con nuestras soluciones de automatización. 
            Desde la gestión de tareas repetitivas hasta la integración de sistemas complejos, nuestras automatizaciones 
            te permiten ahorrar tiempo y recursos, mejorando la eficiencia operativa."
          />
        </div>
      </div>

      <div className={`flex flex-col h-auto lg:h-[80vh] items-center justify-center ${currentTheme === "dark" ? "bg-slate-900" : "bg-gray-100"} p-12 mt-10`} id="soluciones">
        <h2 className="text-center text-2xl sm:text-4xl font-bold mb-8">Soluciones para todos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServicesCardWithIcon 
            title={`E-commerce`}
            description="Atención al cliente, gestión de inventarios, automatización de marketing."
            Icon={ShoppingCart}
          />
          <ServicesCardWithIcon 
            title="Salud"
            description="Gestión de citas, seguimiento de pacientes, respuestas a preguntas frecuentes."
            Icon={Heart}
          />
          <ServicesCardWithIcon 
            title="Logística"
            description="Seguimiento de envíos, gestión de inventarios, atención al cliente."
            Icon={Truck}
          />
          <ServicesCardWithIcon 
            title="Sector Financiero"
            description="Consultas de cuentas, procesamiento de transacciones, recordatorios de pagos."
            Icon={BadgeDollarSign}
          />
          <ServicesCardWithIcon 
            title="Servicios Profesionales"
            description="Programación de reuniones, gestión de clientes, recordatorios y notificaciones."
            Icon={Activity}
          />
          <ServicesCardWithIcon 
            title="Agencias de Marketing"
            description="Generación de leads, campañas automatizadas, informes de rendimiento."
            Icon={TrendingUp}
          />
        </div>

      </div>

      <div className="h-screen lg:h-[80vh] flex flex-col items-center justify-center mx-auto px-4 py-8 mt-14" id="contacto">
        <h2 className="text-center sm:text-5xl text-2xl font-bold mb-8">¿Todavia tienes preguntas?</h2>
        <p className="text-lg mb-4">Agenda una llamada con el equipo de Blurcore AI</p>
        {/* TODO: ACCORDION COMPONENT */}
        <Button className="mt-4 dark:bg-blue-500 bg-blue-500 dark:text-white text-white text-xl p-8 rounded-lg hover:dark:bg-blue-600 hover:bg-blue-500">
          <a href="https://calendly.com/blurcore-ai/30min" target="_blank" className="flex items-center">
            Agenda una llamada <PhoneCall className="ml-2" />
          </a>
        </Button>

      </div>

      <Footer />
    </>

  )
}