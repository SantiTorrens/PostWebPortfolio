import { ReactElement, ReactNode } from "react";

interface ModalProps {
  children?: ReactNode
  closeModal: () => void
}
export default function Modal({ children, closeModal }: ModalProps): ReactElement {

  return (
    <div onClick={() => closeModal()} className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">

      {children}
    </div>
  )
}