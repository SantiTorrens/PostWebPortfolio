import { ReactElement } from "react";

interface formInputProps {
  label: string,
  name: string,
  type: string,
  value: string | number | boolean,
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void,
  error?: string | undefined
  disabled?: boolean
}
export default function FormInput({ disabled, label, type, name, value, handleInput, error }: formInputProps): ReactElement {
  return (
    <div className="flex flex-col w-full">
      <label className="text-black">{label}:</label>
      <input type={type}
        name={name}
        autoFocus
        disabled={disabled}
        autoComplete="mail@example.com"
        value={value as string}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e)} className={`p-1 text-black bg-white rounded-lg focus:border-blue-700 active:border-blue-700 ${disabled ? 'bg-gray-200 text-gray-500' : ''}`} />
      <span className="h-5 text-red-500">{error ? error : ''}</span>

    </div>
  )
}