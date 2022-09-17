// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Messages } = initSchema(schema);

export {
  Messages
};