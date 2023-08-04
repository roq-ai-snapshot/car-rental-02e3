import { VehicleInterface } from 'interfaces/vehicle';
import { GetQueryInterface } from 'interfaces';

export interface PerformanceInterface {
  id?: string;
  vehicle_id: string;
  assessment_date: any;
  assessment_result: string;
  created_at?: any;
  updated_at?: any;

  vehicle?: VehicleInterface;
  _count?: {};
}

export interface PerformanceGetQueryInterface extends GetQueryInterface {
  id?: string;
  vehicle_id?: string;
  assessment_result?: string;
}
