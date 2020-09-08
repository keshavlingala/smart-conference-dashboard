// 1)get rule list -

const rules = {
  "status": "success",
  "message": "Rules fetched successfully",
  "data": {
    "rules": [{
      "_id": "5f4fa32017a0aa0027301bcf",
      "actions": ["Raise An Alarm"],
      "groupIds": ["5f4fa2f0dbd8c900279ec0c1"],
      "deviceIds": [],
      "condition": "PR>=89",
      "createdAt": "2020-09-02T13:50:24.177Z",
      "createdBy": "vishwa@virtusa.com",
      "ruleName": "AbnormalCondition",
      "updatedAt": "2020-09-02T13:50:24.177Z",
      "type": {"deviceType": "MedicalDevice"}
    }], "total": 1
  }
}

// 2) Create rule -

const create = {
  "ruleName": "test rule",
  "condition": "Pr > 100",
  "actions": ["Raise An Alarm"],
  "deviceType": "MedicalDevice",
  "groupIds": ["5f4f9324d51211002793a97e"]
}
