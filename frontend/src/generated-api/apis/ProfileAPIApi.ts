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

import * as runtime from '../runtime';
import type {
  GetUserSettingsResponseDto,
  UpdateNotificationSettingsRequestDto,
  UpdateUserNameRequestDto,
} from '../models/index';
import {
  GetUserSettingsResponseDtoFromJSON,
  GetUserSettingsResponseDtoToJSON,
  UpdateNotificationSettingsRequestDtoFromJSON,
  UpdateNotificationSettingsRequestDtoToJSON,
  UpdateUserNameRequestDtoFromJSON,
  UpdateUserNameRequestDtoToJSON,
} from '../models/index';

export interface UpdateNotificationSettingsRequest {
  updateNotificationSettingsRequestDto: UpdateNotificationSettingsRequestDto;
}

export interface UpdateProfileImageRequest {
  image: Blob;
}

export interface UpdateUserNameRequest {
  updateUserNameRequestDto: UpdateUserNameRequestDto;
}

/**
 *
 */
export class ProfileAPIApi extends runtime.BaseAPI {
  /**
   * 사용자의 설정 정보를 조회합니다.
   */
  async getUserSettingsRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetUserSettingsResponseDto>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.accessToken) {
      const tokenOrFunc = this.configuration.accessToken;
      const rawToken =
        typeof tokenOrFunc === 'function' ? await tokenOrFunc() : tokenOrFunc;

      if (rawToken) {
        headerParameters['Authorization'] = rawToken.startsWith('Bearer ')
          ? rawToken
          : `Bearer ${rawToken}`;
      }
    }

    const response = await this.request(
      {
        path: `/api/profile`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      GetUserSettingsResponseDtoFromJSON(jsonValue),
    );
  }

  /**
   * 사용자의 설정 정보를 조회합니다.
   */
  async getUserSettings(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetUserSettingsResponseDto> {
    const response = await this.getUserSettingsRaw(initOverrides);
    return await response.value();
  }

  /**
   * 사용자의 알림 설정 정보를 수정합니다.
   */
  async updateNotificationSettingsRaw(
    requestParameters: UpdateNotificationSettingsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters['updateNotificationSettingsRequestDto'] == null) {
      throw new runtime.RequiredError(
        'updateNotificationSettingsRequestDto',
        'Required parameter "updateNotificationSettingsRequestDto" was null or undefined when calling updateNotificationSettings().',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/api/profile/notification-settings`,
        method: 'PATCH',
        headers: headerParameters,
        query: queryParameters,
        body: UpdateNotificationSettingsRequestDtoToJSON(
          requestParameters['updateNotificationSettingsRequestDto'],
        ),
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * 사용자의 알림 설정 정보를 수정합니다.
   */
  async updateNotificationSettings(
    requestParameters: UpdateNotificationSettingsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<void> {
    await this.updateNotificationSettingsRaw(requestParameters, initOverrides);
  }

  /**
   * 사용자의 프로필 이미지를 수정합니다.
   */
  async updateProfileImageRaw(
    requestParameters: UpdateProfileImageRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters['image'] == null) {
      throw new runtime.RequiredError(
        'image',
        'Required parameter "image" was null or undefined when calling updateProfileImage().',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const consumes: runtime.Consume[] = [
      { contentType: 'multipart/form-data' },
    ];
    // @ts-ignore: canConsumeForm may be unused
    const canConsumeForm = runtime.canConsumeForm(consumes);

    let formParams: { append(param: string, value: any): any };
    let useForm = false;
    // use FormData to transmit files using content-type "multipart/form-data"
    useForm = canConsumeForm;
    if (useForm) {
      formParams = new FormData();
    } else {
      formParams = new URLSearchParams();
    }

    if (requestParameters['image'] != null) {
      formParams.append('image', requestParameters['image'] as any);
    }

    const response = await this.request(
      {
        path: `/api/profile/image`,
        method: 'PATCH',
        headers: headerParameters,
        query: queryParameters,
        body: formParams,
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * 사용자의 프로필 이미지를 수정합니다.
   */
  async updateProfileImage(
    requestParameters: UpdateProfileImageRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<void> {
    await this.updateProfileImageRaw(requestParameters, initOverrides);
  }

  /**
   * 사용자의 이름을 수정합니다.
   */
  async updateUserNameRaw(
    requestParameters: UpdateUserNameRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters['updateUserNameRequestDto'] == null) {
      throw new runtime.RequiredError(
        'updateUserNameRequestDto',
        'Required parameter "updateUserNameRequestDto" was null or undefined when calling updateUserName().',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/api/profile/name`,
        method: 'PATCH',
        headers: headerParameters,
        query: queryParameters,
        body: UpdateUserNameRequestDtoToJSON(
          requestParameters['updateUserNameRequestDto'],
        ),
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * 사용자의 이름을 수정합니다.
   */
  async updateUserName(
    requestParameters: UpdateUserNameRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<void> {
    await this.updateUserNameRaw(requestParameters, initOverrides);
  }
}
