import { IFilter } from './filter';
import { IPotentialReason } from './potential-reason';

/**
 * Model definition for PotentialReasonOverride
 */
export interface IPotentialReasonOverride {
  id: string;
  filter: IFilter;
  potentialReason: IPotentialReason;
}