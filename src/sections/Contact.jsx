// src/sections/Contact.jsx
import Section from "../components/Section";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [status, setStatus] = useState(null);

  const onSubmit = async (data) => {
    setStatus(null);

    // honeypot contra bots
    if (data.website) return;

    const pub = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const svc = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const tpl = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    // validação defensiva das ENV
    if (!pub || !svc || !tpl) {
      console.error("EmailJS ENV missing", { pub, svc, tpl });
      setStatus({ ok: false, msg: "Configuração ausente. Revise .env.local e reinicie o servidor." });
      return;
    }

    try {
      await emailjs.send(
        svc,
        tpl,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          reply_to: data.email,
        },
        pub // se você inicializar no main.jsx, pode remover este 4º parâmetro
      );

      setStatus({ ok: true, msg: "Mensagem enviada. Retorno em breve." });
      reset();
    } catch (err) {
      console.error("EmailJS error", err);
      setStatus({ ok: false, msg: "Falha ao enviar. Tente novamente em instantes." });
    }
  };

  return (
    <Section id="contato" title="Contato">
      <form onSubmit={handleSubmit(onSubmit)} className="card p-6 max-w-2xl mx-auto">
        <div className="grid gap-4">
          <label className="grid gap-1">
            <span className="text-sm font-medium">Nome</span>
            <input
              className="rounded-xl border border-black/10 dark:border-white/10 bg-transparent px-3 py-2"
              {...register("name", { required: "Informe seu nome" })}
              placeholder="Seu nome"
            />
            {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
          </label>

          <label className="grid gap-1">
            <span className="text-sm font-medium">Email</span>
            <input
              type="email"
              className="rounded-xl border border-black/10 dark:border-white/10 bg-transparent px-3 py-2"
              {...register("email", {
                required: "Informe seu email",
                pattern: { value: /\S+@\S+\.\S+/, message: "Email inválido" },
              })}
              placeholder="voce@exemplo.com"
            />
            {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
          </label>

          <label className="grid gap-1">
            <span className="text-sm font-medium">Mensagem</span>
            <textarea
              rows={5}
              className="rounded-xl border border-black/10 dark:border-white/10 bg-transparent px-3 py-2"
              {...register("message", { required: "Escreva sua mensagem" })}
              placeholder="Como posso ajudar?"
            />
            {errors.message && <span className="text-red-500 text-xs">{errors.message.message}</span>}
          </label>

          {/* honeypot */}
          <input type="text" tabIndex={-1} autoComplete="off" {...register("website")} className="hidden" />

          <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center">
            {isSubmitting ? "Enviando..." : "Enviar mensagem"}
          </button>

          {status && (
            <div className={`text-sm ${status.ok ? "text-green-500" : "text-red-500"}`}>{status.msg}</div>
          )}
        </div>
      </form>
    </Section>
  );
}
