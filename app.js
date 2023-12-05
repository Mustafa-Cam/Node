const Koa = require('koa');
const app = new Koa();

// Middleware
app.use(async (ctx) => {
  ctx.body = 'Merhaba, Koa.js ile web sunucusuna hoş geldiniz!';
});

// Port belirtme ve sunucuyu başlatma
const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});
