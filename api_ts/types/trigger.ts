import { IFaultPotentialReason } from './fault-potential-reason';

/**
 * Model definition for Trigger
 */
export interface ITrigger {
  id: string;
  potentialReasons: IFaultPotentialReason[];
}