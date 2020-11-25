import { IFaultVerificationStep } from './fault-verification-step';
import { IFilter } from './filter';

/**
 * Model definition for verificationStepsOverride
 */
export interface IVerificationStepsOverride {
  id: string;
  filter: IFilter;
  verificationSteps: IFaultVerificationStep[];
}