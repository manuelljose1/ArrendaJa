# Configuração do ArrendaJá

## Requisitos
- Node.js 20 ou superior
- npm

## Preparar ambiente local ou de testes
1. Clonar o repositório e entrar na pasta do projeto.
2. Instalar dependências com `npm install`.
3. Copiar `.env.example` para `.env`.
4. Definir `JWT_SECRET` com uma chave aleatória forte (mínimo recomendado: 32 caracteres).
5. Definir `ADMIN_EMAIL` e `ADMIN_PASSWORD` com credenciais únicas e fortes.
6. Iniciar com `npm start`.
7. Abrir `http://localhost:3000` e confirmar `http://localhost:3000/api/health`.

A aplicação cria as pastas `data/` e `uploads/` ao iniciar. A base SQLite fica em `data/arrendaja.sqlite`.

## Preços
Os valores iniciais são 3.000 Kz para Destaque e 6.500 Kz para Verificação Presencial. A administração poderá alterá-los pelas configurações quando o painel estiver concluído.

## Mobile
A aplicação Expo está em `mobile/`. Executar `cd mobile`, `npm install` e `npm start`. Antes de builds de produção, configurar identificadores Android/iOS, URL da API, ícones, permissões, política de privacidade e credenciais das lojas.

## Importante
Este repositório é um MVP em desenvolvimento. Não usar em produção antes de testes, revisão de segurança, backups, HTTPS, armazenamento seguro de uploads e configuração de pagamentos reais.
