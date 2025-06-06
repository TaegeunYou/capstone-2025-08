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
import type { RoiDetail } from './RoiDetail';
import {
    RoiDetailFromJSON,
    RoiDetailFromJSONTyped,
    RoiDetailToJSON,
    RoiDetailToJSONTyped,
} from './RoiDetail';
import type { Cell } from './Cell';
import {
    CellFromJSON,
    CellFromJSONTyped,
    CellToJSON,
    CellToJSONTyped,
} from './Cell';

/**
 * ROI 정보
 * @export
 * @interface Roi
 */
export interface Roi {
    /**
     * ROI 아이디
     * @type {number}
     * @memberof Roi
     */
    roiId?: number;
    /**
     * 표시 순서
     * @type {number}
     * @memberof Roi
     */
    displayOrder?: number;
    /**
     * 
     * @type {RoiDetail}
     * @memberof Roi
     */
    detail?: RoiDetail;
    /**
     * ROI faulty 백분율
     * @type {number}
     * @memberof Roi
     */
    faulty?: number;
    /**
     * 조직 이미지 경로 (merged)
     * @type {string}
     * @memberof Roi
     */
    tissuePath?: string;
    /**
     * 셀 정보 목록
     * @type {Array<Cell>}
     * @memberof Roi
     */
    cells?: Array<Cell>;
}

/**
 * Check if a given object implements the Roi interface.
 */
export function instanceOfRoi(value: object): value is Roi {
    return true;
}

export function RoiFromJSON(json: any): Roi {
    return RoiFromJSONTyped(json, false);
}

export function RoiFromJSONTyped(json: any, ignoreDiscriminator: boolean): Roi {
    if (json == null) {
        return json;
    }
    return {
        
        'roiId': json['roiId'] == null ? undefined : json['roiId'],
        'displayOrder': json['displayOrder'] == null ? undefined : json['displayOrder'],
        'detail': json['detail'] == null ? undefined : RoiDetailFromJSON(json['detail']),
        'faulty': json['faulty'] == null ? undefined : json['faulty'],
        'tissuePath': json['tissuePath'] == null ? undefined : json['tissuePath'],
        'cells': json['cells'] == null ? undefined : ((json['cells'] as Array<any>).map(CellFromJSON)),
    };
}

export function RoiToJSON(json: any): Roi {
    return RoiToJSONTyped(json, false);
}

export function RoiToJSONTyped(value?: Roi | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'roiId': value['roiId'],
        'displayOrder': value['displayOrder'],
        'detail': RoiDetailToJSON(value['detail']),
        'faulty': value['faulty'],
        'tissuePath': value['tissuePath'],
        'cells': value['cells'] == null ? undefined : ((value['cells'] as Array<any>).map(CellToJSON)),
    };
}

