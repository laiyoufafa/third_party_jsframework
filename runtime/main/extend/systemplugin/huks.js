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

import { paramMock } from "./utils"

export function mockHuks() {

  const HuksParamMock = {
    tag: '[PC preview] unknow tag',
    value: '[PC preview] unknow value',
  }
  const HuksHandleMock = {
    errorCode: '[PC preview] unknow errorCode',
    handle: '[PC preview] unknow handle',
    token: '[PC preview] unknow token',
  }
  const HuksOptionsMock = {
    properties: [HuksParamMock],
    inData: '[PC preview] unknow inData',
  }
  const HuksResultMock = {
    errorCode: '[PC preview] unknow errorCode',
    outData: '[PC preview] unknow outData',
    properties: [HuksParamMock],
    certChains: [paramMock.paramStringMock],
  }
  global.systemplugin.huks = {
    generateKey: function (...args) {
      console.warn("huks.generateKey interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, HuksResultMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(HuksResultMock)
        })
      }
    },
    deleteKey: function (...args) {
      console.warn("huks.deleteKey interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, HuksResultMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(HuksResultMock)
        })
      }
    },
    importKey: function (...args) {
      console.warn("huks.importKey interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, HuksResultMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(HuksResultMock)
        })
      }
    },
    exportKey: function (...args) {
      console.warn("huks.exportKey interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, HuksResultMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(HuksResultMock)
        })
      }
    },
    getKeyProperties: function (...args) {
      console.warn("huks.getKeyProperties interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, HuksResultMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(HuksResultMock)
        })
      }
    },
    isKeyExist: function (...args) {
      console.warn("huks.isKeyExist interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, paramMock.paramBooleanMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(paramMock.paramBooleanMock)
        })
      }
    },
    init: function (...args) {
      console.warn("huks.init interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, HuksHandleMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(HuksResultMock)
        })
      }
    },
    update: function (...args) {
      console.warn("huks.update interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, HuksResultMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(HuksResultMock)
        })
      }
    },
    finish: function (...args) {
      console.warn("huks.finish interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, HuksResultMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(HuksResultMock)
        })
      }
    },
    abort: function (...args) {
      console.warn("huks.abort interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      const len = args.length
      if (typeof args[len - 1] === 'function') {
        args[len - 1].call(this, paramMock.businessErrorMock, HuksResultMock)
      } else {
        return new Promise((resolve, reject) => {
          resolve(HuksResultMock)
        })
      }
    },
    getSdkVersion: function (...args) {
      console.warn("huks.getSdkVersion interface mocked in the Previewer. How this interface works on the Previewer" +
        " may be different from that on a real device.")
      return paramMock.paramStringMock;
    },
    HuksErrorCode: {
      HUKS_SUCCESS: 0,
      HUKS_FAILURE: -1,
      HUKS_ERROR_BAD_STATE: -2,
      HUKS_ERROR_INVALID_ARGUMENT: -3,
      HUKS_ERROR_NOT_SUPPORTED: -4,
      HUKS_ERROR_NO_PERMISSION: -5,
      HUKS_ERROR_INSUFFICIENT_DATA: -6,
      HUKS_ERROR_BUFFER_TOO_SMALL: -7,
      HUKS_ERROR_INSUFFICIENT_MEMORY: -8,
      HUKS_ERROR_COMMUNICATION_FAILURE: -9,
      HUKS_ERROR_STORAGE_FAILURE: -10,
      HUKS_ERROR_HARDWARE_FAILURE: -11,
      HUKS_ERROR_ALREADY_EXISTS: -12,
      HUKS_ERROR_NOT_EXIST: -13,
      HUKS_ERROR_NULL_POINTER: -14,
      HUKS_ERROR_FILE_SIZE_FAIL: -15,
      HUKS_ERROR_READ_FILE_FAIL: -16,
      HUKS_ERROR_INVALID_PUBLIC_KEY: -17,
      HUKS_ERROR_INVALID_PRIVATE_KEY: -18,
      HUKS_ERROR_INVALID_KEY_INFO: -19,
      HUKS_ERROR_HASH_NOT_EQUAL: -20,
      HUKS_ERROR_MALLOC_FAIL: -21,
      HUKS_ERROR_WRITE_FILE_FAIL: -22,
      HUKS_ERROR_REMOVE_FILE_FAIL: -23,
      HUKS_ERROR_OPEN_FILE_FAIL: -24,
      HUKS_ERROR_CLOSE_FILE_FAIL: -25,
      HUKS_ERROR_MAKE_DIR_FAIL: -26,
      HUKS_ERROR_INVALID_KEY_FILE: -27,
      HUKS_ERROR_IPC_MSG_FAIL: -28,
      HUKS_ERROR_REQUEST_OVERFLOWS: -29,
      HUKS_ERROR_PARAM_NOT_EXIST: -30,
      HUKS_ERROR_CRYPTO_ENGINE_ERROR: -31,
      HUKS_ERROR_COMMUNICATION_TIMEOUT: -32,
      HUKS_ERROR_IPC_INIT_FAIL: -33,
      HUKS_ERROR_IPC_DLOPEN_FAIL: -34,
      HUKS_ERROR_EFUSE_READ_FAIL: -35,
      HUKS_ERROR_NEW_ROOT_KEY_MATERIAL_EXIST: -36,
      HUKS_ERROR_UPDATE_ROOT_KEY_MATERIAL_FAIL: -37,
      HUKS_ERROR_VERIFICATION_FAILED: -38,

      HUKS_ERROR_CHECK_GET_ALG_FAIL: -100,
      HUKS_ERROR_CHECK_GET_KEY_SIZE_FAIL: -101,
      HUKS_ERROR_CHECK_GET_PADDING_FAIL: -102,
      HUKS_ERROR_CHECK_GET_PURPOSE_FAIL: -103,
      HUKS_ERROR_CHECK_GET_DIGEST_FAIL: -104,
      HUKS_ERROR_CHECK_GET_MODE_FAIL: -105,
      HUKS_ERROR_CHECK_GET_NONCE_FAIL: -106,
      HUKS_ERROR_CHECK_GET_AAD_FAIL: -107,
      HUKS_ERROR_CHECK_GET_IV_FAIL: -108,
      HUKS_ERROR_CHECK_GET_AE_TAG_FAIL: -109,
      HUKS_ERROR_CHECK_GET_SALT_FAIL: -110,
      HUKS_ERROR_CHECK_GET_ITERATION_FAIL: -111,
      HUKS_ERROR_INVALID_ALGORITHM: -112,
      HUKS_ERROR_INVALID_KEY_SIZE: -113,
      HUKS_ERROR_INVALID_PADDING: -114,
      HUKS_ERROR_INVALID_PURPOSE: -115,
      HUKS_ERROR_INVALID_MODE: -116,
      HUKS_ERROR_INVALID_DIGEST: -117,
      HUKS_ERROR_INVALID_SIGNATURE_SIZE: -118,
      HUKS_ERROR_INVALID_IV: -119,
      HUKS_ERROR_INVALID_AAD: -120,
      HUKS_ERROR_INVALID_NONCE: -121,
      HUKS_ERROR_INVALID_AE_TAG: -122,
      HUKS_ERROR_INVALID_SALT: -123,
      HUKS_ERROR_INVALID_ITERATION: -124,
      HUKS_ERROR_INVALID_OPERATION: -125,

      HUKS_ERROR_INTERNAL_ERROR: -999,
      HUKS_ERROR_UNKNOWN_ERROR: -1000,
    },

    HuksKeyPurpose: {
      HUKS_KEY_PURPOSE_ENCRYPT: 1,
      HUKS_KEY_PURPOSE_DECRYPT: 2,
      HUKS_KEY_PURPOSE_SIGN: 4,
      HUKS_KEY_PURPOSE_VERIFY: 8,
      HUKS_KEY_PURPOSE_DERIVE: 16,
      HUKS_KEY_PURPOSE_WRAP: 32,
      HUKS_KEY_PURPOSE_UNWRAP: 64,
      HUKS_KEY_PURPOSE_MAC: 128,
      HUKS_KEY_PURPOSE_AGREE: 256,
    },

    HuksKeyDigest: {
      HUKS_DIGEST_NONE: 0,
      HUKS_DIGEST_MD5: 1,
      HUKS_DIGEST_SHA1: 10,
      HUKS_DIGEST_SHA224: 11,
      HUKS_DIGEST_SHA256: 12,
      HUKS_DIGEST_SHA384: 13,
      HUKS_DIGEST_SHA512: 14,
    },

    HuksKeyPadding: {
      HUKS_PADDING_NONE: 0,
      HUKS_PADDING_OAEP: 1,
      HUKS_PADDING_PSS: 2,
      HUKS_PADDING_PKCS1_V1_5: 3,
      HUKS_PADDING_PKCS5: 4,
      HUKS_PADDING_PKCS7: 5,
    },

    HuksCipherMode: {
      HUKS_MODE_ECB: 1,
      HUKS_MODE_CBC: 2,
      HUKS_MODE_CTR: 3,
      HUKS_MODE_OFB: 4,
      HUKS_MODE_CCM: 31,
      HUKS_MODE_GCM: 32,
    },

    HuksKeySize: {
      HUKS_RSA_KEY_SIZE_512: 512,
      HUKS_RSA_KEY_SIZE_768: 768,
      HUKS_RSA_KEY_SIZE_1024: 1024,
      HUKS_RSA_KEY_SIZE_2048: 2048,
      HUKS_RSA_KEY_SIZE_3072: 3072,
      HUKS_RSA_KEY_SIZE_4096: 4096,

      HUKS_ECC_KEY_SIZE_224: 224,
      HUKS_ECC_KEY_SIZE_256: 256,
      HUKS_ECC_KEY_SIZE_384: 384,
      HUKS_ECC_KEY_SIZE_521: 521,

      HUKS_AES_KEY_SIZE_128: 128,
      HUKS_AES_KEY_SIZE_192: 192,
      HUKS_AES_KEY_SIZE_256: 256,
      HUKS_AES_KEY_SIZE_512: 512,

      HUKS_CURVE25519_KEY_SIZE_256: 256,

      HUKS_DH_KEY_SIZE_2048: 2048,
      HUKS_DH_KEY_SIZE_3072: 3072,
      HUKS_DH_KEY_SIZE_4096: 4096,
    },

    HuksKeyAlg: {
      HUKS_ALG_RSA: 1,
      HUKS_ALG_ECC: 2,
      HUKS_ALG_DSA: 3,

      HUKS_ALG_AES: 20,
      HUKS_ALG_HMAC: 50,
      HUKS_ALG_HKDF: 51,
      HUKS_ALG_PBKDF2: 52,

      HUKS_ALG_ECDH: 100,
      HUKS_ALG_X25519: 101,
      HUKS_ALG_ED25519: 102,
      HUKS_ALG_DH: 103,
    },

    HuksKeyGenerateType: {
      HUKS_KEY_GENERATE_TYPE_DEFAULT: 0,
      HUKS_KEY_GENERATE_TYPE_DERIVE: 1,
      HUKS_KEY_GENERATE_TYPE_AGREE: 2,
    },

    HuksKeyFlag: {
      HUKS_KEY_FLAG_IMPORT_KEY: 1,
      HUKS_KEY_FLAG_GENERATE_KEY: 2,
      HUKS_KEY_FLAG_AGREE_KEY: 3,
      HUKS_KEY_FLAG_DERIVE_KEY: 4,
    },

    HuksKeyStorageType: {
      HUKS_STORAGE_TEMP: 0,
      HUKS_STORAGE_PERSISTENT: 1,
    },

    HuksSendType: {
      HUKS_SEND_TYPE_ASYNC: 0,
      HUKS_SEND_TYPE_SYNC: 1,
    },

    HuksTagType: {
      HUKS_TAG_TYPE_INVALID: 0,
      HUKS_TAG_TYPE_INT: 1,
      HUKS_TAG_TYPE_UINT: 2,
      HUKS_TAG_TYPE_ULONG: 3,
      HUKS_TAG_TYPE_BOOL: 4,
      HUKS_TAG_TYPE_BYTES: 5,
    },
    HuksTag: {
      HUKS_TAG_INVALID: 0,

      HUKS_TAG_ALGORITHM: 1,
      HUKS_TAG_PURPOSE: 2,
      HUKS_TAG_KEY_SIZE: 3,
      HUKS_TAG_DIGEST: 4,
      HUKS_TAG_PADDING: 5,
      HUKS_TAG_BLOCK_MODE: 6,
      HUKS_TAG_KEY_TYPE: 7,
      HUKS_TAG_ASSOCIATED_DATA: 8,
      HUKS_TAG_NONCE: 9,
      HUKS_TAG_IV: 10,

      HUKS_TAG_INFO: 11,
      HUKS_TAG_SALT: 12,
      HUKS_TAG_PWD: 13,
      HUKS_TAG_ITERATION: 14,

      HUKS_TAG_KEY_GENERATE_TYPE: 15,
      HUKS_TAG_DERIVE_MAIN_KEY: 16,
      HUKS_TAG_DERIVE_FACTOR: 17,
      HUKS_TAG_DERIVE_ALG: 18,
      HUKS_TAG_AGREE_ALG: 19,
      HUKS_TAG_AGREE_PUBLIC_KEY_IS_KEY_ALIAS: 20,
      HUKS_TAG_AGREE_PRIVATE_KEY_ALIAS: 21,
      HUKS_TAG_AGREE_PUBLIC_KEY: 22,
      HUKS_TAG_KEY_ALIAS: 23,
      HUKS_TAG_DERIVE_KEY_SIZE: 24,

      HUKS_TAG_ACTIVE_DATETIME: 201,

      HUKS_TAG_ORIGINATION_EXPIRE_DATETIME: 202,

      HUKS_TAG_USAGE_EXPIRE_DATETIME: 203,

      HUKS_TAG_CREATION_DATETIME: 204,

      HUKS_TAG_ALL_USERS: 301,
      HUKS_TAG_USER_ID: 302,
      HUKS_TAG_NO_AUTH_REQUIRED: 303,
      HUKS_TAG_USER_AUTH_TYPE: 304,
      HUKS_TAG_AUTH_TIMEOUT: 305,
      HUKS_TAG_AUTH_TOKEN: 306,

      HUKS_TAG_ATTESTATION_CHALLENGE: 501,
      HUKS_TAG_ATTESTATION_APPLICATION_ID: 502,
      HUKS_TAG_ATTESTATION_ID_BRAND: 503,
      HUKS_TAG_ATTESTATION_ID_DEVICE: 504,
      HUKS_TAG_ATTESTATION_ID_PRODUCT: 505,
      HUKS_TAG_ATTESTATION_ID_SERIAL: 506,
      HUKS_TAG_ATTESTATION_ID_IMEI: 507,
      HUKS_TAG_ATTESTATION_ID_MEID: 508,
      HUKS_TAG_ATTESTATION_ID_MANUFACTURER: 509,
      HUKS_TAG_ATTESTATION_ID_MODEL: 510,
      HUKS_TAG_ATTESTATION_ID_ALIAS: 511,
      HUKS_TAG_ATTESTATION_ID_SOCID: 512,
      HUKS_TAG_ATTESTATION_ID_UDID: 513,
      HUKS_TAG_ATTESTATION_ID_SEC_LEVEL_INFO: 514,
      HUKS_TAG_ATTESTATION_ID_VERSION_INFO: 515,

      HUKS_TAG_IS_KEY_ALIAS: 1001,
      HUKS_TAG_KEY_STORAGE_FLAG: 1002,
      HUKS_TAG_IS_ALLOWED_WRAP: 1003,
      HUKS_TAG_KEY_WRAP_TYPE: 1004,
      HUKS_TAG_KEY_AUTH_ID: 1005,
      HUKS_TAG_KEY_ROLE: 1006,
      HUKS_TAG_KEY_FLAG: 1007,
      HUKS_TAG_IS_ASYNCHRONIZED: 1008,
      HUKS_TAG_SECURE_KEY_ALIAS: 1009,
      HUKS_TAG_SECURE_KEY_UUID: 1010,
      HUKS_TAG_KEY_DOMAIN: 1011,

      HUKS_TAG_PROCESS_NAME: 10001,
      HUKS_TAG_PACKAGE_NAME: 10002,
      HUKS_TAG_ACCESS_TIME: 10003,
      HUKS_TAG_USES_TIME: 10004,
      HUKS_TAG_CRYPTO_CTX: 10005,
      HUKS_TAG_KEY: 10006,
      HUKS_TAG_KEY_VERSION: 10007,
      HUKS_TAG_PAYLOAD_LEN: 10008,
      HUKS_TAG_AE_TAG: 10009,
      HUKS_TAG_IS_KEY_HANDLE: 10010,

      HUKS_TAG_OS_VERSION: 10101,
      HUKS_TAG_OS_PATCHLEVEL: 10102,

      HUKS_TAG_SYMMETRIC_KEY_DATA: 20001,
      HUKS_TAG_ASYMMETRIC_PUBLIC_KEY_DATA: 20002,
      HUKS_TAG_ASYMMETRIC_PRIVATE_KEY_DATA: 20003,
    },
  }
}