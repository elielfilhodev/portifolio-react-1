# Configuração do EmailJS

## Passo 1: Criar Conta no EmailJS

1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crie uma conta gratuita
3. Confirme seu email

## Passo 2: Configurar Serviço de Email

1. No dashboard, vá para **Email Services**
2. Clique em **Add New Service**
3. Escolha seu provedor de email (Gmail, Outlook, etc.)
4. Configure a conexão
5. **Copie o SERVICE_ID** (exemplo: `service_abc123`)

## Passo 3: Criar Template de Email

1. Vá para **Email Templates**
2. Clique em **Create New Template**
3. Configure o template com as variáveis:
   ```
   Nome: {{name}}
   Email: {{email}}
   Assunto: {{subject}}
   Mensagem: {{message}}
   ```
4. **Copie o TEMPLATE_ID** (exemplo: `template_xyz789`)

## Passo 4: Obter Chave Pública

1. Vá para **Account** > **General**
2. **Copie a PUBLIC_KEY** (exemplo: `user_def456`)

## Passo 5: Configurar no Código

Abra o arquivo `src/components/Contact.js` e substitua as seguintes linhas:

```javascript
// Linha 20-22
const EMAILJS_SERVICE_ID = 'SEU_SERVICE_ID_AQUI';
const EMAILJS_TEMPLATE_ID = 'SEU_TEMPLATE_ID_AQUI';
const EMAILJS_PUBLIC_KEY = 'SUA_PUBLIC_KEY_AQUI';
```

## Exemplo de Configuração:

```javascript
const EMAILJS_SERVICE_ID = 'service_abc123';
const EMAILJS_TEMPLATE_ID = 'template_xyz789';
const EMAILJS_PUBLIC_KEY = 'user_def456';
```

## Testando o Formulário

1. Após configurar os IDs, salve o arquivo
2. Acesse o site em `http://localhost:3000`
3. Vá para a seção "Contato"
4. Preencha e envie o formulário
5. Verifique se o email foi enviado

## Limite Gratuito

- **200 emails/mês** no plano gratuito
- Perfeito para portfólios pessoais

## Solução de Problemas

- **Erro 400**: Verifique se os IDs estão corretos
- **Erro 401**: Verifique se a PUBLIC_KEY está correta
- **Email não chega**: Verifique a pasta de spam
- **Template não funciona**: Verifique se as variáveis estão corretas no template
