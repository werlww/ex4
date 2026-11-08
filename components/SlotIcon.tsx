import * as Icons from "lucide-react";
import type { LucideProps } from "lucide-react";
import { ImageSlot } from "./ImageSlot";

/** Иконка: если в lib/images.ts указан файл — картинка, иначе временная иконка lucide. */
export function SlotIcon({ src, name, size, className }: { src?: string; name: string; size: number; className?: string }) {
  const Fallback = (Icons as unknown as Record<string, React.ComponentType<LucideProps>>)[name] ?? Icons.Box;
  return (
    <ImageSlot
      src={src}
      fit="contain"
      className={className}
      fallback={<Fallback size={size} strokeWidth={1.3} className="h-full w-full" />}
    />
  );
}
