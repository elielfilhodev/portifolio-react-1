import Section from '../components/Section'
import ContactForm from '../components/ContactForm'


export default function Contact(){
return (
<Section id="contato" title="Contato">
<p className="subtle mb-6">Aberto para propostas CLT e PJ. Vamos alinhar escopo, prazo e valor.</p>
<ContactForm />
</Section>
)
}