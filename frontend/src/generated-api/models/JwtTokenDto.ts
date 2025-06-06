/* tslint:disable */
/* eslint-disable */
/**
 * PlanList API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface JwtTokenDto
 */
export interface JwtTokenDto {
    /**
     * 
     * @type {string}
     * @memberof JwtTokenDto
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof JwtTokenDto
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the JwtTokenDto interface.
 */
export function instanceOfJwtTokenDto(value: object): value is JwtTokenDto {
    return true;
}

export function JwtTokenDtoFromJSON(json: any): JwtTokenDto {
    return JwtTokenDtoFromJSONTyped(json, false);
}

export function JwtTokenDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): JwtTokenDto {
    if (json == null) {
        return json;
    }
    return {
        
        'accessToken': json['accessToken'] == null ? undefined : json['accessToken'],
        'refreshToken': json['refreshToken'] == null ? undefined : json['refreshToken'],
    };
}

export function JwtTokenDtoToJSON(json: any): JwtTokenDto {
    return JwtTokenDtoToJSONTyped(json, false);
}

export function JwtTokenDtoToJSONTyped(value?: JwtTokenDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'accessToken': value['accessToken'],
        'refreshToken': value['refreshToken'],
    };
}

