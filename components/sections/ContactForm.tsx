"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ContactForm() {
  return (
    <section className="mt-[101px] h-[331px] bg-ink text-white">
      <div className="wrap grid grid-cols-[611px_590px]">
        <div className="pl-[2.5px] pt-[80px]">
          <h2 className="w-[512px] text-[31px] font-medium leading-[41px] tracking-[0.01em] text-brand">У вас есть проект для нас или необходима консультация?</h2>
          <p className="mt-[31px] w-[499px] text-[20.6px] leading-[26px] tracking-[0.02em]">Наш специалист свяжется с вами и ответит на все вопросы.</p>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); alert("Заявка отправлена"); }} className="relative">
          <Input name="name" placeholder="Ваше имя" required className="absolute left-0 top-[124px] w-[250px]" />
          <Input name="phone" type="tel" placeholder="Телефон" required className="absolute right-0 top-[124px] w-[250px]" />
          <Button type="submit" className="absolute left-[371px] top-[206px]">Отправить</Button>
        </form>
      </div>
    </section>
  );
}
