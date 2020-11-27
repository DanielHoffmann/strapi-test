import { ITrigger } from './trigger';
import { ITriggerOverrides } from './trigger-overrides';

/**
 * Model definition for FaultTrigger
 */
export interface IFaultTrigger {
  id: string;
  code: string;
  triggers: ITrigger[];
  triggerOverrides: ITriggerOverrides[];
}