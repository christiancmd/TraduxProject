//Components and Pages
import FeatureBox from "../components/FeatureBox";
//Style and icons
import { GoStopwatch } from "react-icons/go";
import { FaSignal } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";


export default function AboutPage() {
  return (
    <main className="flex justify-center p-4 sm:p-12 md:p-12 min-h-[80vh]">
      <section className="max-w-3xl w-full bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-10 leading-relaxed">
        <h1 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">
          Acerca de Tradux
        </h1>

        <p className="mt-2 text-gray-600">
          Tradux es un asistente de traducción breve y práctico que ayuda a
          convertir textos entre idiomas usando servicios en la nube. Está
          pensado para usos rápidos: frases, párrafos cortos y comprobaciones
          rápidas de significado.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <FeatureBox 
                title="Conexión Requerida"
                content="Tradux necesita conexión a Internet para funcionar; sin conexión no se pueden realizar traducciones."
                icon={<FaSignal/>}
            />
            <FeatureBox 
                title="Límite Diario"
                content={
                    <>
                        Hay un límite de <strong className="text-indigo-600">6</strong>{" "}
                        traducciones por día para el uso general del servicio.
                    </>
                }
                icon={<GoStopwatch/>}
            />
            <FeatureBox 
                title="Nota de IA"
                content="Las traducciones las genera un servicio de IA — aunque suelen ser útiles, siempre conviene revisarlas antes de usarlas en contextos críticos."
                icon={<FaRobot/>}
                className="col-span-full"
            />
        </div>

        <div className="mt-8 p-4 bg-indigo-50 border border-indigo-200 rounded-lg text-gray-700 text-sm">
          <strong className="text-indigo-700">Consejo rápido:</strong> Si vas a traducir muchos textos,
          agrúpalos y revisa los resultados; así aprovechas mejor el límite
          diario.
        </div>
      </section>
    </main>
  );
}

