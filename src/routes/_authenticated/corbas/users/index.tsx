import { SiteHeader } from "@/components/site-header";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/corbas/users/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <>
    <SiteHeader />
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3 md:py-6 px-4 lg:px-6">
          <div className="bg-muted/50 aspect-video rounded-xl" />
          <div className="bg-muted/50 aspect-video rounded-xl" />
          <div className="bg-muted/50 aspect-video rounded-xl" />
        </div>
        <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
      </div>
    </div>
  </>;
}
