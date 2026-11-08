import { Card } from "@/components/ui/card";
import { ImageSlot } from "@/components/ImageSlot";
import { cn } from "@/lib/utils";

type Props = { title: string; date: string; text?: string; image?: string; large?: boolean };

export function NewsCard({ title, date, text, image, large }: Props) {
  return (
    <Card className={cn("overflow-hidden", large ? "row-span-2" : "h-[268px]")}>
      {/* ↓ место под картинку новости */}
      <ImageSlot src={image} className={cn("w-full", large ? "h-[399px]" : "h-[160px]")} fallback={<div className="h-full w-full bg-[#e3e7ea]" />} />
      {large ? (
        <div className="px-[30px] pt-[24px]">
          <h3 className="text-[17px] leading-[22px]">{title}</h3>
          <div className="mt-[12px] flex items-end justify-between">
            <p className="w-[374px] text-[15px] leading-[21px] text-muted">{text}</p>
            <time className="text-[13.1px] text-[#9aa3a8]">{date}</time>
          </div>
        </div>
      ) : (
        <div className="px-[16px] pt-[17px]">
          <h3 className="text-[16.8px] leading-[20.6px]">{title}</h3>
          <time className="mt-[21px] block text-[12px] text-[#9aa3a8]">{date}</time>
        </div>
      )}
    </Card>
  );
}
