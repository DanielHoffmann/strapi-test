import { IFilter } from './filter';
import { ITrigger } from './trigger';

/**
 * Model definition for TriggerOverrides
 */
export interface ITriggerOverrides {
  id: string;
  filter: IFilter;
  trigger: ITrigger[];
}