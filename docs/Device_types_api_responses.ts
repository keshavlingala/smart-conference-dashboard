// 1) Get devicetype - api/iotone/devicetypes?pageNo=1&size=10

const devices = {
  "status": "success", "message": "Device types fetched successfully", "data": {
    "types": [{
      "permissions": {"read": [], "write": [], "control": []},
      "actions": ["Raise An Alarm"],
      "_id": "5f4f9324d51211002793a97b",
      "deviceType": "MedicalDevice",
      "attributes": [{
        "accId": ["AWS101"],
        "_id": "5f4f9324d51211002793a97c",
        "name": "SPO2",
        "dataType": "NUMBER",
        "securitySetting": 0
      }, {
        "accId": ["Azure201"],
        "_id": "5f4f9324d51211002793a97d",
        "name": "PR",
        "dataType": "NUMBER",
        "securitySetting": 0
      }],
      "owner": "5f4a65ea01581b00184c4b4a",
      "createdAt": "2020-09-02T12:42:12.583Z",
      "__v": 0
    }, {
      "permissions": {"read": [], "write": [], "control": []},
      "actions": ["Monitoring"],
      "_id": "5f5078a3d51211002793a97f",
      "deviceType": "TiSesnorTag",
      "attributes": [{
        "accId": ["AWS101"],
        "_id": "5f5078a3d51211002793a980",
        "name": "temperature",
        "dataType": "NUMBER",
        "securitySetting": 0
      }, {
        "accId": ["Azure201"],
        "_id": "5f5078a3d51211002793a981",
        "name": "humidity",
        "dataType": "NUMBER",
        "securitySetting": 0
      }, {
        "accId": ["GCP301"],
        "_id": "5f5078a3d51211002793a982",
        "name": "luminosity",
        "dataType": "NUMBER",
        "securitySetting": 0
      }],
      "owner": "5f4a65ea01581b00184c4b4a",
      "createdAt": "2020-09-03T05:01:23.981Z",
      "__v": 0
    }], "count": 2
  }
}

// 2) Create devicetype -

const create = {
  "deviceType": "testDeviceType",
  "actions": ["turn on ac, turn off ac"],
  "attributes": [{
    "name": "testattr1",
    "dataType": "STRING",
    "accId": ["GCP301"],
    "securitySetting": "0"
  }, {"name": "testattr2", "dataType": "NUMBER", "accId": ["Azure201"], "securitySetting": "1"}]
}
