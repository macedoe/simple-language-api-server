import { Controller, Get, Param } from '@nestjs/common';
import { MerriamApiService } from '../services/merriam-api.service';

@Controller('mw')
export class MerriamController {
    constructor(private readonly apiService: MerriamApiService) {}

    @Get('/thesaurus/:word')
    async getThesaurusEntry(@Param('word') word: string) {
        return await this.apiService.getThesaurusEntry(word);
    }

    @Get('/spanish/:word')
    async getSpanishDefinition(@Param('word') word: string) {
        try {
            return await this.apiService.getSpanishDefinition(word);
        } catch (error: unknown) {
            if (error instanceof Error) {
                return { error: error.message };
            }
            return { error: 'An unknown error occurred' };
        }
    }
}
