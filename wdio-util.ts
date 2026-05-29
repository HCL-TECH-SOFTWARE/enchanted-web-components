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

import path from 'path';
import fs from 'fs';

export const tmpFolderCleanup = async (): Promise<void> => {
  const directory = '/tmp';
  const prefix = '.org.chromium.Chromium';
  const files = await fs.promises.readdir(directory);
  const filesToDelete = files.filter(file => { return file.startsWith(prefix); });
  // eslint-why - No specific logger are able to use here
  // eslint-disable-next-line no-console
  console.log(`Found ${filesToDelete.length} files to delete with prefix "${prefix}"`);
  for (const file of filesToDelete) {
    try {
      const stats = fs.lstatSync(path.join(directory, file));
      if (stats.isDirectory()) {
        await fs.promises.rm(path.join(directory, file), { recursive: true, force: true });
      } else if (stats.isFile()) {
        await fs.promises.unlink(path.join(directory, file));
      }
    } catch (err) {
      // @ts-ignore
      if (err.code === 'ENOENT') {
        // eslint-why - No specific logger are able to use here
        // eslint-disable-next-line no-console
        console.log('File or directory does not exist');
      } else {
        // eslint-why - No specific logger are able to use here
        // eslint-disable-next-line no-console
        console.error('Error:', err);
      }
    }
  }
  const logFiles = await fs.promises.readdir(directory); 
  const nonDeletableFiles = logFiles.filter(file => { return file.startsWith(prefix); });
  // eslint-why - No specific logger are able to use here
  // eslint-disable-next-line no-console
  console.log(`Verification after cleanup: Found ${nonDeletableFiles.length} files with prefix "${prefix}"`);
};
