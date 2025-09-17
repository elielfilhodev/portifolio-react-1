import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'


export default function Carousel({ items = [] }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: false })


    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])


    return (
        <div className="card p-4 md:p-6">
            <div className="overflow-hidden rounded-xl" ref={emblaRef}>
                <div className="flex">
                    {items.map((it) => (
                        <div className="min-w-0 flex-[0_0_100%] p-2 md:p-4" key={it.id}>
                            <article
                                className="grid gap-3 md:gap-6 items-center md:grid-cols-2
             hover:scale-[1.01] transition-transform duration-300"
                            >
                                <div className="aspect-video w-full overflow-hidden rounded-lg bg-black/5 dark:bg-white/10" >
                                    {/* vídeo/imagem aqui */}
                                </div>
                                <div className="px-1">
                                    <h3 className="text-xl md:text-2xl font-semibold mb-1 md:mb-2">{it.title}</h3>
                                    <p className="subtle text-sm md:text-base mb-2 md:mb-3">{it.description}</p>
                                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3">
                                        {/* tags */}
                                    </div>
                                    {/* botão */}
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
    )
}