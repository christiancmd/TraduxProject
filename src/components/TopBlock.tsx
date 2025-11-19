import Button from "./ui/Button";
import { useText } from "../context/TextContext";

interface TopBlockProps {
  title: string;
  reverse?: boolean;
  orderLeft?: boolean;
  // idioma seleccionado para este bloque: 'en' o 'es'
  activeLang: "en" | "es";
  // notifica el idioma elegido por el usuario en este bloque
  onLanguageChange: (lang: "en" | "es") => void;
}

export default function TopForm({
  title,
  reverse,
  orderLeft,
  activeLang,
  onLanguageChange,
}: TopBlockProps) {

  const {setParams} = useText();

  const handleClick = (lang: "en" | "es") => () => {
    
    setParams(lang);
    onLanguageChange(lang);
  };

  return (
    <header>
      <div className={`flex items-center justify-between ${orderLeft == true ? "flex-row-reverse" : "flex-row"}`}>
        <h3 className={`text-gray-700 font-semibold p-1`}>{title}</h3>
        <div className={`gap-10 px-5 flex ${reverse == true ? "flex-row-reverse " : "flex-row"}`}>

          <Button
            id={`es-${title.replace(/\s+/g, "-").toLowerCase()}`}
            onClick={handleClick("es")}
            className={`px-5 ${activeLang === "es" ? "text-teal-900 border-b-2 border-t-2" : ""}`}
          >
            Español
          </Button>

          <Button
            id={`en-${title.replace(/\s+/g, "-").toLowerCase()}`}
            onClick={handleClick("en")}
            className={`px-5 ${activeLang === "en" ? "text-teal-900 border-b-2 border-t-2": ""}`}
          >
            Inglés
          </Button>
        </div>
      </div>
    </header>
  );
}

