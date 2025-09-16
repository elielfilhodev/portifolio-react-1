import { useForm } from 'react-hook-form'


export default function ContactForm(){
const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm()


const onSubmit = async (data) => {
// POC: envia via mailto ou integra com backend/serviço
const body = encodeURIComponent(`${data.nome} (${data.email})\n\n${data.mensagem}`)
window.location.href = `mailto:seuemail@exemplo.com?subject=Contato%20do%20Portf%C3%B3lio&body=${body}`
reset()
}


return (
<form onSubmit={handleSubmit(onSubmit)} className="card p-6 grid gap-4">
<div className="grid md:grid-cols-2 gap-4">
<div>
<label className="block text-sm mb-1">Nome</label>
<input
className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-brand"
placeholder="Seu nome"
{...register('nome', { required: 'Informe seu nome' })}
/>
{errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>}
</div>
<div>
<label className="block text-sm mb-1">Email</label>
<input
type="email"
className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-brand"
placeholder="voce@exemplo.com"
{...register('email', { required: 'Informe seu email' })}
/>
{errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
</div>
</div>
<div>
<label className="block text-sm mb-1">Mensagem</label>
<textarea
rows={5}
className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-brand"
placeholder="Como posso ajudar?"
{...register('mensagem', { required: 'Escreva uma mensagem' })}
/>
{errors.mensagem && <p className="text-red-500 text-sm mt-1">{errors.mensagem.message}</p>}
</div>
<div className="flex justify-end">
<button disabled={isSubmitting} className="btn-primary">
{isSubmitting ? 'Enviando...' : 'Enviar'}
</button>
</div>
</form>
)
}