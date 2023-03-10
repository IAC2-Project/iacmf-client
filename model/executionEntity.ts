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
import { ComplianceIssueEntity } from './complianceIssueEntity';
import { PluginUsageInstanceEntity } from './pluginUsageInstanceEntity';
import { ComplianceJobEntity } from './complianceJobEntity';


export interface ExecutionEntity { 
    id: number;
    startTime: string;
    endTime?: string;
    currentStep: ExecutionEntity.CurrentStepEnum;
    status: ExecutionEntity.StatusEnum;
    instanceModel?: string;
    violationsDetected?: boolean;
    description?: string;
    complianceJob?: ComplianceJobEntity;
    pluginUsageInstances?: Array<PluginUsageInstanceEntity>;
    complianceIssueEntities?: Array<ComplianceIssueEntity>;
}
export namespace ExecutionEntity {
    export type CurrentStepEnum = 'START' | 'RECONSTRUCTION' | 'CHECKING' | 'FIXING' | 'VALIDATION' | 'REPORTING' | 'END';
    export const CurrentStepEnum = {
        Start: 'START' as CurrentStepEnum,
        Reconstruction: 'RECONSTRUCTION' as CurrentStepEnum,
        Checking: 'CHECKING' as CurrentStepEnum,
        Fixing: 'FIXING' as CurrentStepEnum,
        Validation: 'VALIDATION' as CurrentStepEnum,
        Reporting: 'REPORTING' as CurrentStepEnum,
        End: 'END' as CurrentStepEnum
    };
    export type StatusEnum = 'CREATED' | 'RUNNING' | 'IDLE' | 'SUCCESS' | 'EXCEPTION';
    export const StatusEnum = {
        Created: 'CREATED' as StatusEnum,
        Running: 'RUNNING' as StatusEnum,
        Idle: 'IDLE' as StatusEnum,
        Success: 'SUCCESS' as StatusEnum,
        Exception: 'EXCEPTION' as StatusEnum
    };
}


