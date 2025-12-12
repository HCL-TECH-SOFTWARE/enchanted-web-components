/* ======================================================================== *
 * Copyright 2025 HCL America Inc.                                          *
 * Licensed under the Apache License, Version 2.0 (the "License");          *
 * you may not use this file except in compliance with the License.         *
 * You may obtain a copy of the License at                                  *
 *                                                                          *
 * http://www.apache.org/licenses/LICENSE-2.0                               *
 *                                                                          *
 * Unless required by applicable law or agreed to in writing, software      *
 * distributed under the License is distributed on an "AS IS" BASIS,        *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. *
 * See the License for the specific language governing permissions and      *
 * limitations under the License.                                           *
 * ======================================================================== */
import { expect } from '@wdio/globals';
import fetchMock from "fetch-mock";
import { validateSource } from "../../../utils/previewUtils";
import { ValidationStatus } from "../../../types/enchanted-preview";

describe('previewUtils', () => {
  describe('validateSource', () => {
    afterEach(() => {
      fetchMock.restore();
    });

    it('should return ERROR_BAD_REQUEST if the source is undefined', async () => {
      const status = await validateSource(undefined);
      await expect(status).toBe(ValidationStatus.ERROR_BAD_REQUEST);
      await expect(fetchMock.calls().length).toBe(0);
    });

    it('should return ERROR_BAD_REQUEST if the source is an empty string', async () => {
      const status = await validateSource('');
      await expect(status).toBe(ValidationStatus.ERROR_BAD_REQUEST);
      await expect(fetchMock.calls().length).toBe(0);
    });

    it('should return SUCCESS for a valid source with an OK response (status 200)', async () => {
      const url = 'https://valid.url/image.png';
      fetchMock.get(url, 200);

      const status = await validateSource(url);
      await expect(status).toBe(ValidationStatus.SUCCESS);
      await expect(fetchMock.lastUrl()).toBe(url);
    });

    it('should return ERROR_NOT_FOUND for a 404 status response', async () => {
      const url = 'https://invalid.url/not-found.png';
      fetchMock.get(url, 404);

      const status = await validateSource(url);
      await expect(status).toBe(ValidationStatus.ERROR_NOT_FOUND);
    });

    it('should return ERROR_FORBIDDEN for a 403 status response', async () => {
      const url = 'https://forbidden.url/image.png';
      fetchMock.get(url, 403);

      const status = await validateSource(url);
      await expect(status).toBe(ValidationStatus.ERROR_FORBIDDEN);
    });

    it('should return ERROR_SERVER for a 500 status response', async () => {
      const url = 'https://server-error.url/image.png';
      fetchMock.get(url, 500);

      const status = await validateSource(url);
      await expect(status).toBe(ValidationStatus.ERROR_SERVER);
    });

    it('should return ERROR_SERVER for any 5xx status response', async () => {
      const url = 'https://server-unavailable.url/image.png';
      fetchMock.get(url, 503);

      const status = await validateSource(url);
      await expect(status).toBe(ValidationStatus.ERROR_SERVER);
    });

    it('should return ERROR_BAD_REQUEST for other non-ok client-side statuses (e.g., 400)', async () => {
      const url = 'https://bad-request.url/image.png';
      fetchMock.get(url, 400);

      const status = await validateSource(url);
      await expect(status).toBe(ValidationStatus.ERROR_BAD_REQUEST);
    });

    it('should return ERROR_SERVER when the fetch call fails (e.g., network error)', async () => {
      const url = 'https://network-error.url/image.png';
      fetchMock.get(url, { throws: new Error('Network request failed') });

      const status = await validateSource(url);
      await expect(status).toBe(ValidationStatus.ERROR_SERVER);
    });

    it('should handle the expected AbortError as a SUCCESS case', async () => {
      const url = 'https://will-be-aborted.url/image.png';
      const abortError = new DOMException('The user aborted a request.', 'AbortError');
      fetchMock.get(url, { throws: abortError });

      const status = await validateSource(url);
      await expect(status).toBe(ValidationStatus.SUCCESS);
    });
  });
});
