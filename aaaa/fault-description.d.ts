import { IFaultFmi } from './fault-fmi';
import { IFaultPotentialReason } from './fault-potential-reason';
import { IFaultSystemReaction } from './fault-system-reaction';
import { IPotentialReasonsOverride } from './potential-reasons-override';
export interface IFaultDescription {
    id: string;
    bmsDtc: string;
    description: string;
    redStopLamp: boolean;
    amberWarningLamp: boolean;
    internal: boolean;
    removed: boolean;
    systemReaction?: IFaultSystemReaction;
    potentialReasons: IFaultPotentialReason[];
    potentialReasonsOverride: IPotentialReasonsOverride[];
    fmi?: IFaultFmi;
}
