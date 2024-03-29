// 1) get device groups -

var l = {
  "status": "success", "message": "Fetched groups successfully!",
  "data": {
    "groups": [{
      "_id": "5f4f9324d51211002793a97e",
      "groupName": "MedicalDevice",
      "devices": ["5f51f8284d60a7001c4e1cfd"],
      "owner": "5f4a65ea01581b00184c4b4a",
      "createdAt": "2020-09-02T12:42:12.598Z",
      "permissions": {"read": [], "write": [], "control": []},
      "rules": [],
      "deviceTypes": ["MedicalDevice"],
      "groupType": "Single"
    }, {
      "_id": "5f4fa2f0dbd8c900279ec0c1",
      "groupName": "MedicalGroup2",
      "devices": [],
      "owner": "5f4a65ea01581b00184c4b4a",
      "createdAt": "2020-09-02T13:49:36.093Z",
      "permissions": {"read": [], "write": [], "control": []},
      "rules": ["5f4fa32017a0aa0027301bcf"],
      "deviceTypes": ["MedicalDevice"],
      "groupType": "Single"
    }, {
      "_id": "5f5078a3d51211002793a983",
      "groupName": "TiSesnorTag",
      "devices": ["5f5078ea4d60a7001c4e1cfa", "5f51f6ee4d60a7001c4e1cfb", "5f51f7bb4d60a7001c4e1cfc"],
      "owner": "5f4a65ea01581b00184c4b4a",
      "createdAt": "2020-09-03T05:01:23.989Z",
      "permissions": {"read": [], "write": [], "control": []},
      "rules": [],
      "deviceTypes": ["TiSesnorTag"],
      "groupType": "Single"
    }, {
      "_id": "5f51f986d51211002793a987",
      "groupName": "testDeviceType",
      "devices": [],
      "owner": "5f4a65ea01581b00184c4b4a",
      "createdAt": "2020-09-04T08:23:34.598Z",
      "permissions": {"read": [], "write": [], "control": []},
      "rules": [],
      "deviceTypes": ["testDeviceType"],
      "groupType": "Single"
    }, {
      "_id": "5f51f9c9dbd8c900279ec0c2",
      "groupName": "testgroup",
      "devices": ["5f51f8284d60a7001c4e1cfd"],
      "owner": "5f4a65ea01581b00184c4b4a",
      "createdAt": "2020-09-04T08:24:41.926Z",
      "permissions": {"read": [], "write": [], "control": []},
      "rules": [],
      "deviceTypes": ["MedicalDevice"],
      "groupType": "Single"
    }], "count": 5
  }
}


// 2) create device groups (homogeneous) -

let k = {
  "groupName": "testgroup",
  "deviceTypes": ["MedicalDevice"],
  "groupType": "Single",
  "devices": ["5f51f8284d60a7001c4e1cfd"]
}

// 3) Create device group (heterogeneous) -

let d = {
  "groupName": "testgroups",
  "deviceTypes": ["MedicalDevice", "TiSesnorTag"],
  "groupType": "Multi",
  "devices": ["5f51f6ee4d60a7001c4e1cfb", "5f51f8284d60a7001c4e1cfd"]
}
