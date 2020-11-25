import { IFaultDescription } from './fault-description';
import { IFilter } from './filter';

/**
 * Model definition for DescriptionOverride
 */
export interface IDescriptionOverride {
  id: string;
  filter: IFilter;
  description?: IFaultDescription;
}