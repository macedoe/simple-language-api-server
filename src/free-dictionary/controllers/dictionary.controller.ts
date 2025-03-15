import { Controller, Get, Param } from '@nestjs/common';
import { DictionaryApiService } from '../services/dictionary-api.service';

@Controller('dictionary')
export class DictionaryController {
    constructor(private readonly apiService: DictionaryApiService) {}

    @Get(':word')
    async getDictionaryEntry(@Param('word') word: string) {
        try {
            return await this.apiService.getDictionaryEntry(word);
        } catch (error: unknown) {
            if (error instanceof Error) {
                return { error: error.message };
            }
            return { error: 'An unknown error occurred' };
        }
    }
}
