import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/format";
import type { Article } from "@/types/content";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white transition-shadow hover:shadow-xl hover:shadow-black/5">
      <Link href={article.href} className="relative block aspect-[16/10] overflow-hidden bg-ink-100">
        <Image
          src={article.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold tracking-wide text-brand-500 uppercase">{article.category}</p>
        <h3 className="mt-2 leading-snug font-semibold text-ink-900">
          <Link href={article.href} className="hover:text-brand-500">
            {article.title}
          </Link>
        </h3>
        <p className="mt-2 mb-5 line-clamp-3 text-sm leading-relaxed text-ink-500">{article.excerpt}</p>
        <div className="mt-auto flex items-center gap-3 border-t border-ink-100 pt-4">
          <span className="grid size-8 place-items-center rounded-full bg-brand-500 text-[11px] font-bold text-white">MP</span>
          <div className="text-xs">
            <p className="font-medium text-ink-900">{article.author}</p>
            <time dateTime={article.publishedAt} className="text-ink-500">
              {formatDate(article.publishedAt)}
            </time>
          </div>
        </div>
      </div>
    </article>
  );
}
