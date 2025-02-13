import { Module } from '@nestjs/common';
import { FreeDictionaryModule } from './free-dictionary/free-dictionary.module';
import { MerriamWebsterModule } from './merriam-webster/merriam-webster.module';

@Module({
    imports: [FreeDictionaryModule, MerriamWebsterModule],
    controllers: [],
    providers: []
})
export class AppModule {}
