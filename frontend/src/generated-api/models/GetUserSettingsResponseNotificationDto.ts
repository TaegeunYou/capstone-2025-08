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
 * @interface GetUserSettingsResponseNotificationDto
 */
export interface GetUserSettingsResponseNotificationDto {
    /**
     * 알림 타입
     * @type {string}
     * @memberof GetUserSettingsResponseNotificationDto
     */
    type?: string;
    /**
     * 알림 활성화 여부
     * @type {boolean}
     * @memberof GetUserSettingsResponseNotificationDto
     */
    enabled?: boolean;
}

/**
 * Check if a given object implements the GetUserSettingsResponseNotificationDto interface.
 */
export function instanceOfGetUserSettingsResponseNotificationDto(value: object): value is GetUserSettingsResponseNotificationDto {
    return true;
}

export function GetUserSettingsResponseNotificationDtoFromJSON(json: any): GetUserSettingsResponseNotificationDto {
    return GetUserSettingsResponseNotificationDtoFromJSONTyped(json, false);
}

export function GetUserSettingsResponseNotificationDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetUserSettingsResponseNotificationDto {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'] == null ? undefined : json['type'],
        'enabled': json['enabled'] == null ? undefined : json['enabled'],
    };
}

export function GetUserSettingsResponseNotificationDtoToJSON(json: any): GetUserSettingsResponseNotificationDto {
    return GetUserSettingsResponseNotificationDtoToJSONTyped(json, false);
}

export function GetUserSettingsResponseNotificationDtoToJSONTyped(value?: GetUserSettingsResponseNotificationDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'enabled': value['enabled'],
    };
}

