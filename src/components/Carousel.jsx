import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'


export default function Carousel({ items = [] }){
const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: false })


const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])


return (
<div className="card p-4 md:p-6">
<div className="overflow-hidden rounded-xl" ref={emblaRef}>
<div className="flex">
{items.map((it) => (
<div className="min-w-0 flex-[0_0_100%] p-2 md:p-4" key={it.id}>
<article className="grid md:grid-cols-2 gap-4 md:gap-6 items-center 
                    hover:scale-[1.01] transition-transform duration-300">
<div className="aspect-video w-full overflow-hidden rounded-xl bg-black/5 dark:bg-white/10">
{it.type === 'video' ? (
<video src={it.src} className="w-full h-full object-cover" controls playsInline/>
) : (
<img src={it.src} alt={it.title} className="w-full h-full object-cover" />
)}
</div>
<div>
<h3 className="text-2xl font-semibold mb-2">{it.title}</h3>
<p className="subtle mb-3">{it.description}</p>
<div className="flex flex-wrap gap-2 mb-4">
{it.tags?.map(t => (
<span key={t} className="text-xs px-2 py-1 rounded-full bg-black/5 dark:bg-white/10">{t}</span>
))}
</div>
{it.link && (
<a className="btn-primary" href={it.link} target="_blank" rel="noreferrer">Abrir projeto</a>
)}
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