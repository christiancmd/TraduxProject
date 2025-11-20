//Libraries
import { useForm } from "react-hook-form";
//Contexts and Providers
import useNetworkAccess from "../hooks/useNetworkAccess";
//Components and Pages
import Button from "./ui/Button";
import Form from "./ui/Form";

interface FormProps {
  placeholder: string;
  text?: string;
  disabled: boolean;
  setRawText: (newVAlue: string) => void;
}

interface FormData {
  textToTranslate: string;
}

//Translation Form Component
export default function TranslateForm({ placeholder, text, disabled, setRawText }: FormProps ){
  //Get networkAccess status from custom hook
  const networkAccess = useNetworkAccess();
  //React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  //Handle form submission
  const onSubmit = (data: FormData) => {
    const textContent = data.textToTranslate.trim();

    //validation: check if text is empty
    if (textContent.length === 0) {
      console.log("El campo no puede estar vacio");
      return;
    }

    //send text to parent component
    setRawText(textContent);
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
    >
      {disabled ? (
        <textarea
          className="w-full h-full text-lg lg:text-xl p-4 border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-teal-700"
          placeholder={placeholder}
          value={text ?? ""}
          disabled
          readOnly
        />

        
      ) : (
        <textarea
          {...register("textToTranslate", {
            required: "Este campo es obligatorio",
            maxLength: {
              value: 200,
              message: "El texto no puede exceder los 200 caracteres",
            },
          })}
          className="w-full h-full text-lg lg:text-xl p-4  border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-teal-700"
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


      {disabled && (
          <div className="w-full text-right">

            {networkAccess ? (
              <p className="font-medium text-sm mr-1 text-green-600">Hay internet</p>
            ): (
              <p className="font-medium text-sm mr-1 text-red-600">No hay internet</p>
            )}
          </div>
      )}

      {errors.textToTranslate && (
        <p style={{ color: "red" }}>{errors.textToTranslate.message}</p>
      )}
    </Form>
  );
}
