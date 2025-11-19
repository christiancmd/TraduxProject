import { useEffect, useState } from "react";
import { serviceAPI } from "../service/Ai";
import { useText } from "../context/TextContext";
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

  useEffect(() => {
    const proccessText = async () => {
      if (!rawText) return;

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
