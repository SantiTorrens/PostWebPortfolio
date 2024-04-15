import { ReactElement, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { login } from "../../api/services/AuthServices";
import { FormErrors, FormStateType } from "../../types/form";
import { LoginPayload, loginResponse } from "../../types/auth";
import useForm from "../../hooks/useForm";
import { Link, useNavigate } from "react-router-dom";
import validateForm from "../../utils/validateForm";
import FormInput from "../../components/FormInput";
import { useUserStore } from "../../store/userSlice";
import Card from "../../components/Card";


export default function Login(): ReactElement {
  const [formState, handleInput, resetForm] = useForm<FormStateType>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const { setUserData } = useUserStore();
  const navigate = useNavigate();


  const submit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const formErrors = validateForm(formState);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      const response: loginResponse = await login(formState as LoginPayload);
      if (response.success) {
        setUserData(response.user)
        navigate("/dashboard");
      }
      resetForm()
    }
  };

  return (
    <MainLayout>
      <div className="flex flex-col justify-center w-full h-full">
        <div className="flex flex-row w-full">
          <div className="flex items-center justify-center w-1/2">
            <h2 className="animatedHeadline ">LOGIN</h2>
          </div>
          <Card classes="flex flex-col w-1/2 h-full gap-8 p-5 py-10 mx-auto my-auto ">
            <form onSubmit={submit} className="flex flex-col w-full max-w-md gap-2 mx-auto">
              <FormInput
                label="Email"
                type="text"
                value={formState.email}
                name="email"
                handleInput={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e)}
                error={errors.email}
              />
              <FormInput
                label="Password"
                type="password"
                value={formState.password}
                name="password"
                handleInput={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e)}
                error={errors.password}
              />

              <button type="submit" className="w-full mt-4">Login</button>
            </form>
            <hr className="m-auto my-6 w-64 border-[0.5px] border-black" />
            <Link className="mx-auto" to="/signUp" >Create Account</Link>
          </Card>
        </div>
      </div>
    </MainLayout>
  )
}