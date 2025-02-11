import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import freeDictionaryConfig from './config/free-dictionary.config';
import merriamWebsterConfig from './config/merriam-webster.config';
import { DictionaryController, MerriamController } from './controllers';
import { DictionaryApiService, MerriamApiService } from './services';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [freeDictionaryConfig, merriamWebsterConfig]
        })
    ],
    controllers: [DictionaryController, MerriamController],
    providers: [DictionaryApiService, MerriamApiService]
})
export class AppModule {}
