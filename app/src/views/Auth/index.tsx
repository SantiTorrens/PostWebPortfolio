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

        <Card classes="h-1/2 w-1/2 text-center flex flex-col p-5 justify-center gap-5">
          <h2 className="text-3xl text-black">
            ¡ Welcome, {name} <br /> to Postify Dashboard !
          </h2>
          <div className="w-2/3 mx-auto">
            <h3 className="text-gray-600 ">This is your dashboard to manage your own info</h3>
            <h3 className="text-gray-600 ">Here you can update your Username, and also be able to see the full list of posts and save them as your favorites!</h3>
          </div>
        </Card>
        <Card classes="w-1/2 h-1/2 items-center justify-center flex">
          <form onSubmit={submit} className="flex flex-col w-full max-w-md gap-2 mx-auto">
            <FormInput
              name="name"
              value={formState.name}
              label="Username"
              type="text"
              handleInput={handleInput}
            />
            <FormInput
              disabled
              name="email"
              value={formState.email}
              label="Email"
              type="text"
              handleInput={handleInput}
            />
            <button type="submit" className="w-full mt-4">Update</button>

          </form>
        </Card>
      </div>
    </AuthLayout>
  )
}