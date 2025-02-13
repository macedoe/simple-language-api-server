import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InternalResponseThesaurus, WordEntry } from 'src/common/interfaces';

@Injectable()
export class DictionaryApiService {
    constructor(private readonly configService: ConfigService) {}

    async getDictionaryEntry(word: string): Promise<InternalResponseThesaurus[]> {
        const data = await this.getExternalDictionaryEntry(word);

        const response: InternalResponseThesaurus[] = [];
        for (const entry of data) {
            response.push({
                id: entry.word,
                definitions: entry.meanings.map(meaning => meaning.definitions.map(def => def.definition)).flat(),
                synonyms: entry.meanings.map(meaning => meaning.definitions.map(def => def.synonyms).flat()).flat(),
                antonyms: entry.meanings.map(meaning => meaning.definitions.map(def => def.antonyms).flat()).flat(),
                partOfSpeech: entry.meanings[0].partOfSpeech
            });
        }

        return response;
    }

    private async getExternalDictionaryEntry(word: string): Promise<WordEntry[]> {
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
