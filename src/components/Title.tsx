interface TitleProps{
    title: string,
    description: string
}


function Title({title, description}:TitleProps) {
  return (
    <div className="w-full">
        <h1 className="text-3xl font-semibold text-gray-800">
            {title}
        </h1>
        <p className="text-gray-500 mt-2">
            {description}
        </p>
    </div>
  )
}

export default Title