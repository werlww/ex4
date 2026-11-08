import { SlotIcon } from "@/components/SlotIcon";
import { advantages } from "@/lib/data";
import { images } from "@/lib/images";

export function Advantages() {
  return (
    <section className="wrap mt-[56px] grid grid-cols-[312px_311px_311px_1fr]">
      {advantages.map((a, i) => (
        <div key={a.title} className="flex items-center gap-[27px] pl-[6.2px]">
          {/* ↓ место под иконку 40×40 */}
          <SlotIcon src={images.advantages[i]} name={a.icon} size={40} className="h-10 w-10 shrink-0" />
          <div className={i === 3 ? "w-[192px]" : "w-[200px]"}>
            <h3 className="text-[14px] font-semibold leading-[17px]">{a.title}</h3>
            <p className="text-[12px] leading-[14.4px] text-muted">{a.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
