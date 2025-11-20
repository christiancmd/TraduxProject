//Libraries
import {createContext, useContext, useState} from 'react'
interface TextContextValue{
    text: string;
    setText: (value: string) => void;
    params: string;
    setParams: (value: string) => void;
};

//Context
const TextContext = createContext<TextContextValue | undefined>(undefined);

//Provider
export const TextProvider = ({children}: {children: React.ReactNode}) => {
    //create states
    const [text, setText] = useState<string>(''); 
    const [params, setParams] = useState<string>('es'); //es por defecto  

    //Provider return
    return(
        <TextContext.Provider value={{text, setText, params, setParams}} >
            {children}
        </TextContext.Provider>
    )
}

//validate hook
export const useText = () => {
  const controllerx = useContext(TextContext);
  if (!controllerx) {
    throw new Error("useText debe usarse dentro de <TextProvider>");
  }
  return controllerx;
};
