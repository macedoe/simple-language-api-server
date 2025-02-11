import { registerAs } from '@nestjs/config';

export default registerAs('free', () => ({
    host: process.env.DICTIONARY_API_URL || ''
}));
