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

import { paramMock } from './utils';

export function mockAccessibility() {
  const AbilityTypeMock = {
    audible: 'audible',
    generic: 'generic',
    haptic: 'haptic',
    spoken: 'spoken',
    visual: 'visual'
  };

  const CapabilityMock = {
    retrieve: 'retrieve',
    touchGuide: 'touchGuide',
    keyEventObserver: 'keyEventObserver',
    zoom: 'zoom',
    gesture: 'gesture'
  };

  const EventTypeMock = '[PC Preview] unknow EventType';

  const AccessibilityAbilityInfoMock = {
    id: '[PC Preview] unknow id',
    name: '[PC Preview] unknow name',
    bundleName: '[PC Preview] unknow bundleName',
    abilityTypes: [AbilityTypeMock],
    capabilities: [CapabilityMock],
    description: '[PC Preview] unknow description',
    eventTypes: [EventTypeMock]
  };

  const CaptionsFontEdgeTypeMock = '[PC Preview] unknow CaptionsFontEdgeType';

  const CaptionsFontFamilyMock = '[PC Preview] unknow CaptionsFontFamily';

  const CaptionStyleMock = {
    fontFamily: [CaptionsFontFamilyMock],
    fontScale: '[PC Preview] unknow fontScale',
    fontColor: '[PC Preview] unknow fontColor',
    fontEdgeType: [CaptionsFontEdgeTypeMock],
    backgroundColor: '[PC Preview] unknow backgroundColor',
    windowColor: '[PC Preview] unknow windowColor'
  };

  const CaptionsManagerMock = {
    enabled: '[PC Preview] unknow enabled',
    style: [CaptionStyleMock]
  };

  const WindowUpdateTypeMock = '[PC Preview] unknow WindowUpdateType';

  const ActionMock = '[PC Preview] unknow Action';

  const TextMoveUnitMock = '[PC Preview] unknow TextMoveUnit';
  const EventInfoClass = class EventInfo {
    constructor(jsonObject) {
      console.warn('accessibility.EventInfoClass.constructor interface mocked in the Previewer. How this interface works on' +
        ' the Previewer may be different from that on a real device.');
      this.type = EventTypeMock;
      this.windowUpdateType = WindowUpdateTypeMock;
      this.bundleName = '[PC Preview] unknow bundleName';
      this.componentType = '[PC Preview] unknow componentType';
      this.pageId = '[PC Preview] unknow pageId';
      this.description = '[PC Preview] unknow description';
      this.triggerAction = ActionMock;
      this.textMoveUnit = TextMoveUnitMock;
      this.contents = '[PC Preview] unknow contents';
      this.lastContent = '[PC Preview] unknow lastContent';
      this.beginIndex = '[PC Preview] unknow beginIndex';
      this.currentIndex = '[PC Preview] unknow currentIndex';
      this.endIndex = '[PC Preview] unknow endIndex';
      this.itemCount = '[PC Preview] unknow itemCount';
    }
  };
  const StateEventMock = {
    eventType: '[PC Preview] unknow eventType',
    state: '[PC Preview] unknow state',
    description: '[PC Preview] unknow description'
  };

  global.systemplugin.accessibility = {
    EventInfo: EventInfoClass,
    isOpenAccessibility: function (...args) {
      console.warn('accessibility.isOpenAccessibility interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramBooleanMock);
        });
      }
    },
    isOpenTouchGuide: function (...args) {
      console.warn('accessibility.isOpenTouchGuide interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock);
      } else {
        return new Promise((resolve) => {
          resolve(paramMock.paramBooleanMock);
        });
      }
    },
    on: function (...args) {
      console.warn('accessibility.on interface mocked in the Previewer. How this interface works on the Previewer may be' +
        ' different from that on a real device.');
      const len = args.length;
      args[len - 1].call(this, paramMock.businessErrorMock, StateEventMock);
    },
    off: function (...args) {
      console.warn('accessibility.off interface mocked in the Previewer. How this interface works on the Previewer may be' +
        ' different from that on a real device.');
      const len = args.length;
      if (len > 0 && typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, StateEventMock);
      }
    },
    getAbilityLists: function (...args) {
      console.warn('accessibility.getAbilityLists interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, [AccessibilityAbilityInfoMock]);
      } else {
        return new Promise((resolve, reject) => {
          resolve([AccessibilityAbilityInfoMock]);
        });
      }
    },
    sendEvent: function (...args) {
      console.warn('accessibility.sendEvent interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock);
      } else {
        return new Promise((resolve, reject) => {
          resolve();
        });
      }
    },
    getCaptionsManager: function (...args) {
      console.warn('accessibility.getCaptionsManager interface mocked in the Previewer. How this interface works on the' +
        ' Previewer may be different from that on a real device.');
      const len = args.length;
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, [CaptionsManagerMock]);
      } else {
        return new Promise((resolve, reject) => {
          resolve([CaptionsManagerMock]);
        });
      }
    }
  };
}
