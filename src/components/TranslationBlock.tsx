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

  //Local state to trigger text processing
  const [rawText, setRawText] = useState<string>('');
  //Get setText and params from context
  const {setText, params} = useText();
  //Get networkAccess status from custom hook
  const networkAccess = useNetworkAccess();

  useEffect(() => {
    const proccessText = async () => {

      //Validation: If no rawText, return
      if (!rawText) return;

      //Validation: If no networkAccess, show error and return
      if (!networkAccess) {
        toast.error("No hay acceso a la red. Por favor, verifica tu conexión a internet.");
        return;
      }

      const today = new Date().toDateString(); // date (ej: "Wed Nov 19 2025")
      const lastDate = localStorage.getItem("lastRequestDate"); //get last request date
      const storedCount = localStorage.getItem('requestCount'); //get stored request count

      //Validation: parse storedCount to number safely
      let requestCount = (storedCount && !isNaN(Number(storedCount))) ? Number(storedCount) : 0;      
      const requestLimit = 6; // Limit of requests per day

      //Validation: Reset count if last request was on a different day
      if (lastDate !== today) {
        requestCount = 0;
        localStorage.setItem("requestCount", "0");
        localStorage.setItem("lastRequestDate", today);
      }
      
      //Validation: Check if request limit is reached
      if (requestCount >= requestLimit) {
        toast.error("Has alcanzado el límite de solicitudes. Se reinicia mañana!.");
        return;
      }

      try {
        //call serviceAPI with rawText and params
        const resultApi = await serviceAPI(rawText, params);

        //update resquest count
        localStorage.setItem('requestCount', (Number(localStorage.getItem('requestCount') ?? '0') + 1).toString());
        localStorage.setItem("lastRequestDate", today);
        
        //Set the translated text in context
        setText(resultApi);
      } catch (error) {
        //error
        console.error("Error al llamar a serviceAPI:", error);
        setText("");

      } finally {
        //Reset rawText
        setRawText("");
      }
    };

    proccessText();
  }, [rawText, setText]); //dependency
  

  return (   
      <div className="h-full">
        <TranslateForm placeholder={placeholder} text={text} disabled={disabled} setRawText={setRawText}/>
      </div>
  );
}
