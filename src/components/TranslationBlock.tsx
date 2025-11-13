import Button from "./ui/Button";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { serviceAPI } from "../service/Ai";
import { useText } from "../context/TextContext";

interface TranslationBlockProps {
  title: string;
  placeholder: string;
  text?: string;
  disabled: boolean;
}

interface FormData {
  textToTranstale: string;
}
export default function TranslationBlock({
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
    const proccessText = async () => {
      if (!rawText) return;

      console.log(`Texto identificado: ${rawText}`);

      try {
        const resultApi = await serviceAPI(rawText);
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
    <div className="h-86 rounded-sm md:h-[40vh]">
      <header>
        <div><h3 className="text-gray-700 font-semibold">{title}</h3></div>
      </header>
      <main className="h-full">
        <form
          className="h-10/12 text-gray-800 rounded-sm shadow-md bg-gray-50 border border-gray-300"
          onSubmit={handleSubmit(onSubmit)}
        >
          {disabled ? (
            <textarea
              className="w-full h-full text-lg lg:text-xl xl:text-2xl p-4  border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-teal-700"
              placeholder={placeholder}
              value={text ?? ""}
              disabled
              readOnly
            />
          ) : (
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
            />
          )}

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
