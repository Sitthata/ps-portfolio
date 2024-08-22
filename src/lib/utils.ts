import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
const { abs, min, max, round } = Math;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}