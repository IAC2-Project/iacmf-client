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
import { CollectionModelTriggerEntityEmbedded } from './collectionModelTriggerEntityEmbedded';
import { Link } from './link';


export interface CollectionModelTriggerEntity { 
    _embedded?: CollectionModelTriggerEntityEmbedded;
    _links?: { [key: string]: Link; };
}
