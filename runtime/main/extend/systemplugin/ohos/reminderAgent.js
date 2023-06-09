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

import { paramMock } from "../utils"

export function mockReminderAgent() {
  const infoMock = {
    reminderId: 1,
    info: "[PC preview] unknown info"
  }
  const reminderReq = {
    reminderType: 1,
    actionButton: [
      {
        title: "[PC preview] unknown title",
        type: 0
      }
    ],
    wantAgent: {
      pkgName: "[PC preview] unknown pkg nam",
      abilityName: "[PC preview] unknown ability name"
    },
    maxScreenWantAgent: {
      pkgName: "[PC preview] unknown pkg name",
      abilityName: "[PC preview] unknown ability name"
    },
    ringDuration: 1,
    snoozeTimes: 1,
    timeInterval: 1,
    title: "[PC preview] unknown title",
    content: "[PC preview] unknown content",
    expiredContent: "[PC preview] unknown expiredContent",
    snoozeContent: "[PC preview] unknown snoozeContent",
    notificationId: 1,
    slotType: 3
  }
  const reminderReqs = [
    reminderReq
  ]
  global.ohosplugin.reminderAgent = {
    publishReminder: function (...args) {
      console.warn("reminderAgent.publishReminder interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, infoMock.reminderId)
      } else {
        return new Promise((resolve) => {
          resolve(infoMock.reminderId)
        });
      }
    },
    getValidReminders: function (...args) {
      console.warn("reminderAgent.getValidReminders interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, reminderReqs)
      } else {
        return new Promise((resolve) => {
          resolve(reminderReqs)
        });
      }
    },
    cancelReminder: function (...args) {
      console.warn("reminderAgent.cancelReminder interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock)
      } else {
        return new Promise((resolve) => {
          resolve()
        });
      }
    },
    cancelAllReminders: function (...args) {
      console.warn("reminderAgent.cancelAllReminders interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock)
      } else {
        return new Promise((resolve) => {
          resolve()
        });
      }
    },
    addNotificationSlot: function (...args) {
      console.warn("reminderAgent.addNotificationSlot interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock)
      } else {
        return new Promise((resolve) => {
          resolve()
        });
      }
    },
    removeNotificationSlot: function (...args) {
      console.warn("reminderAgent.removeNotificationSlot interface mocked in the Previewer." +
        "How this interface works on the Previewer may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock)
      } else {
        return new Promise((resolve) => {
          resolve()
        });
      }
    }
  }
}