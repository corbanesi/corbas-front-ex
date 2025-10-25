import { queryOptions } from "@tanstack/react-query";
import { fetchInvoices, fetchOverview } from "./mockApi";

export const invoicesQueryOptions = () =>
  queryOptions({
    queryKey: ["invoices"],
    queryFn: () => fetchInvoices(),
  });

export const overviewQueryOptions = () =>
  queryOptions({
    queryKey: ["overview"],
    queryFn: () => fetchOverview(),
  });
