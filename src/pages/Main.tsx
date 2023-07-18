import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

export const Main = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <Button
        onClick={() => navigate("/")}
      >
        Logout
      </Button>
    </div>
  );
};
