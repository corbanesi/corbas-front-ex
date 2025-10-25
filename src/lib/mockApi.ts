import z from "zod";
import { loaderDelayFn } from "./utils";

export const invoiceSchema = z.object({
  id: z.number(),
  header: z.string(),
  type: z.string(),
  status: z.string(),
  target: z.string(),
  limit: z.string(),
  reviewer: z.string(),
});

export const overviewSchema = z.object({
  id: z.number(),
  title: z.string(),
  value: z.string(),
  growth: z.object({
    status: z.string(),
    value: z.string(),
  }),
  description: z.string(),
  more: z.string(),
});

let invoicesPromise: Promise<void> | undefined;
let invoices: z.infer<typeof invoiceSchema>[];

let overviewPromise: Promise<void> | undefined;
let overview: z.infer<typeof overviewSchema>[];

export async function fetchInvoices() {
  return loaderDelayFn(() => ensureInvoices().then(() => invoices));
}

export async function fetchOverview() {
  return loaderDelayFn(() => ensureOverview().then(() => overview));
}

const ensureInvoices = async () => {
  if (!invoicesPromise) {
    invoicesPromise = Promise.resolve().then(async () => {
      const response = await fetch("http://localhost:3001/invoices");
      invoices = (await response.json()) as z.infer<typeof invoiceSchema>[];
    });
  }

  await invoicesPromise;
};

const ensureOverview = async () => {
  if (!overviewPromise) {
    overviewPromise = Promise.resolve().then(async () => {
      const response = await fetch("http://localhost:3001/overview");
      overview = (await response.json()) as z.infer<typeof overviewSchema>[];
    });
  }

  await overviewPromise;
};
