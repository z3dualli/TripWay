import type { ReactNode } from "react";
import { useAppSelector } from "../../app/hooks";
import { Navigate } from "react-router-dom";

interface Props {
  children: ReactNode
}

const PrivateRoute = ({ children }: Props) => {
  const role = useAppSelector((state) => state.auth.role)

  if (role !== "admin") {
    return <Navigate to="/" />  
  }

  return <>{children}</>
}

export default PrivateRoute