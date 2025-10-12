import { Alert, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { BatteryWarning } from "lucide-react";

import { cn } from "@/lib/utils";

import { Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

interface LoginFormProps extends React.ComponentProps<"div"> {
  onSubmitSuccess: () => void;
}

export function LoginForm({
  className,
  onSubmitSuccess,
  ...props
}: LoginFormProps) {
  const [hasError, setError] = useState(false);

  function handleLoginFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(false);

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");

    console.log({ email, password });

    if (email !== "test@example.com") {
      setError(true);
      return;
    }

    onSubmitSuccess();
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLoginFormSubmit}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  required
                  autoComplete="off"
                />
              </Field>
              <Field>
                <Button type="submit">Login</Button>
                <Button variant="outline" type="button">
                  Login with Google
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <Link to="/signup">Sign up</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      {hasError && (
        <>
          <Alert variant={"destructive"}>
            <BatteryWarning />
            <AlertTitle>Invalid username or password</AlertTitle>
          </Alert>
        </>
      )}
    </div>
  );
}
