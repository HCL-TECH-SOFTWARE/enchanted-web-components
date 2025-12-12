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
import { ValidationStatus } from "../types/enchanted-preview";

/**
 * Checks if a remote resource is accessible by performing a lightweight fetch.
 *
 * This function uses the `fetch` API with the 'GET' method and an AbortController
 * to efficiently validate a source URL. It only waits for the response headers;
 * upon receiving a successful status code, it immediately aborts the download of
 * the response body to save bandwidth. It maps HTTP status codes and network
 * errors to a `ValidationStatus` enum.
 *
 * @param {string | undefined} source The URL of the resource to validate.
 * @returns {Promise<ValidationStatus>} A promise that resolves to a `ValidationStatus`
 * enum value indicating the outcome of the validation check.
 *
 */
export const validateSource = async (source: string | undefined) => {
  if (!source) {
    return ValidationStatus.ERROR_BAD_REQUEST;
  }

  const controller = new AbortController();
  const signal = controller.signal;

  try {
    const response = await fetch(source, { 
      method: 'GET',
      credentials: 'include',
      cache: 'no-cache',
      signal 
    }
    );
    
    if (response.ok) {
      // Abort download if success
      controller.abort();
      return ValidationStatus.SUCCESS;
    }

    if (response.status === 404) return ValidationStatus.ERROR_NOT_FOUND;
    if (response.status === 403) return ValidationStatus.ERROR_FORBIDDEN;
    if (response.status >= 500) return ValidationStatus.ERROR_SERVER;

    return ValidationStatus.ERROR_BAD_REQUEST;
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        // This was an expected abort, which means the validation succeeded.
        return ValidationStatus.SUCCESS;
      }
    }

    return ValidationStatus.ERROR_SERVER;
  }
};
