import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		exclude: ['node_modules', 'dist', '.idea', '.git', '.cache'],
		passWithNoTests: true,
	},
	plugins: [tsconfigPaths()],
});
