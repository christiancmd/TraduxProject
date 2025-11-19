interface ButtonProps {
  children: React.ReactNode;
  className: string;
  id?:string;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button({
  children,
  className = "",
  id,
  type,
  onClick
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${className} rounded-lg font-semibold transition-colors duration-300 ease-in-out cursor-pointer`}
      onClick={onClick}
      id={id}
    >
      {children}
    </button>
  );
}
