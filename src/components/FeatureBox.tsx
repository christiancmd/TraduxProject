import type React from "react";

interface FeatureBoxProps {
  title: string;
  content: React.ReactNode;
  icon: React.ReactNode;
  className?: string;
}

//Reusable feature box component
export default function FeatureBox({
  title,
  content,
  icon,
  className = "",
}: FeatureBoxProps) {
  return (
    <div className={`p-4 bg-gray-50 rounded-lg border border-gray-100 ${className}`}>
        <div className="flex items-start">
            <span className="text-xl mr-3 text-gray-800" role="img">
                {icon}
            </span>
        <div>
            <h3 className="font-semibold text-gray-800">{title}</h3>
                <p className="text-sm text-gray-600 mt-1">{content}</p>
            </div>
        </div>
    </div>
    );
}
