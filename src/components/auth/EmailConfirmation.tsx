import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

export const EmailConfirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="text-sm text-orange-800 flex flex-col gap-y-6 justify-center items-center">
      <p>Please, check your email, there will be a message with the verification link. Click on the link to verify your account.</p>
      <Button
        onClick={() => navigate("/")}
      >
        Sign in
      </Button>
    </div>
  );
};
