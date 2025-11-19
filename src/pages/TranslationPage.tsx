import TranslationBlock from "../components/TranslationBlock";
import IconTools from "../components/IconTools";
import Title from "../components/Title";
import { useText } from "../context/TextContext";
import { useState } from "react";
import TopBlock from "../components/TopBlock";
import { useEffect } from "react";

export default function TranslationPage() {

  const [sourceLang, setSourceLang] = useState<"es" | "en">("es");
  const { text } = useText();

  const handleLanguageChange = (side: "left" | "right", lang: "en" | "es") => {
    if (side === "left") {
      setSourceLang(lang);
    } else {
      setSourceLang(lang === "en" ? "es" : "en");
    }
  };

  useEffect(() => {
    const onlineWeb = navigator.onLine;
    console.log('navegador conectado a internet: ', onlineWeb);
    
  }, [])
  

  return (
    <section className="min-h-screen  lg:min-h-[85vh] bg-gray-100 px-6 pt-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <header className="text-center">
          <Title
            title="Traductor Español-Inglés"
            description="Escribe tu texto y obtén la traducción con solo un click."
          />


        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-86 rounded-sm md:h-[40vh]">
            <TopBlock
              title="Entrada"
              activeLang={sourceLang}
              onLanguageChange={(lang) => handleLanguageChange("left", lang)}
            />
            <TranslationBlock placeholder="Escribe tu texto aquí..." disabled={false} />
          </div>

          <div className="h-86 rounded-sm md:h-[40vh]">
            <TopBlock
              title="Salida"
              reverse={true}
              orderLeft={true}
              activeLang={sourceLang === "en" ? "es" : "en"}
              onLanguageChange={(lang) => handleLanguageChange("right", lang)}
            />
            <TranslationBlock placeholder="Resultado de la traducción..." text={text} disabled={true} />
          </div>
        </div>

        <footer className="flex justify-center mt-12">
          <IconTools />
        </footer>
      </div>
    </section>
  );
}
