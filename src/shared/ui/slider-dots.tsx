import { cn } from "../lib/cn";

type SliderDotsProps = {
  total: number;
  active: number;
  onSelect?: (index: number) => void;
  className?: string;
};

export function SliderDots({
  total,
  active,
  onSelect,
  className,
}: SliderDotsProps) {
  if (total <= 0) return null;

  return (
    <div
      role="tablist"
      aria-label="Navegação do slider"
      className={cn("flex items-center gap-2", className)}
    >
      {Array.from({ length: total }).map((_, index) => {
        const isActive = index === active;
        return (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-label={`Ir para slide ${index + 1}`}
            onClick={() => onSelect?.(index)}
            className={cn(
              "h-4 rounded-full transition  border-gray-300 border-2",
              isActive
                ? "w-4 bg-warning-500"
                : "w-4 bg-default-300 hover:bg-default-400"
            )}
          />
        );
      })}
    </div>
  );
}