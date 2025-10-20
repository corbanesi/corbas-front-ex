import { TanStackDevtools } from "@tanstack/react-devtools";
import { HeadContent, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        title: 'Corbas Corp.',
      }
    ]
  }),
  component: () => (
    <>
      <Outlet />
      <HeadContent />
      <TanStackDevtools
        config={{
          position: "bottom-right",
        }}
        plugins={[
          {
            name: "Tanstack Router",
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]} />
    </>
  ),
});