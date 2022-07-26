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

export const MissionListener = {
    onMissionCreated: function(...args) {
        console.warn("MissionListener.onMissionCreated interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
    },
    onMissionDestroyed: function(...args) {
        console.warn("MissionListener.onMissionDestroyed interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
    },
    onMissionSnapshotChanged: function(...args) {
        console.warn("MissionListener.onMissionSnapshotChanged interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
    },
    onMissionMovedToFront: function(...args) {
        console.warn("MissionListener.onMissionMovedToFront interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
    },
    onMissionIconUpdated: function(...args) {
        console.warn("MissionListener.onMissionIconUpdated interface mocked in the Previewer." +
        " How this interface works on the Previewer may be different from that on a real device.")
    }
}