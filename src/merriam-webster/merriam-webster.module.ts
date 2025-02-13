import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import merriamWebsterConfig from './config/merriam-webster.config';
import { MerriamController } from './controllers/merriam.controller';
import { MerriamApiService } from './services/merriam-api.service';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [merriamWebsterConfig]
        })
    ],
    controllers: [MerriamController],
    providers: [MerriamApiService]
})
export class MerriamWebsterModule {}
