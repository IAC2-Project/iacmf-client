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
import { ComplianceRuleEntity } from './complianceRuleEntity';
import { ComplianceRuleParameterAssignmentEntity } from './complianceRuleParameterAssignmentEntity';
import { ComplianceJobEntity } from './complianceJobEntity';


export interface ComplianceRuleConfigurationEntity { 
    id: number;
    complianceRuleParameterAssignments?: Array<ComplianceRuleParameterAssignmentEntity>;
    complianceRule?: ComplianceRuleEntity;
    complianceJob?: ComplianceJobEntity;
    issueType: string;
}

