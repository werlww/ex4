import { SlotIcon } from "@/components/SlotIcon";
import { SectionTitle } from "@/components/SectionTitle";
import { aboutText, services } from "@/lib/data";
import { images } from "@/lib/images";

export function About() {
  return (
    <section className="mt-[92px] bg-soft py-[70px]">
      <div className="wrap grid grid-cols-[409px_1fr]">
        <div className="-mt-[10px] pl-[2.5px]">
          <SectionTitle>О компании</SectionTitle>
          <div className="mt-[30px] w-[299px] space-y-[19px] text-[15px] leading-[19px]">
            {aboutText.map((t) => (<p key={t}>{t}</p>))}
          </div>
        </div>
        <div className="grid grid-cols-4 border-l border-t border-line">
          {services.map((s, i) => (
            <div key={s.text} className="flex h-[210px] flex-col justify-between border-b border-r border-line px-5 pb-[17px] pt-[21px]">
              {/* ↓ место под иконку 47×47 */}
              <SlotIcon src={images.services[i]} name={s.icon} size={47} className="h-[47px] w-[47px] text-brand" />
              <p className="text-[15.6px] font-medium leading-[19.3px]">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
