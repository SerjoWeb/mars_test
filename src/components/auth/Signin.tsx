import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import Input from "../ui/Input";
import Button from "../ui/Button";

interface SignInResponse {
  name?: string;
  email?: string;
  token?: string;
  status: number;
  message: string;
}

export const Signin = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    };

    const response = await fetch(`${import.meta.env.VITE_API_URL}/signin`, requestOptions);
    const data: SignInResponse = await response.json();

    if (data) {
      if (data.status === 401) {
        toast.error(data.message);
        setLoading(false);
        return;
      }

      toast.success(data.message);
      navigate("/app");
    }
  };

  return (
    <div className="text-sm text-orange-900">
      <p>Please, enter your credentials to enter the system.</p>

      <form className="w-full mt-8 flex flex-col gap-y-10" onSubmit={onFormSubmit}>
        <Input
          type="email"
          name="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          type="password"
          name="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
            Sign in
          </Button>
        )}
      </form>

      {!loading && (
        <div className="mt-4 flex flex-col justify-center items-center gap-y-2 text-sm text-orange-800">
          <div className="flex gap-x-1">
            <p>Forgot your password?</p>

            <Link
              to="/forgot-password"
              className="text-orange-950 transition-colors hover:text-orange-900"
            >
              Recover
            </Link>
          </div>

          <div className="flex gap-x-1">
            <p>Haven"t account yet?</p>

            <Link
              to="/signup"
              className="text-orange-950 transition-colors hover:text-orange-900"
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
