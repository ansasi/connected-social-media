import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import {visionTool} from '@sanity/vision';

import {schemaTypes} from './schemas/schema';

export default defineConfig({
  name: 'default',
  title: 'Connected',
  projectId: 'u67ppvzi',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
