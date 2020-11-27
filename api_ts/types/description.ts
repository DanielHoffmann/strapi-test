import { IFaultFmi } from './fault-fmi';
import { IFaultSystemReaction } from './fault-system-reaction';
import { IFaultTrigger } from './fault-trigger';

/**
 * Model definition for Description
 */
export interface IDescription {
  id: string;
  bmsDtc: string;
  description: string;
  redStopLamp: boolean;
  amberWarningLamp: boolean;
  internal: boolean;
  removed: boolean;
  fmi?: IFaultFmi;
  systemReaction?: IFaultSystemReaction;
  triggers: IFaultTrigger[];
}