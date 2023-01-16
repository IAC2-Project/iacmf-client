/**
 * IACMF
 * IaC Compliance Management Framework
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ComplianceJobEntity } from './complianceJobEntity';


export interface TriggerEntity { 
    id: number;
    description?: string;
    name: string;
    isDeleted: boolean;
    cronExpression?: string;
    complianceJobs?: Array<ComplianceJobEntity>;
}

