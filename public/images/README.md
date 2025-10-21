# 📸 Guia de Imagens - Portfólio

## 📁 Estrutura de Pastas

```
public/images/
├── profile/          # Sua foto de perfil
├── projects/         # Imagens dos seus projetos
└── backgrounds/      # Imagens de fundo (opcional)
```

## 🖼️ Onde Colocar Cada Imagem

### 👤 **Profile** (`public/images/profile/`)
- **Sua foto de perfil principal**
- Nome sugerido: `profile.jpg` ou `profile.png`
- Tamanho recomendado: 400x400px (quadrado)
- Formato: JPG ou PNG
- Qualidade: Alta resolução

### 💼 **Projects** (`public/images/projects/`)
- **Imagens dos seus projetos**
- Nomes sugeridos: `projeto1.jpg`, `ecommerce.jpg`, `chat-app.jpg`, etc.
- Tamanho recomendado: 600x400px (retângulo)
- Formato: JPG ou PNG
- Qualidade: Boa resolução para web

### 🎨 **Backgrounds** (`public/images/backgrounds/`)
- **Imagens de fundo opcionais**
- Nomes sugeridos: `hero-bg.jpg`, `about-bg.jpg`, etc.
- Tamanho recomendado: 1920x1080px
- Formato: JPG (para economizar espaço)
- Qualidade: Boa para web

## 📝 Como Usar

### 1. **Foto de Perfil**
```jsx
// No componente Hero.js, substitua o placeholder por:
<img src="/images/profile/profile.jpg" alt="Eliel Filho" />
```

### 2. **Imagens de Projetos**
```jsx
// No componente Projects.js, substitua por:
<img src="/images/projects/projeto1.jpg" alt="Nome do Projeto" />
```

### 3. **Imagens de Fundo**
```css
/* No CSS, use: */
background-image: url('/images/backgrounds/hero-bg.jpg');
```

## 🎯 **Dicas Importantes**

1. **Otimize as imagens** antes de usar:
   - Use ferramentas como TinyPNG ou ImageOptim
   - Mantenha o tamanho dos arquivos pequeno (< 500KB)

2. **Formatos recomendados**:
   - **JPG**: Para fotos e imagens complexas
   - **PNG**: Para logos e imagens com transparência
   - **WebP**: Para melhor performance (opcional)

3. **Nomes de arquivos**:
   - Use nomes descritivos
   - Evite espaços e caracteres especiais
   - Use hífens ou underscores

## 📱 **Responsividade**

As imagens serão automaticamente responsivas graças ao CSS. Certifique-se de que:
- Sua foto de perfil seja quadrada
- As imagens dos projetos tenham proporção 3:2
- As imagens de fundo sejam grandes o suficiente para telas grandes

## 🚀 **Exemplo de Uso**

```jsx
// Exemplo de como usar no componente
<img 
  src="/images/profile/profile.jpg" 
  alt="Eliel Filho - Desenvolvedor Full Stack"
  className="profile-image"
/>
```
