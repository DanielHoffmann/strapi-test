import { IManualReference } from './manual-reference';
import { IManualReferenceOverride } from './manual-reference-override';

/**
 * Model definition for FaultVerificationStep
 */
export interface IFaultVerificationStep {
  id: string;
  instructionHeading: string;
  manualReference?: IManualReference;
  manualReferenceOverride: IManualReferenceOverride[];
}