import { IFaultPotentialReason } from './fault-potential-reason';
import { IFilter } from './filter';
export interface IPotentialReasonsOverride {
    id: string;
    filter: IFilter;
    potentialReasons: IFaultPotentialReason[];
}
