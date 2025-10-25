interface ButtonProps {
  children: React.ReactNode;
  className: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  type,
  className = "",
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${className} rounded-lg font-semibold transition-colors duration-300 ease-in-out cursor-pointer`}
    >
      {children}
    </button>
  );
}
