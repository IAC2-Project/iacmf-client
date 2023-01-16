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
import { AbstractJsonSchemaPropertyObject } from './abstractJsonSchemaPropertyObject';


export interface Item { 
    type?: string;
    properties?: { [key: string]: AbstractJsonSchemaPropertyObject; };
    requiredProperties?: Array<string>;
}

