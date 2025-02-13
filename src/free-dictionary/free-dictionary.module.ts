import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import freeDictionaryConfig from './config/free-dictionary.config';
import { DictionaryController } from './controllers/dictionary.controller';
import { DictionaryApiService } from './services/dictionary-api.service';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [freeDictionaryConfig]
        })
    ],
    controllers: [DictionaryController],
    providers: [DictionaryApiService]
})
export class FreeDictionaryModule {}
