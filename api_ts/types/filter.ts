import { IGeneration } from './generation';
import { IProduct } from './product';
import { IServiceLevel } from './service-level';

/**
 * Model definition for Filter
 */
export interface IFilter {
  id: string;
  minVersion?: string;
  maxVersion?: string;
  generations: IGeneration[];
  products: IProduct[];
  serviceLevels: IServiceLevel[];
}