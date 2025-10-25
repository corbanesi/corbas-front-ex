import { Alert, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { BatteryWarning } from "lucide-react";

import { cn } from "@/lib/utils";

import { useForm } from "@tanstack/react-form";
import { Link } from "@tanstack/react-router";

import { useState } from "react";
import z from "zod";
import { Spinner } from "./ui/spinner";

interface LoginFormProps extends React.ComponentProps<"div"> {
  onSubmitSuccess: () => void;
}
const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(1, "Password must be provided"),
});

export function LoginForm({
  className,
  onSubmitSuccess,
  ...props
}: LoginFormProps) {
  const [hasError, setError] = useState(false);
  const [isLoggingIn, setLogginIn] = useState(false);

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onSubmit: loginSchema,
    },
    onSubmit: async ({ value }) => {
      console.log(value);
      handleLoginFormSubmit(value);
    },
  });

  async function handleLoginFormSubmit(form: {
    email: string;
    password: string;
  }) {
    setError(false);
    setLogginIn(true);

    await new Promise((resolve) => setTimeout(resolve, 500));

    console.log(form);

    if (form.email !== "test@example.com") {
      setError(true);
      setLogginIn(false);
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
          <form
            id="login-form"
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
          >
            <FieldGroup>
              <form.Field
                name="email"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>E-mail</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        placeholder="email@domain.com"
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              />
              <form.Field
                name="password"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        placeholder="***"
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              />
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter>
          <FieldGroup>
            <Field>
              <Button
                type="submit"
                form="login-form"
                className="w-full"
                data-test="btn-login"
              >
                {isLoggingIn && <Spinner />}
                Login
              </Button>
              <FieldDescription className="text-center">
                Don&apos;t have an account?{" "}
                <Link to="/signup" data-test="link-signup">
                  Sign up
                </Link>
              </FieldDescription>
            </Field>
          </FieldGroup>
        </CardFooter>
      </Card>
      {hasError && (
        <>
          <Alert variant={"destructive"} data-test="alert">
            <BatteryWarning />
            <AlertTitle>Invalid username or password</AlertTitle>
          </Alert>
        </>
      )}
    </div>
  );
}
