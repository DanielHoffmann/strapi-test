import { IFaultVerificationStep } from './fault-verification-step';
import { IManualReference } from './manual-reference';
import { IManualReferenceOverride } from './manual-reference-override';
import { IVerificationStepsOverride } from './verification-steps-override';

/**
 * Model definition for FaultPotentialReason
 */
export interface IFaultPotentialReason {
  id: string;
  potentialReason: string;
  verificationMethod: string;
  manualReference?: IManualReference;
  manualReferenceOverride: IManualReferenceOverride[];
  verificationSteps: IFaultVerificationStep[];
  verificationStepsOverride: IVerificationStepsOverride[];
}