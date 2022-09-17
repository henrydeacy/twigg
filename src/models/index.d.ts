import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type MessagesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Messages {
  readonly id: string;
  readonly senderName: string;
  readonly body: string;
  readonly creationDate: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Messages, MessagesMetaData>);
  static copyOf(source: Messages, mutator: (draft: MutableModel<Messages, MessagesMetaData>) => MutableModel<Messages, MessagesMetaData> | void): Messages;
}