import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/SectionTitle";
import { ImageSlot } from "@/components/ImageSlot";
import { images } from "@/lib/images";
import { schemePoints } from "@/lib/data";

export function Solutions() {
  return (
    <section className="wrap relative mt-[100px] h-[625px]">
      <div className="w-[499px]">
        <SectionTitle className="leading-[40px]">Интерпан — комплексные решения для вашего бизнеса</SectionTitle>
        <div className="mt-[31px] flex gap-[19px] pl-[2.5px]">
          <Button size="tab" className="w-[131px]">На схеме</Button>
          <Button size="tab" variant="outline" className="w-[131px]">Списком</Button>
        </div>
      </div>
      {/* схема 811×616 */}
      <div className="absolute left-[358px] top-[8.7px] h-[616px] w-[811px]">
        {/* ↓ место под схему */}
        <ImageSlot src={images.scheme} fit="contain" className="absolute inset-0" fallback={<div className="h-full w-full border border-dashed border-line" />} />
        {schemePoints.map((p, i) => (
          <button
            key={i}
            aria-label={`Точка ${i + 1}`}
            style={{ left: p.x - 16, top: p.y - 16 }}
            className="absolute flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white hover:bg-brand-dark"
          >
            <Plus size={25} strokeWidth={1.4} />
          </button>
        ))}
      </div>
    </section>
  );
}
