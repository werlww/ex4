import { SectionTitle } from "@/components/SectionTitle";
import { NewsCard } from "@/components/NewsCard";
import { news } from "@/lib/data";
import { images } from "@/lib/images";

export function News() {
  return (
    <section className="wrap pt-[130px]">
      <SectionTitle className="pl-[2.5px]">Новости компании</SectionTitle>
      <div className="mt-[54px] grid grid-cols-[590px_283px_283px] grid-rows-[268px_268px] gap-[21px] pl-px">
        {news.map((n, i) => (
          <NewsCard key={n.title} {...n} image={images.news[i]} large={i === 0} />
        ))}
      </div>
    </section>
  );
}
