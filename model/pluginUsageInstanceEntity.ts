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
import { PluginConfigurationEntity } from './pluginConfigurationEntity';


export interface PluginUsageInstanceEntity { 
    pluginIdentifier: string;
    pluginConfiguration?: Array<PluginConfigurationEntity>;
    id: number;
}

