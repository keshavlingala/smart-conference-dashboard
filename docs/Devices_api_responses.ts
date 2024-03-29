// 1) Get device list -

const res = {
  "status": "success", "message": "Devices fetched successfully!",
  "data": {
    "devices": [{
      "_id": "5f5078ea4d60a7001c4e1cfa",
      "owner": "5f4a65ea01581b00184c4b4a",
      "createdAt": "2020-09-03T05:02:34.406Z",
      "credentials": {"certificates": {"cloud": []}, "accessToken": "cd8c8e16-e2c0-42c6-9093-4fa66627a034"},
      "operations": {"deviceStatus": true, "deviceRules": []},
      "name": "ddio101",
      "type": {"deviceType": "TiSesnorTag"}
    }, {
      "_id": "5f51f6ee4d60a7001c4e1cfb",
      "owner": "5f4a65ea01581b00184c4b4a",
      "createdAt": "2020-09-04T08:12:30.888Z",
      "credentials": {
        "certificates": {
          "cloud": [{
            "GCP301": {
              "_id": "5f51f630756b3d001e239a9c",
              "clientCertificate": "-----BEGIN CERTIFICATE-----\nMIIDJjCCAg4CCQDx3rvkm5rBvzANBgkqhkiG9w0BAQsFADCBhjELMAkGA1UEBhMC\nSU4xCzAJBgNVBAgMAktBMQwwCgYDVQQHDANCTkcxEDAOBgNVBAoMB1ZpcnR1c2Ex\nDTALBgNVBAsMBEdDVFMxDjAMBgNVBAMMBWFkbWluMSswKQYJKoZIhvcNAQkBFhxk\nZXZlbG9wZXJzdXBwb3J0QHZpcnR1c2EuY29tMB4XDTIwMDkwNDA4MDkyMFoXDTIx\nMDgzMDA4MDkyMFowIzEhMB8GA1UEAwwYNWY1MWY2MzA3NTZiM2QwMDFlMjM5YTlj\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApCo3Ni3xZZ+ceXWiO+bB\nkm1cmuVv7VoXTzHfIqMzfUgZEpb9SmqnodF+YAIshppd5515/37+t9A6HJ/Nu0ih\ntah8X6PSXNm36BTdqFogsM7BNF1EOUYLe6xm1bWL3klFWMMR2S6WnKTrfb2WL558\nsfitfC73HA8wnJn4AN57fLG03MuLkb1F0HlX72CaMCg3bJBKIgO0sfx9jKiVQjNa\nSFZMgwIQXRN+ATPCJjiSB0gObuy1mbaJ5vLUapcingcQTf3McE1wbhfs04H6/wMx\nOfrcZ/MvSj6EjsQv9CCjw4Vo+PM7w1GgXFlDdTBvHAuAQrkXE7B6Oe2YG2no543J\nkQIDAQABMA0GCSqGSIb3DQEBCwUAA4IBAQAMKFVh0MFDYMyANSAt106UCDRsUs/g\nlSyJtKDtNLSifWjHOxUAMF8NDYEPA1YpcD6EIZ2HR/JJXVFZLs4N2Scjst7wC1L3\nQl+7np39vC9u6Oxd6/K+rJ7FT2867y7qEpPnO46Egus1C8q0YfGUaRiFs/KEbQKO\nbp6f3nJQIdUtyL0B55cmz8LvNy7caCcm/+ui8XMKlPU1OvtCGgLIlPJoeT6SQCqe\nUrcuYs/NU+LPYP7YZQ6URFcHXL7d4KgIP7AumQsrDhr03UnHObvkQAGi1bvL7LcQ\nQh31EGsQV6KY2v6vI9lgRR2nGQvP0RKGTFR+xiYU5cxKBJdSQsIa6V4d\n-----END CERTIFICATE-----\n",
              "privateKey": "-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEApCo3Ni3xZZ+ceXWiO+bBkm1cmuVv7VoXTzHfIqMzfUgZEpb9\nSmqnodF+YAIshppd5515/37+t9A6HJ/Nu0ihtah8X6PSXNm36BTdqFogsM7BNF1E\nOUYLe6xm1bWL3klFWMMR2S6WnKTrfb2WL558sfitfC73HA8wnJn4AN57fLG03MuL\nkb1F0HlX72CaMCg3bJBKIgO0sfx9jKiVQjNaSFZMgwIQXRN+ATPCJjiSB0gObuy1\nmbaJ5vLUapcingcQTf3McE1wbhfs04H6/wMxOfrcZ/MvSj6EjsQv9CCjw4Vo+PM7\nw1GgXFlDdTBvHAuAQrkXE7B6Oe2YG2no543JkQIDAQABAoIBAQCJsBqkp337BRbh\nTEdoxE8AeBcel2b8BP7d3m9PBuCtqCXXUKpamv/EGghLkCc2MgymsY7cOvB6zPug\nfGu6M93llc3TDXzngXfdAHs0s3sNsCudtsf83YHOFbgecGlCY+P04Y97v7Z05WHa\nEYQApoXhYzhmmqGJeDgGcKDwYani13V/AmLPBiBTPk13pJ3VOJFYFTa7nw58dX5v\nnzEPkIQYE+YiF5mHSnHRo1lEhb/E6nZxMh/onqAi5oAeMqOqrJiNxtpZOL95t03G\n98WMOGszK6UXMZqEObkm2+t8mBA14u4iv6ydsQGQOE66LkImqJyqRDdjeMvdJjyL\ntckUbUi9AoGBAM0tZdvuW0bRePhqRxgqXllBVOH85R0D8s9zEXjImc5oFx57HRax\nK9Q2gmPiY+Wo2auvKuVOhMbjnfoEbF0dyHFzk/e46dFHrZn0JcnuBMSwXLQx5KdN\nKIN8xEIqQFGpIz7nOtr7XP8btPt2PDgkmHDyh4xm4b+67h4VQ7ufE0zPAoGBAMzU\nKHwd51t9OMUr2JKziIz5dNsgTNWwnjn2yHY94EPY8bHVZprTRgeePz/3BGVN2Gdc\nhT/F47cXqZWCVfbbpMhp3eyBdhuqojIOPQSHPTxNrITjaLZusiweu4jCWPErilo3\n4iODFtnQmcd4PY/F7KXBVbeEcQaicJmm+sC5ZNufAoGAeYvzU56YpBNjvoX3J/Gx\ngt6ZEmdmsxGrvglEyHDN7ODtETmNueurM0Q3akSrOVoV2QckOkORlOEyrPIB4AfM\nvqjhd1cr7LaxuQpReJZwbLSttnH4KsQixAIdobS19aplHtaMnz1Zkicvx+f7NKc5\nR2/lrN8lzRdICLpALd3G6TECgYEAusEt8IyrZ2VzH4NswcVj2XWRMEHxDF0uxxbV\ni8m68uGY7VXvaXb8wPFuJfopTdx+VS+sZosdptCyVJkznBKD2h98sqkPcQZRQGZv\nB/Pux07i338g+EVRupyCzJy2z52tVbjiPRLHAO4LaC2fo7kIndD7QIpHK49sLwxq\nUNI4vW0CgYAJSgl4WaNqsEAWL6KSXnZRX7Uxcv+ObfABjYYysVvAhcfcDA/vro9W\nV+UiTXe5L5PbjDXA38Pev7V6B7z2PGIjSqA0RyAuJ0CSOkmUbVmCkoMcSXnFUBvH\nfHfwRz5cjaj70vQsJsXH3I0SbAqNdrLBn2W2M6Z3AvjTkIBvEClglQ==\n-----END RSA PRIVATE KEY-----\n"
            }
          }]
        }, "accessToken": "d330d58f-13ff-414e-8040-5e1217c5b053"
      },
      "operations": {"deviceStatus": true, "deviceRules": []},
      "name": "di12003",
      "type": {"deviceType": "TiSesnorTag"}
    }], "count": 2
  }
}


// 2) Create device -

const create = {
  "deviceType": "MedicalDevice",
  "deviceName": "TestDevice",
  "certificate": false,
  "metadata": {"static": {"staticData": "Staticvalue"}, "dynamic": {"dynamicData": "dynamicValue"}}
}


// 3) Enable/diable device -  api/iotone/devices/operation/5f5078ea4d60a7001c4e1cfa

const disbale = {"deviceStatus": false}

