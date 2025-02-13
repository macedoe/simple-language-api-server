/* eslint-disable @typescript-eslint/no-floating-promises */
import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import * as functions from 'firebase-functions';
import { AppModule } from './app.module';

const isFirebase = !!process.env.FUNCTION_NAME || !!process.env.FUNCTIONS_EMULATOR;

async function createNestServer(expressApp?: express.Express) {
    const app = await NestFactory.create(AppModule);
    app.enableCors();

    if (expressApp) {
        await app.init(); // Initialize before using the adapter
        expressApp.use(app.getHttpAdapter().getInstance());
    } else {
        const port = process.env.PORT || 3000;
        await app.listen(port);
        console.log(`🚀 Server running on http://localhost:${port}`);
    }
}

// Firebase Functions mode
const expressApp = express();
createNestServer(expressApp).then(() => console.log('✅ NestJS running in Firebase Functions'));
export const api = functions.https.onRequest(expressApp);

// Standalone mode for `nest start`
if (!isFirebase) {
    createNestServer();
}
