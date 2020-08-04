import Koa from 'koa';
import Router from 'koa-router';

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = '홈';
});

app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(4000, () => {
  console.log('heurm server is listening to port 4000');
})
