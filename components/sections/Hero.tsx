import { ArrowButtons } from "@/components/ArrowButtons";
import { ImageSlot } from "@/components/ImageSlot";
import { images } from "@/lib/images";
import { heroSlides } from "@/lib/data";

/** Карточка-акция справа от баннера (281×210) */
function Promo({
  tag, title, image, tone,
}: { tag: string; title: string; image?: string; tone: "orange" | "dark" }) {
  const dark = tone === "dark";
  return (
    <div className={`relative h-[210px] w-[281px] overflow-hidden ${dark ? "bg-[#2a393f]" : "bg-brand"}`}>
      <span className={`absolute -right-[70px] -top-[50px] h-[237px] w-[237px] rounded-full ${dark ? "bg-[#1b2a30]" : "bg-[#f06a3f]"}`} />
      {/* ↓ место под 3D-картинку */}
      <ImageSlot src={image} fit="contain" className="absolute right-[22px] top-[15px] h-[125px] w-[112px]" fallback={<div />} />
      <span className={`absolute left-[21px] top-[129px] rounded-full px-[7.5px] py-[2.5px] text-[6.9px] font-bold uppercase ${dark ? "bg-brand text-white" : "bg-white text-brand"}`}>{tag}</span>
      <p className="absolute left-[21px] right-[21px] top-[152px] text-[16.8px] leading-[19.3px] text-white">{title}</p>
    </div>
  );
}

export function Hero() {
  const slide = heroSlides[0];
  return (
    <section className="wrap flex gap-5">
      {/* слайдер 899×440 */}
      <div className="relative h-[440px] w-[899px] overflow-hidden bg-[#cfd3d6]">
        {/* ↓ место под фото слайда */}
        <ImageSlot src={images.heroSlides[0]} className="absolute inset-0" fallback={<div className="h-full w-full bg-gradient-to-r from-[#dfe2e4] to-[#c9ccce]" />} />
        <div className="absolute left-[56px] top-[201px]">
          <h1 className="w-[374px] text-[35px] font-medium leading-[50px]">{slide.title}</h1>
          <p className="mt-[30px] w-[343px] text-[15.6px] leading-[21.8px]">{slide.text}</p>
        </div>
        <ArrowButtons className="absolute bottom-[54px] right-[55px]" />
      </div>
      {/* две карточки */}
      <div className="flex flex-col gap-5">
        <Promo tone="orange" tag="Спецпредложения" title="Распродажа отбойной доски Интерпан" image={images.promoSale} />
        <Promo tone="dark" tag="Инструменты" title="Калькулятор — расчитать количество панелей для помещения" image={images.promoCalc} />
      </div>
    </section>
  );
}
