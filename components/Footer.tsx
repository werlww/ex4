import { Mail, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { Facebook, Vk, Youtube } from "./Socials";
import { footerText, nav } from "@/lib/data";

export function Footer() {
  return (
    <footer id="contacts" className="bg-soft">
      <div className="wrap grid h-[342px] grid-cols-[611px_291px_1fr] pl-[2.5px] pt-[72px]">
        <div>
          <Logo />
          <p className="mt-[36px] w-[299px] text-[15px] leading-[19.1px]">{footerText}</p>
        </div>
        <div>
          <h3 className="-mt-[1.2px] text-[21px] leading-[24px]">Меню</h3>
          <ul className="mt-[32px] text-[14.4px] leading-[27px]">
            {nav.map((n) => (<li key={n.label}><a href={n.href} className="hover:text-brand">{n.label}</a></li>))}
          </ul>
        </div>
        <div>
          <h3 className="-mt-[1.2px] text-[21px] leading-[24px]">Связаться с нами</h3>
          <div className="mt-[32px] space-y-[10px] text-[15px] leading-[21px]">
            <a href="tel:+74957305501" className="flex items-center gap-[10px]"><Phone size={17} className="text-brand" strokeWidth={1.6} />+7 (495) 730-55-01</a>
            <a href="mailto:info@interpan.ru" className="flex items-center gap-[10px]"><Mail size={17} className="text-brand" strokeWidth={1.6} />info@interpan.ru</a>
          </div>
          <p className="mt-[30px] text-[14.4px]">Мы в социальных сетях:</p>
          <div className="mt-[12px] flex gap-[10px]"><Facebook size={25} /><Vk size={25} /><Youtube size={25} /></div>
        </div>
      </div>
      <div className="wrap-wide border-t border-line">
        <p className="h-[79px] pl-[41px] pt-[26px] text-[14.4px] text-[#9aa3a8]">Создание сайта: Название студии, 2021 г.</p>
      </div>
    </footer>
  );
}
