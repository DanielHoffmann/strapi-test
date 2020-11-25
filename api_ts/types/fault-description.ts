import { IFaultFmi } from './fault-fmi';
import { IFaultPotentialReason } from './fault-potential-reason';
import { IFaultSystemReaction } from './fault-system-reaction';
import { IFaultTrigger } from './fault-trigger';
import { IPotentialReasonsOverride } from './potential-reasons-override';

/**
 * Model definition for FaultDescription
 */
export interface IFaultDescription {
  id: string;
  bmsDtc: string;
  description: string;
  redStopLamp: boolean;
  amberWarningLamp: boolean;
  internal: boolean;
  removed: boolean;
  fmi?: IFaultFmi;
  systemReaction?: IFaultSystemReaction;
  potentialReasons: IFaultPotentialReason[];
  potentialReasonsOverride: IPotentialReasonsOverride[];
  triggers: IFaultTrigger[];
}