import { IFaultPotentialReason } from './fault-potential-reason';
import { IFilter } from './filter';

/**
 * Model definition for PotentialReasonsOverride
 */
export interface IPotentialReasonsOverride {
  id: string;
  filter: IFilter;
  potentialReasons: IFaultPotentialReason[];
}