import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { createFileRoute } from "@tanstack/react-router";

import { invoicesQueryOptions, overviewQueryOptions } from "@/lib/queryOptions";
import { useSuspenseQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/_authenticated/corbas/dashboard/")({
  loader: async (opts) => {
    const data = await opts.context.queryClient.ensureQueryData(
      invoicesQueryOptions(),
    );
    return {
      crumb: "Dashboard",
      data,
    };
  },
  head: () => ({
    meta: [
      {
        title: "Dashboard",
      },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  const invoicesQuery = useSuspenseQuery(invoicesQueryOptions());
  const overviewQuery = useSuspenseQuery(overviewQueryOptions());

  return (
    <>
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <SectionCards data={overviewQuery.data} />
            <div className="px-4 lg:px-6">
              <ChartAreaInteractive />
            </div>
            <DataTable data={invoicesQuery.data} />
          </div>
        </div>
      </div>
    </>
  );
}
