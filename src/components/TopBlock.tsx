//Contexts and Providers
import { useText } from "../context/TextContext";
//Components and Pages
import Button from "./ui/Button";

interface TopBlockProps {
  title: string;
  reverse?: boolean;
  orderLeft?: boolean;
  activeLang: "en" | "es"; //enum to indicate the active language
  onLanguageChange: (lang: "en" | "es") => void; // notify parent component of language change
}

export default function TopForm({
  title,
  reverse,
  orderLeft,
  activeLang,
  onLanguageChange,
}: TopBlockProps) {

  //get setParams from context
  const {setParams} = useText();

  //function to handle click on language buttons
  const handleClick = (lang: "en" | "es") => () => {
    setParams(lang); //update setParams in context
    onLanguageChange(lang); //notify parent component of language change
  };

  return (
    <header className="mb-1">
      <div className={`flex items-center justify-between ${orderLeft == true ? "flex-row-reverse" : "flex-row"}`}>
        <h3 className={`text-gray-700 font-semibold p-1`}>{title}</h3>
        <div className={`gap-10 px-5 flex ${reverse == true ? "flex-row-reverse " : "flex-row"}`}>

          <Button
            id={`es-${title.replace(/\s+/g, "-").toLowerCase()}`}
            onClick={handleClick("es")} //call handleClick with 'es'
            className={`px-5 transition duration-300 ${activeLang === "es" ? "text-teal-900 border-b-2 pb-1" : ""}`}
          >
            Español
          </Button>

          <Button
            id={`en-${title.replace(/\s+/g, "-").toLowerCase()}`}
            onClick={handleClick("en")} //call handleClick with 'en'
            className={`px-5 transition duration-300 ${activeLang === "en" ? "text-teal-900 border-b-2 pb-1": ""}`}
          >
            Inglés
          </Button>
        </div>
      </div>
    </header>
  );
}

