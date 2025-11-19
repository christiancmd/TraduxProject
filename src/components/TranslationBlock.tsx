//Libraries
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
//Contexts and Providers
import { serviceAPI } from "../service/Ai";
import { useText } from "../context/TextContext";
import useNetworkAccess from "../hooks/useNetworkAccess";
//Components and Pages
import TranslateForm from "./TranslateForm";


interface TranslationBlockProps {
  placeholder: string;
  text?: string;
  disabled: boolean;
}

export default function TranslationBlock({
  placeholder,
  text,
  disabled,
}: TranslationBlockProps) {

  const [rawText, setRawText] = useState<string>('');
  const {setText, params} = useText();
  const networkAccess = useNetworkAccess();

  useEffect(() => {
    const proccessText = async () => {
      if (!rawText) return;

      if (!networkAccess) {
        toast.error("No hay acceso a la red. Por favor, verifica tu conexión a internet.");
        return;
      }

      console.log(`Texto identificado: ${rawText}`);

      try {
        const resultApi = await serviceAPI(rawText, params);
        setText(resultApi ?? "");
      } catch (error) {
        console.error("Error al llamar a serviceAPI:", error);
        setText("");
      } finally {
        // limpiar para evitar re-procesos innecesarios
        setRawText("");
      }
    };

    proccessText();
  }, [rawText, setText]);
  

  return (   
      <div className="h-full">
        <TranslateForm placeholder={placeholder} text={text} disabled={disabled} setRawText={setRawText}/>
      </div>
  );
}
