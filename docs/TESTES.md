# Plano de testes do ArrendaJá

Executar estes testes no ambiente Replit ligado à branch `main`, sem publicar para produção.

## Verificações iniciais
- [ ] `npm install` termina sem erros.
- [ ] `npm start` inicia sem encerrar.
- [ ] `GET /api/health` devolve `ok: true`.
- [ ] A página inicial abre no navegador.
- [ ] Registo de interessado funciona.
- [ ] Registo de proprietário exige confirmação de propriedade direta.
- [ ] Login válido funciona e credenciais inválidas são rejeitadas.
- [ ] Proprietário consegue submeter anúncio para revisão.
- [ ] Interessado não consegue publicar anúncio.
- [ ] Pesquisa e detalhe de imóveis publicados funcionam.
- [ ] Denúncia e pedido de contacto são registados.
- [ ] Rotas administrativas recusam utilizadores sem perfil admin.
- [ ] Pedido de verificação só pode ser feito pelo proprietário do imóvel.
- [ ] Upload rejeita ficheiros não-imagem e ficheiros acima do limite.

## Regras de aceitação
- Apenas o proprietário direto pode anunciar o seu imóvel.
- Plano Destaque: 3.000 Kz (valor inicial configurável).
- Verificação Presencial: 6.500 Kz (valor inicial configurável).
- Nenhum pagamento deve ser marcado como confirmado sem validação real.
- Não publicar a aplicação nem expor dados reais durante os testes.

Registar cada falha com passos para reproduzir, resultado esperado e resultado observado. Corrigir e repetir o teste antes de avançar para produção.
