import { ImageSlot } from "./ImageSlot";
import { images } from "@/lib/images";

/** Логотип 211×61. Положите файл и впишите путь в lib/images.ts (logo). */
export function Logo() {
  return (
    <a href="#" className="block h-[61px] w-[211px]">
      <ImageSlot
        src={images.logo}
        alt="Интерпан"
        fit="contain"
        className="h-full w-full"
        fallback={
          <div className="flex h-full items-center gap-[7.5px]">
            <span className="h-[61px] w-[61px] shrink-0 rounded-full bg-ink" />
            <span className="leading-none">
              <span className="block text-[27px] font-bold tracking-[-0.01em]">
                <span className="text-[#c8281e]">ИНТЕР</span>ПАН
              </span>
              <span className="mt-[2.5px] block text-[8.1px] leading-[10px] text-ink/80">
                завод по производству<br />огнестойких панелей
              </span>
            </span>
          </div>
        }
      />
    </a>
  );
}
