import { IFilter } from './filter';
import { IManualReference } from './manual-reference';

/**
 * Model definition for manualReferenceOverride
 */
export interface IManualReferenceOverride {
  id: string;
  filter: IFilter;
  manualReference?: IManualReference;
}