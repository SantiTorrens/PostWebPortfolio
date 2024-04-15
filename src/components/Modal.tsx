import { ReactElement, ReactNode } from "react";

interface ModalProps {
  children?: ReactNode
  closeModal: () => void
}
export default function Modal({ children, closeModal }: ModalProps): ReactElement {

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full ">
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50" onClick={() => closeModal()}></div>
      <div className="z-50 w-2/3 mx-auto">
        {children}
      </div>
    </div>
  )
}