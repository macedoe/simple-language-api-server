import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { WordEntry } from 'src/interfaces';

@Injectable()
export class DictionaryApiService {
    constructor(private readonly configService: ConfigService) {}

    async getDictionaryEntry(word: string): Promise<WordEntry[]> {
        const response = await fetch(`${this.apiUrl}${word}`);
        if (!response.ok) {
            throw new Error(`Unable to fetch dictionary data for ${word}`);
        }

        const data = (await response.json()) as WordEntry[];

        return data;
    }

    private get apiUrl(): string {
        return this.configService.get<string>('free.host') || '';
    }
}
