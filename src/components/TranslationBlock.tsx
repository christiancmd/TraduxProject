import Button from "./ui/Button";
import { useForm } from "react-hook-form";

interface TranslationBlockProps {
  title: string;
  placeholder: string;
  disabled: boolean;
}

interface FormData {
  textToTranstale: string;
}

export default function TranslatioBlock({
  title,
  placeholder,
  disabled,
}: TranslationBlockProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const text = data.textToTranstale.trim();
    if (text.length === 0) {
      console.log("El campo no puede estar vacio");
      return;
    }

    console.log("Mensaje valido", text);
  };

  return (
    <div className="h-86 rounded-sm md:h-[40vh]">
      <header>
        <div className="">{title}</div>
      </header>
      <main className="h-full bg-white rounded-sm shadow-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            {...register("textToTranstale", {
              required: "Este campo es obligatorio",
              maxLength: {
                value: 200,
                message: "El texto no puede exceder los 200 caracteres",
              },
            })}
            className="w-full h-full text-lg p-4 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-teal-700"
            placeholder={placeholder}
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
