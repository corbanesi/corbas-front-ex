import { LoginForm } from "@/components/login-form";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/_unauthenticated/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();

  function handleLoginSucess() {
    navigate({
      to: "/corbas/users",
    });
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm onSubmitSuccess={handleLoginSucess} />
      </div>
    </div>
  );
}
