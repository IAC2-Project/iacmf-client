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


export interface ComplianceRuleParameterEntityRequestBody { 
    id: number;
    name: string;
    complianceRule?: string;
    type: ComplianceRuleParameterEntityRequestBody.TypeEnum;
}
export namespace ComplianceRuleParameterEntityRequestBody {
    export type TypeEnum = 'INT' | 'DECIMAL' | 'STRING' | 'STRING_LIST' | 'BOOLEAN';
    export const TypeEnum = {
        Int: 'INT' as TypeEnum,
        Decimal: 'DECIMAL' as TypeEnum,
        String: 'STRING' as TypeEnum,
        StringList: 'STRING_LIST' as TypeEnum,
        Boolean: 'BOOLEAN' as TypeEnum
    };
}


