/** @type {import('tailwindcss').Config} */
export default {
content: [
'./index.html',
'./src/**/*.{js,jsx}',
],
darkMode: 'class',
theme: {
extend: {
container: { center: true, padding: '1rem' },
colors: {
brand: {
DEFAULT: '#1f6feb',
600: '#1a5ec7',
700: '#154da3',
},
},
},
},
plugins: [],
}