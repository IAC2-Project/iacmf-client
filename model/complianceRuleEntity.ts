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
import { ComplianceRuleParameterEntity } from './complianceRuleParameterEntity';


export interface ComplianceRuleEntity { 
    id: number;
    name: string;
    type: string;
    location: string;
    description?: string;
    isDeleted: boolean;
    parameters?: Array<ComplianceRuleParameterEntity>;
}

