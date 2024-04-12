import { ReactElement } from "react";

interface formInputProps {
  label: string,
  name: string,
  type: string,
  value: string | number | boolean,
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void,
  error: string | undefined
}
export default function FormInput({ label, type, name, value, handleInput, error }: formInputProps): ReactElement {
  return (
    <div className="flex flex-col w-full">
      <label className="text-black">{label}:</label>
      <input type={type}
        name={name}
        autoFocus
        autoComplete="mail@example.com"
        value={value as string}
        onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleInput(e)} className="p-1 bg-white rounded-lg focus:border-blue-700 active:border-blue-700 text-black" />
      <span className="text-red-500 h-5">{error ? error : ''}</span>

    </div>
  )
}