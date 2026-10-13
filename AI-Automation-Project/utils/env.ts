import { existsSync } from 'node:fs';
import path from 'node:path';
import dotenv from 'dotenv';

const environmentFiles = {
	test: '.env.test',
	stage: '.env.stage',
	production: '.env.production',
} as const;

const environmentName = (process.env.TEST_ENV ?? 'test').toLowerCase();

if (!(environmentName in environmentFiles)) {
	throw new Error(`Unsupported TEST_ENV "${environmentName}". Use test, stage, or production.`);
}

const environmentFile = environmentFiles[environmentName as keyof typeof environmentFiles];
const environmentPath = path.resolve(process.cwd(), environmentFile);
const testExamplePath = path.resolve(process.cwd(), '.env.test.example');
const configPath = existsSync(environmentPath)
	? environmentPath
	: environmentName === 'test' && existsSync(testExamplePath)
		? testExamplePath
		: environmentPath;
const result = dotenv.config({ path: configPath });

if (result.error) {
	throw new Error(`Could not load ${environmentFile}. Create it from ${environmentFile}.example and provide its values.`);
}

export function requiredEnvironmentValue(key: string): string {
	const value = process.env[key]?.trim();
	if (!value) {
		throw new Error(`Missing required environment variable "${key}" in ${environmentFile}.`);
	}
	return value;
}

export const baseUrl = requiredEnvironmentValue('BASE_URL');