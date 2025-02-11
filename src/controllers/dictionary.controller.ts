import { Controller, Get, Param } from '@nestjs/common';
import { DictionaryApiService } from '../services';

@Controller()
export class DictionaryController {
    constructor(private readonly apiService: DictionaryApiService) {}

    @Get('/dictionary/:word')
    async getThesaurusEntry(@Param('word') word: string) {
        return await this.apiService.getDictionaryEntry(word);
    }
}
