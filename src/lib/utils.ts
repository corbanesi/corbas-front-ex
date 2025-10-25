import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function loaderDelayFn<T>(
  fn: (...args: Array<any>) => Promise<T> | T,
) {
  const delay = Number(sessionStorage.getItem("loaderDelay") ?? 0);
  const delayPromise = new Promise((r) => setTimeout(r, delay));

  await delayPromise;
  const res = await fn();

  return res;
}
