import { ReactElement, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { signUp } from "../../api/services/AuthServices";
import { FormErrors, FormStateType } from "../../types/form";
import { signUpPayload } from "../../types/auth";
import useForm from "../../hooks/useForm";
import { Link, useNavigate } from "react-router-dom";
import validateLoginForm from "../../utils/validateForm";
import FormInput from "../../components/FormInput";
import { useUserStore } from "../../store/userSlice";
import Card from "../../components/Card";


export default function SignUp(): ReactElement {
  const [formState, handleInput, resetForm] = useForm<FormStateType>({
    email: '',
    password: '',
    passwordConfirmation: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const setUserData = useUserStore((state) => state.setUserData);

  const navigate = useNavigate();


  const submit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();


    const formErrors = validateLoginForm(formState);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {

      const response = await signUp(formState as signUpPayload);
      console.log("🚀 ~ handleLogin ~ response:", response)
      if (response.success) {
        setUserData(response.user)

        navigate("/dashboard");
      }

      resetForm()
    }
  };

  return (
    <MainLayout>
      <div className="flex flex-col justify-center w-full h-full ">

        <div className="flex flex-row w-full">

          <div className="flex items-center justify-center w-1/2">

            <h2 className="animatedHeadline ">SIGN UP</h2>
          </div>
          <Card classes=" p-5 h-full w-1/2 py-10 flex gap-8 flex-col my-auto mx-auto ">
            <form onSubmit={submit} className="flex flex-col w-full max-w-md gap-2 mx-auto">
              <FormInput
                label="Email"
                type="text"
                value={formState.email}
                name="email"
                handleInput={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e)}
                error={errors.email} />
              <FormInput
                label="Password"
                name="password"
                type="password"
                value={formState.password}
                handleInput={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e)}
                error={errors.password} />
              <FormInput
                label="Password Confirmation"
                name="passwordConfirmation"
                type="password"
                value={formState.passwordConfirmation}
                handleInput={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e)}
                error={errors.passwordConfirmation} />

              <button type="submit" className="w-full mt-4">Sign Up</button>
            </form>
            <hr className="m-auto my-6 w-64 border-[0.5px] border-black" />
            <Link className="mx-auto" to="/login" >Login</Link>
          </Card>
        </div>
      </div>
    </MainLayout>
  )
}