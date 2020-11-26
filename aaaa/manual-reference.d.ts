import { IManual } from './manual';
export interface IManualReference {
    id: string;
    section: string;
    manual?: IManual;
}
