import { IManual } from './manual';

/**
 * Model definition for ManualReference
 */
export interface IManualReference {
  id: string;
  section: string;
  manual?: IManual;
}