import { registerAs } from '@nestjs/config';

export default registerAs('merriam', () => ({
    host: process.env.API_URL || '',
    thesaurus: process.env.API_KEY_THESAURUS || '',
    spanish: process.env.API_KEY_SPANISH || ''
}));
