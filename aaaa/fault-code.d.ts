import { IDescriptionOverride } from './description-override';
import { IFaultDescription } from './fault-description';
export interface IFaultCode {
    id: string;
    dtcSpnStart: number;
    dtcSpnEnd: number;
    description?: IFaultDescription;
    DescriptionOverride: IDescriptionOverride[];
}
