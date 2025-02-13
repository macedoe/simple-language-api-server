import { Meaning, Phonetic } from '.';

export interface WordEntry {
    word: string;
    phonetic?: string;
    phonetics: Phonetic[];
    origin?: string;
    meanings: Meaning[];
}
