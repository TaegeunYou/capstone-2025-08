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
 * @interface CreateCommentRequestDto
 */
export interface CreateCommentRequestDto {
    /**
     * 댓글 내용
     * @type {string}
     * @memberof CreateCommentRequestDto
     */
    content?: string;
    /**
     * 댓글 태그 (COMMENT, FIX, QUESTION 등)
     * @type {string}
     * @memberof CreateCommentRequestDto
     */
    commentTag?: CreateCommentRequestDtoCommentTagEnum;
    /**
     * 부모 댓글 ID (대댓글일 경우 지정, 최상위 댓글일 경우 null)
     * @type {number}
     * @memberof CreateCommentRequestDto
     */
    parentId?: number;
}


/**
 * @export
 */
export const CreateCommentRequestDtoCommentTagEnum = {
    Comment: 'COMMENT',
    Fix: 'FIX',
    Question: 'QUESTION'
} as const;
export type CreateCommentRequestDtoCommentTagEnum = typeof CreateCommentRequestDtoCommentTagEnum[keyof typeof CreateCommentRequestDtoCommentTagEnum];


/**
 * Check if a given object implements the CreateCommentRequestDto interface.
 */
export function instanceOfCreateCommentRequestDto(value: object): value is CreateCommentRequestDto {
    return true;
}

export function CreateCommentRequestDtoFromJSON(json: any): CreateCommentRequestDto {
    return CreateCommentRequestDtoFromJSONTyped(json, false);
}

export function CreateCommentRequestDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateCommentRequestDto {
    if (json == null) {
        return json;
    }
    return {
        
        'content': json['content'] == null ? undefined : json['content'],
        'commentTag': json['commentTag'] == null ? undefined : json['commentTag'],
        'parentId': json['parentId'] == null ? undefined : json['parentId'],
    };
}

export function CreateCommentRequestDtoToJSON(json: any): CreateCommentRequestDto {
    return CreateCommentRequestDtoToJSONTyped(json, false);
}

export function CreateCommentRequestDtoToJSONTyped(value?: CreateCommentRequestDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'content': value['content'],
        'commentTag': value['commentTag'],
        'parentId': value['parentId'],
    };
}

