import {createContext, useContext, useState} from 'react'

interface TextContextValue{
    text: string;
    setText: (value: string) => void;
};

const TextContext = createContext<TextContextValue | undefined>(undefined);

export const TextProvider = ({children}: {children: React.ReactNode}) => {
    const [text, setText] = useState<string>('');    

    return(
        <TextContext.Provider value={{text, setText}} >
            {children}
        </TextContext.Provider>
    )
}

export const useText = () => {
  const controllerx = useContext(TextContext);
  if (!controllerx) {
    throw new Error("useText debe usarse dentro de <TextProvider>");
  }
  return controllerx;
};
