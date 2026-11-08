import { SectionTitle } from "@/components/SectionTitle";
import { ArrowButtons } from "@/components/ArrowButtons";
import { ImageSlot } from "@/components/ImageSlot";
import { clients } from "@/lib/data";
import { images } from "@/lib/images";

export function Clients() {
  return (
    <section className="wrap pt-[120px]">
      <div className="flex items-center justify-between pl-[2.5px]">
        <SectionTitle>Нам доверяют</SectionTitle>
        <ArrowButtons />
      </div>
      <div className="mt-[51px] grid grid-cols-5 border-l border-t border-line pl-0">
        {clients.map((c, i) => (
          <div key={c} className="flex h-[148px] items-center justify-center border-b border-r border-line">
            {/* ↓ место под логотип клиента */}
            <ImageSlot
              src={images.clients[i]}
              fit="contain"
              className="h-[75px] w-[175px]"
              fallback={<div className="flex h-full items-center justify-center text-[16px] font-bold text-muted">{c}</div>}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
