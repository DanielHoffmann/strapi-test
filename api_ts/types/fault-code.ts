import { IDescriptionOverride } from './description-override';
import { IFaultDescription } from './fault-description';

/**
 * Model definition for FaultCode
 */
export interface IFaultCode {
  id: string;
  dtcSpnStart: number;
  dtcSpnEnd: number;
  description?: IFaultDescription;
  descriptionOverride: IDescriptionOverride[];
}