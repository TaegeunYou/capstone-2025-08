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
 * @interface CreateProjectRequestDto
 */
export interface CreateProjectRequestDto {
    /**
     * 프로젝트명
     * @type {string}
     * @memberof CreateProjectRequestDto
     */
    title?: string;
    /**
     * 프로젝트 설명
     * @type {string}
     * @memberof CreateProjectRequestDto
     */
    description?: string;
    /**
     * 모델 id
     * @type {number}
     * @memberof CreateProjectRequestDto
     */
    modelId?: number;
    /**
     * 모델 타입
     * @type {string}
     * @memberof CreateProjectRequestDto
     */
    modelType?: CreateProjectRequestDtoModelTypeEnum;
}


/**
 * @export
 */
export const CreateProjectRequestDtoModelTypeEnum = {
    Tissue: 'TISSUE',
    Cell: 'CELL',
    Multi: 'MULTI'
} as const;
export type CreateProjectRequestDtoModelTypeEnum = typeof CreateProjectRequestDtoModelTypeEnum[keyof typeof CreateProjectRequestDtoModelTypeEnum];


/**
 * Check if a given object implements the CreateProjectRequestDto interface.
 */
export function instanceOfCreateProjectRequestDto(value: object): value is CreateProjectRequestDto {
    return true;
}

export function CreateProjectRequestDtoFromJSON(json: any): CreateProjectRequestDto {
    return CreateProjectRequestDtoFromJSONTyped(json, false);
}

export function CreateProjectRequestDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateProjectRequestDto {
    if (json == null) {
        return json;
    }
    return {
        
        'title': json['title'] == null ? undefined : json['title'],
        'description': json['description'] == null ? undefined : json['description'],
        'modelId': json['modelId'] == null ? undefined : json['modelId'],
        'modelType': json['modelType'] == null ? undefined : json['modelType'],
    };
}

export function CreateProjectRequestDtoToJSON(json: any): CreateProjectRequestDto {
    return CreateProjectRequestDtoToJSONTyped(json, false);
}

export function CreateProjectRequestDtoToJSONTyped(value?: CreateProjectRequestDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'title': value['title'],
        'description': value['description'],
        'modelId': value['modelId'],
        'modelType': value['modelType'],
    };
}

