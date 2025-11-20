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

      const today = new Date().toDateString(); // Fecha simplificada (ej: "Wed Nov 19 2025")
      const lastDate = localStorage.getItem("lastRequestDate");
      const storedCount = localStorage.getItem('requestCount');
      let requestCount = (storedCount && !isNaN(Number(storedCount))) ? Number(storedCount) : 0;      
      const requestLimit = 6; // Límite de solicitudes permitidas

      // Reset diario
      if (lastDate !== today) {
        requestCount = 0;
        localStorage.setItem("requestCount", "0");
        localStorage.setItem("lastRequestDate", today);
      }
      
      if (requestCount >= requestLimit) {
        toast.error("Has alcanzado el límite de solicitudes. Se reinicia mañana!.");
        return;
      }

      try {
        const resultApi = await serviceAPI(rawText, params);

        // Actualizar el contador de solicitudes
        localStorage.setItem('requestCount', (Number(localStorage.getItem('requestCount') ?? '0') + 1).toString());
        localStorage.setItem("lastRequestDate", today);
        
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
