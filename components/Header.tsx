import { Mail, Phone, Search } from "lucide-react";
import { Logo } from "./Logo";
import { Facebook, Vk, Youtube } from "./Socials";
import { nav } from "@/lib/data";

export function Header() {
  return (
    <header>
      {/* верхняя полоса */}
      <div className="wrap-wide flex h-[47px] items-center border-b border-line text-[14px]">
        <div className="ml-[482px] flex items-center gap-[42px]">
          <a href="mailto:info@interpan.ru" className="flex items-center gap-[10px]"><Mail size={17} className="text-brand" strokeWidth={1.6} />info@interpan.ru</a>
          <a href="tel:+74957305501" className="flex items-center gap-[10px]"><Phone size={17} className="text-brand" strokeWidth={1.6} />+7 (495) 730-55-01</a>
          <a href="#contacts" className="uppercase text-brand">Оставить заявку</a>
        </div>
        <div className="ml-auto mr-[50px] flex items-center gap-[17px]">
          <Facebook size={19} /><Vk size={19} /><Youtube size={19} />
        </div>
      </div>
      {/* логотип и меню */}
      <div className="wrap flex h-[132px] items-center justify-between pl-[2.5px]">
        <Logo />
        <div className="flex items-center">
          <nav className="flex gap-[50px] text-[14px] uppercase">
            {nav.map((n) => (<a key={n.label} href={n.href} className="hover:text-brand">{n.label}</a>))}
          </nav>
          <span className="mx-[21px] h-[32px] w-px bg-ink" />
          <Search size={17} strokeWidth={1.8} className="mr-[7.5px]" />
        </div>
      </div>
    </header>
  );
}
