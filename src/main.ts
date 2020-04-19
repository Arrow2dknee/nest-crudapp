import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // to bind a middleware to every registered route at once, then call
    // app.use() method and pass in the middleware as argument

    // to create a global scoped filter, then call
    // app.useGlobalFilters()
    await app.listen(9999);
}
bootstrap();
