import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  /** Путь из lib/images.ts. Пусто — показывается заглушка. */
  src?: string;
  alt?: string;
  className?: string;
  fit?: "cover" | "contain";
  /** Своя заглушка (по умолчанию серый блок с иконкой) */
  fallback?: React.ReactNode;
};

/** Место под картинку. Родителю нужен размер и position: relative (класс задаётся через className). */
export function ImageSlot({ src, alt = "", className, fit = "cover", fallback }: Props) {
  if (!src) {
    return (
      <div className={cn("relative", className)}>
        {fallback ?? (
          <div className="flex h-full w-full items-center justify-center bg-[#f1f5f8] text-[#c4ccd2]">
            <ImageIcon size={45} strokeWidth={1.4} />
          </div>
        )}
      </div>
    );
  }
  return (
    <div className={cn("relative", className)}>
      <Image src={src} alt={alt} fill sizes="(max-width: 1497px) 100vw, 1497px" className={fit === "cover" ? "object-cover" : "object-contain"} />
    </div>
  );
}
