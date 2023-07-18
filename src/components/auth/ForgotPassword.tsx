import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

import Input from "../ui/Input";
import Button from "../ui/Button";

interface ForgotPasswordResponse {
  status: number;
  message: string;
}

export const ForgotPassword = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    };

    const response = await fetch(`${import.meta.env.VITE_API_URL}/recover-password`, requestOptions);
    const data: ForgotPasswordResponse = await response.json();

    if (data) {
      if (data.status === 401) {
        toast.error(data.message);
        setLoading(false);
        return;
      }

      toast.success(data.message);

      setEmail("");
      setLoading(false);
    }
  };

  return (
    <div className="text-sm text-orange-900">
      <p>Please, enter your email to recover your password.</p>

      <form className="w-full mt-8 flex flex-col gap-y-10" onSubmit={onFormSubmit}>
        <Input
          type="email"
          name="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {loading ? (
          <div className="w-full flex justify-center items-center">
            <span className="relative flex h-8 w-8">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-800 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-8 w-8 bg-orange-800 opacity-40"></span>
            </span>
          </div>
        ) : (
          <Button type="submit">
            Recover
          </Button>
        )}
      </form>

      <div className="mt-4 flex flex-col justify-center items-center gap-y-2 text-sm text-orange-800">
        <div className="flex gap-x-1">
          <p>Back to</p>

          <Link
            to="/"
            className="text-orange-950 transition-colors hover:text-orange-900"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};
