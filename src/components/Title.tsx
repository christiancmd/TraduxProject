interface TitleProps{
    title: string,
    description: string
}

//Title Component
export default function Title({title, description}:TitleProps) {
  return (
    <div className="w-full">
        <h1 className="text-2xl lg:text-3xl font-semibold text-gray-800">
            {title}
        </h1>
        <p className="text-gray-500 mt-2">
            {description}
        </p>
    </div>
  )
}
