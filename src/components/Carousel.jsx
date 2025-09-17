import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

export default function Carousel({ items = [] }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: false });

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    return (
        <div className="card p-4 md:p-6 overflow-hidden">
            <div className="overflow-hidden rounded-xl" ref={emblaRef}>
                <div className="flex">
                    {items.map((it) => (
                        <div className="min-w-0 flex-[0_0_100%] p-2 md:p-4" key={it.id}>
                            <article className="grid gap-3 md:gap-6 items-center md:grid-cols-2 md:hover:scale-[1.01] transition-transform duration-300">
                                {/* MÍDIA */}
                                <div className="aspect-video w-full overflow-hidden rounded-lg bg-black/5 dark:bg-white/10">
                                    {it.type === "video" && it.src ? (
                                        <video
                                            className="w-full h-full object-cover"
                                            controls
                                            playsInline
                                            preload="metadata"
                                            onError={(e) => {
                                                e.currentTarget.outerHTML =
                                                    '<div class="w-full h-full flex items-center justify-center text-sm text-gray-400">Vídeo indisponível.</div>';
                                            }}
                                        >
                                            <source src={it.src} type="video/mp4" />
                                        </video>
                                    ) : it.src ? (
                                        <img src={it.src} alt={it.title} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center subtle text-sm">
                                            Sem mídia
                                        </div>
                                    )}
                                </div>

                                {/* TEXTO + TAGS + CTAs */}
                                <div className="px-1 min-w-0">
                                    <h3 className="text-xl md:text-2xl font-semibold mb-1 md:mb-2 break-words">{it.title}</h3>
                                    <p className="subtle text-sm md:text-base mb-2 md:mb-3 break-words">{it.description}</p>

                                    {/* Tags */}
                                    {Array.isArray(it.tags) && it.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3">
                                            {it.tags.map((t) => (
                                                <span
                                                    key={t}
                                                    className="text-xs px-2 py-1 rounded-full bg-black/5 dark:bg-white/10"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* CTAs */}
                                    <div className="flex flex-wrap gap-2">
                                        {it.demo && (
                                            <a
                                                className="btn-primary"
                                                href={it.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`Ver demo de ${it.title}`}
                                            >
                                                Ver demo
                                            </a>
                                        )}
                                        {it.code && (
                                            <a
                                                className="btn-ghost"
                                                href={it.code}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`Ver código de ${it.title}`}
                                            >
                                                Ver código
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
                <button onClick={scrollPrev} className="btn-ghost">← Anterior</button>
                <button onClick={scrollNext} className="btn-ghost">Próximo →</button>
            </div>
        </div>
    );
}
