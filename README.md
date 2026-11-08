# Интерпан — Next.js + Tailwind + shadcn/ui

    npm install
    npm run dev   # http://localhost:3000

## Куда класть картинки
Файлы — в `public/images/`, пути — в **`lib/images.ts`** (там подписаны все места и размеры).
Пока путь пустой, на месте картинки показывается заглушка. В компонентах место под картинку помечено комментарием `↓ место под …` и компонентом `<ImageSlot />`.

## Структура
- `app/` — layout, page
- `components/` — Header, Footer, Logo, ImageSlot, SlotIcon, NewsCard, ArrowButtons…
- `components/sections/` — секции страницы по порядку макета
- `components/ui/` — button, card, input (shadcn)
- `lib/data.ts` — тексты, `lib/images.ts` — картинки
