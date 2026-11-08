import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ArrowButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-5 ${className}`}>
      <Button size="icon" aria-label="Назад"><ArrowLeft size={22} strokeWidth={1.6} /></Button>
      <Button size="icon" aria-label="Вперёд"><ArrowRight size={22} strokeWidth={1.6} /></Button>
    </div>
  );
}
