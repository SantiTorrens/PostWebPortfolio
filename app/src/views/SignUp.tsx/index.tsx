import { ReactElement, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { signUp } from "../../api/services/AuthServices";
import { FormErrors, FormStateType } from "../../types/form";
import { signUpPayload } from "../../types/auth";
import useForm from "../../hooks/useForm";
import { Link, useNavigate } from "react-router-dom";
import validateLoginForm from "../../utils/validateForm";
import FormInput from "../../components/FormInput";


export default function SignUp(): ReactElement {
  const [formState, handleInput, resetForm] = useForm<FormStateType>({
    email: '',
    password: '',
    passwordConfirmation: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const navigate = useNavigate();


  const submit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();


    const formErrors = validateLoginForm(formState);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {

      const response = await signUp(formState as signUpPayload);
      console.log("🚀 ~ handleLogin ~ response:", response)
      if (response.success) {
        navigate("/dashboard");
      }

      resetForm()
    }
  };

  return (
    <MainLayout>
      <div className="h-full w-full flex flex-col justify-center ">

        <div className="w-full flex flex-row">

          <div className="w-1/2 flex items-center justify-center">

            <h2 className="animatedHeadline ">SIGN UP</h2>
          </div>
          <div className="bg-blue-200 p-5 h-full w-1/2 py-10 flex gap-8 flex-col my-auto mx-auto rounded-xl shadow-lg">
            <form onSubmit={submit} className="flex flex-col gap-2 w-full max-w-md mx-auto">
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
          </div>
        </div>
      </div>
    </MainLayout>
  )
}