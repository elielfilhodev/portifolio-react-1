import Section from '../components/Section'
import SkillPill from '../components/SkillPill'


const groups = [
{
title: 'Front-end',
items: ['React', 'Tailwind', 'Sass', 'Bootstrap', 'JavaScript'],
},
{
title: 'Back-end',
items: ['Java', 'Spring Boot'],
},
{
title: 'Bancos de dados',
items: ['SQL Server', 'MySQL', 'MongoDB'],
},
{
title: 'Ferramentas',
items: ['Git', 'GitHub', 'VS Code', 'Visual Studio', 'Node.js'],
},
]


export default function Skills(){
return (
<Section id="habilidades" title="Habilidades">
<div className="grid md:grid-cols-2 gap-6">
{groups.map((g) => (
<div key={g.title} className="card p-6">
<h3 className="text-xl font-semibold mb-3">{g.title}</h3>
<div className="flex flex-wrap gap-2">
{g.items.map((i) => (
<SkillPill key={i}>{i}</SkillPill>
))}
</div>
</div>
))}
</div>
</Section>
)
}