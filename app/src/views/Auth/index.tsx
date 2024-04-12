import { ReactElement } from "react";
import AuthLayout from "../../layouts/AuthLayout";
import { useUserStore } from "../../store/userSlice";


export default function Dashboard(): ReactElement {
  const { name, email } = useUserStore()

  return (
    <AuthLayout>
      {name}
      {email}
    </AuthLayout>
  )
}