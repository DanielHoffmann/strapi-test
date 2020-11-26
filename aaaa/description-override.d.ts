import { IFaultDescription } from './fault-description';
import { IFilter } from './filter';
export interface IDescriptionOverride {
    id: string;
    filter: IFilter[];
    description?: IFaultDescription;
}
