import { appSchema } from '@nozbe/watermelondb';
import { userSchema } from './userSchema';

const schemas = appSchema({
  version: 1,
  tables: [userSchema],
});

export { schemas };
