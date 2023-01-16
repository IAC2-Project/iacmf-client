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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec, HttpContext 
        }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

// @ts-ignore
import { PluginPojo } from '../model/pluginPojo';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class PluginService {

    protected basePath = 'http://localhost:9091/api';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string|string[], @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (Array.isArray(basePath) && basePath.length > 0) {
                basePath = basePath[0];
            }

            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }


    // @ts-ignore
    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, (value as Date).toISOString().substr(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * Retrieves all plugins that fulfill certain conditions. If no conditions are provided, all plugins are returned.
     * @param pluginType (filter) The type of the plugins to be retrieved. Must be one of the PluginTypeEnums. This parameter is mandatory if any of the other parameters are not null.
     * @param iacTechnology (filter) The name of the IaC technology with which the plugins must be compatible. Only for model creation and issue fixing plugins.
     * @param complianceRuleId (filter) The id of the compliance rule with which the plugins must be compatible. Only for compliance checking plugins.
     * @param issueType (filter) The id of the compliance issue with which the plugins must be compatible. Only for issue fixing plugins.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllPlugins(pluginType?: string, iacTechnology?: string, complianceRuleId?: number, issueType?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/hal+json', context?: HttpContext}): Observable<Array<PluginPojo>>;
    public getAllPlugins(pluginType?: string, iacTechnology?: string, complianceRuleId?: number, issueType?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/hal+json', context?: HttpContext}): Observable<HttpResponse<Array<PluginPojo>>>;
    public getAllPlugins(pluginType?: string, iacTechnology?: string, complianceRuleId?: number, issueType?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/hal+json', context?: HttpContext}): Observable<HttpEvent<Array<PluginPojo>>>;
    public getAllPlugins(pluginType?: string, iacTechnology?: string, complianceRuleId?: number, issueType?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/hal+json', context?: HttpContext}): Observable<any> {

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (pluginType !== undefined && pluginType !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>pluginType, 'pluginType');
        }
        if (iacTechnology !== undefined && iacTechnology !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>iacTechnology, 'iacTechnology');
        }
        if (complianceRuleId !== undefined && complianceRuleId !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>complianceRuleId, 'complianceRuleId');
        }
        if (issueType !== undefined && issueType !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>issueType, 'issueType');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json',
                'application/hal+json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/plugins`;
        return this.httpClient.request<Array<PluginPojo>>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * gets a plugin by its identifier
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPlugin(id: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/hal+json', context?: HttpContext}): Observable<PluginPojo>;
    public getPlugin(id: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/hal+json', context?: HttpContext}): Observable<HttpResponse<PluginPojo>>;
    public getPlugin(id: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/hal+json', context?: HttpContext}): Observable<HttpEvent<PluginPojo>>;
    public getPlugin(id: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/hal+json', context?: HttpContext}): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getPlugin.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json',
                'application/hal+json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/plugins/${this.configuration.encodeParam({name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}`;
        return this.httpClient.request<PluginPojo>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
