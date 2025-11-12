import Button from "./ui/Button";
import { useForm } from "react-hook-form";
import { useText } from "../context/TextContext";
import { useEffect, useState } from "react";

interface TranslationBlockProps {
  title: string;
  placeholder: string;
  text?: string;
  disabled: boolean;
}

interface FormData {
  textToTranstale: string;
}

export default function TranslatioBlock({
  title,
  placeholder,
  text,
  disabled,
}: TranslationBlockProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [rawText, setRawText] = useState<string>('');
  const {setText} = useText();   

  const onSubmit = (data: FormData) => {
    const textContent = data.textToTranstale.trim();
    if (textContent.length === 0) {
      console.log("El campo no puede estar vacio");
      return;
    }

    setRawText(textContent);
  };


  useEffect(() => {

    const proccessText = () => {

      if (rawText !== '') {
        console.log( `Texto indentificado: ${rawText}`); 

        setText(rawText);
      }

    }

    proccessText();

  }, [rawText])
  

  return (
    <div className="h-86 rounded-sm md:h-[40vh]">
      <header>
        <div className="">{title}</div>
      </header>
      <main className="h-full">
        <form  className="h-10/12 rounded-sm shadow-md border border-gray-300" onSubmit={handleSubmit(onSubmit)}>
          <textarea
            {...register("textToTranstale", {
              required: "Este campo es obligatorio",
              maxLength: {
                value: 200,
                message: "El texto no puede exceder los 200 caracteres",
              },
            })}
            className="w-full h-full text-lg lg:text-xl xl:text-2xl p-4  border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-teal-700"
            placeholder={placeholder}
            value={text ?? undefined }
            disabled={disabled}
          ></textarea>

          {!disabled && (
            <Button
              type="submit"
              className="border-2 py-2 px-6 text-white bg-teal-700 hover:bg-teal-100 hover:border-teal-900 hover:text-teal-900 "
            >
              Traducir
            </Button>
          )}

          {errors.textToTranstale && (
            <p style={{ color: "red" }}>{errors.textToTranstale.message}</p>
          )}
        </form>
      </main>
    </div>
  );
}
