import { IDescription } from './description';
import { IDescriptionOverride } from './description-override';

/**
 * Model definition for FaultCode
 */
export interface IFaultCode {
  id: string;
  dtcSpnStart: number;
  dtcSpnEnd: number;
  description: IDescription;
  descriptionOverride: IDescriptionOverride[];
}