import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
  component: RouteComponent,
});

function RouteComponent() {

  const state = useRouterState()

  const breadcrumb = [...state.matches]
    .filter(match => match.meta)
    .map(match => {
      return {
        title: match.meta?.at(0)?.title,
        pathname: match.pathname
      }
    })

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader breadcrumb={breadcrumb}/>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
}
