/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

import { paramMock } from "../utils"

export function mockBackgroundTaskManager() {
    const DelaySuspendInfoMock = {
        requestId: '[PC preview] unknown requestId',
        actualDelayTime: '[PC preview] unknown actualDelayTime',
    };
    const backgroundTaskManager = {
        BackgroundMode : {
            DATA_TRANSFER: 1,
            AUDIO_PLAYBACK: 2,
            AUDIO_RECORDING: 3,
            LOCATION: 4,
            BLUETOOTH_INTERACTION: 5,
            MULTI_DEVICE_CONNECTION: 6,
            WIFI_INTERACTION: 7,
            VOIP: 8,
            TASK_KEEPING: 9
        },
        requestSuspendDelay: function (...args) {
            console.warn("backgroundTaskManager.requestSuspendDelay interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length;
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock)
                return DelaySuspendInfoMock;
            }
        },
        cancelSuspendDelay: function (...args) {
            console.warn("backgroundTaskManager.cancelSuspendDelay interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
        },
        getRemainingDelayTime: function (...args) {
            console.warn("backgroundTaskManager.getRemainingDelayTime interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock, DelaySuspendInfoMock.actualDelayTime)
            } else {
                return new Promise((resolve) => {
                    resolve(DelaySuspendInfoMock.actualDelayTime)
                });
            }
        },
        startBackgroundRunning: function (...args) {
            console.warn("backgroundTaskManager.startBackgroundRunning interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve) => {
                    resolve();
                });
            }
        },
        stopBackgroundRunning: function (...args) {
            console.warn("backgroundTaskManager.stopBackgroundRunning interface mocked in the Previewer. How this interface works on the" +
                " Previewer may be different from that on a real device.")
            const len = args.length
            if (typeof args[len - 1] === 'function') {
                args[len - 1].call(this, paramMock.businessErrorMock);
            } else {
                return new Promise((resolve) => {
                    resolve();
                });
            }
        }
    };
    return backgroundTaskManager;
}