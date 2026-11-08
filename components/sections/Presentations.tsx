import { FileText } from "lucide-react";
import { ImageSlot } from "@/components/ImageSlot";
import { images } from "@/lib/images";
import { presentations } from "@/lib/data";

export function Presentations() {
  return (
    <section className="flex h-[157px]">
      <div className="flex w-1/2 items-center">
        <h2 className="ml-[calc(50%-599px)] w-[524px] text-[34px] font-medium leading-[39px]">Посмотрите презентации о наших продуктах</h2>
      </div>
      <div className="flex w-1/2 items-center gap-[97px] bg-brand pl-[82px] text-white">
        {presentations.map((p, i) => (
          <a key={p} href="#" className="flex w-[180px] items-center gap-[20px]">
            {/* ↓ место под иконку PPT 50×50 */}
            <ImageSlot src={images.presentations[i]} fit="contain" className="h-[50px] w-[50px] shrink-0" fallback={<FileText size={50} strokeWidth={1.2} />} />
            <span className="text-[19px] leading-[23.1px]">{p}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
