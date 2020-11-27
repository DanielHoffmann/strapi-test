import { IDescription } from './description';
import { IFilter } from './filter';

/**
 * Model definition for DescriptionOverride
 */
export interface IDescriptionOverride {
  id: string;
  filter: IFilter;
  description: IDescription;
}