"use client";

import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/SectionTitle";
import { ArrowButtons } from "@/components/ArrowButtons";
import { ImageSlot } from "@/components/ImageSlot";
import { caseProducts } from "@/lib/data";
import { images } from "@/lib/images";

/** Заглушка кейса: серый блок с диагоналями и иконкой, как в макете */
function CasePlaceholder() {
  return (
    <div className="relative h-full w-full bg-[#f1f5f8]">
      <svg className="absolute inset-[12px] h-[calc(100%-25px)] w-[calc(100%-25px)] text-[#d3dae0]" preserveAspectRatio="none" viewBox="0 0 100 100">
        <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
      </svg>
      <ImageIcon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#c4ccd2]" size={67} strokeWidth={1.3} />
    </div>
  );
}

export function Cases() {
  const [tab, setTab] = useState<"products" | "clients">("products");

  return (
    <section id="cases" className="wrap pt-[90px]">
      <div className="flex items-center justify-between pl-[2.5px]">
        <SectionTitle>Кейсы Интерпан</SectionTitle>
        <ArrowButtons />
      </div>
      <div className="mt-[29px] grid grid-cols-[610px_590px]">
        <div className="pl-[2.5px]">
          <div className="flex gap-[19px]">
            <Button size="tab" variant={tab === "products" ? "default" : "outline"} onClick={() => setTab("products")}>Продукция</Button>
            <Button size="tab" variant={tab === "clients" ? "default" : "outline"} onClick={() => setTab("clients")}>Клиенты</Button>
          </div>
          <ul className="mt-[49px] text-[19px] leading-[38.9px] tracking-[0.01em]">
            {tab === "products" && caseProducts.map((p) => (<li key={p}><a href="#" className="hover:text-brand">{p}</a></li>))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-[21px]">
          {images.cases.map((src, i) => (
            /* ↓ место под картинку кейса 284×278 */
            <ImageSlot key={i} src={src} className="h-[278px] w-[285px] border border-[#dfe5ea]" fallback={<CasePlaceholder />} />
          ))}
        </div>
      </div>
    </section>
  );
}
