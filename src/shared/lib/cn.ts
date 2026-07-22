import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina classes condicionalmente (clsx) e resolve conflitos do Tailwind (twMerge).
 *
 * Exemplo:
 *   cn("p-2 text-red-500", isActive && "p-4", className)
 *   // → "p-4 text-red-500 <className>"
 *
 * O `twMerge` garante que a última classe conflitante vence
 * (ex: `p-2 p-4` → `p-4`), evitando que classes do consumidor
 * sejam "engolidas" pelas classes base do componente.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}