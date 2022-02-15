/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { paramMock } from '../utils';

export function mockStorageStatistics() {
  const BundleStatsMock = {
    appSize: '[PC preview] unknow appSize',
    cacheSize: '[PC preview] unknow cacheSize',
    dataSize: '[PC preview] unknow dataSize'
  };
  const storageStatistics = {
    BundleStats: BundleStatsMock,
    getTotalSizeOfVolume: function(...args) {
      console.warn('storageStatistics.getTotalSizeOfVolume interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramNumberMock);
        });
      }
    },
    getFreeSizeOfVolume: function(...args) {
      console.warn('storageStatistics.getFreeSizeOfVolume interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramNumberMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramNumberMock);
        });
      }
    },
    getBundleStats: function(...args) {
      console.warn('storageStatistics.getBundleStats interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, BundleStatsMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(BundleStatsMock);
        });
      }
    }
  };
  return storageStatistics;
}
