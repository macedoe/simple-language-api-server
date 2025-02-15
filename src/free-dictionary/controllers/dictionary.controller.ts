import { Controller, Get, Param } from '@nestjs/common';
import { DictionaryApiService } from '../services/dictionary-api.service';

@Controller('dictionary')
export class DictionaryController {
    constructor(private readonly apiService: DictionaryApiService) {}

    @Get(':word')
    async getThesaurusEntry(@Param('word') word: string) {
        return await this.apiService.getDictionaryEntry(word);
    }
}
