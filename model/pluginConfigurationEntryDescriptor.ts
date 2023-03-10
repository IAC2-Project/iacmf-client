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


export interface PluginConfigurationEntryDescriptor { 
    name?: string;
    type?: PluginConfigurationEntryDescriptor.TypeEnum;
    isRequired?: boolean;
    description?: string;
}
export namespace PluginConfigurationEntryDescriptor {
    export type TypeEnum = 'STRING' | 'MULTI_LINE_STRING' | 'NUMBER' | 'BOOLEAN' | 'URL' | 'FILE_PATH' | 'BASH_COMMAND';
    export const TypeEnum = {
        String: 'STRING' as TypeEnum,
        MultiLineString: 'MULTI_LINE_STRING' as TypeEnum,
        Number: 'NUMBER' as TypeEnum,
        Boolean: 'BOOLEAN' as TypeEnum,
        Url: 'URL' as TypeEnum,
        FilePath: 'FILE_PATH' as TypeEnum,
        BashCommand: 'BASH_COMMAND' as TypeEnum
    };
}


