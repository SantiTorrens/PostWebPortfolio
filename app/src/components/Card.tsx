import { ReactElement, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  classes?: string;
}

export default function Card({ children, classes }: CardProps): ReactElement {

  return (
    <div className={`bg-blue-300 p-2 rounded-xl ${classes}`}>
      {children}
    </div>
  )
}