import { ReactElement } from "react";
import AuthLayout from "../../layouts/AuthLayout";
import { useUserStore } from "../../store/userSlice";
import Card from "../../components/Card";
import FormInput from "../../components/FormInput";
import { FormStateType } from "../../types/form";
import useForm from "../../hooks/useForm";
import { updateUserPayload } from "../../types/auth";


export default function Dashboard(): ReactElement {
  const { name, email, setUpdatedUser } = useUserStore()
  const [formState, handleInput] = useForm<FormStateType>({
    name: name,
    email: email,
  });

  const submit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setUpdatedUser(formState as updateUserPayload);
  };
  return (
    <AuthLayout>
      <div className="flex flex-row items-center justify-center w-full h-full gap-4">

        <Card classes="h-1/2 w-1/2 text-center flex flex-col justify-center">
          <h2 className="text-3xl text-black">
            ¡ Welcome to Postify !
          </h2>
          <h2 className="text-2xl text-black" >
            {name}
          </h2>
          <h3>This is your dashboard to manage your own info</h3>
        </Card>
        <Card classes="w-1/2 h-1/2 items-center justify-center flex">
          <form onSubmit={submit} className="flex flex-col w-full max-w-md gap-2 mx-auto">
            <FormInput name="name" value={formState.name} label="Username" type="text" handleInput={handleInput} />
            <FormInput disabled name="email" value={formState.email} label="Email" type="text" handleInput={handleInput} />
            <button type="submit" className="w-full mt-4">Update</button>

            </form>
        </Card>
      </div>
    </AuthLayout>
  )
}