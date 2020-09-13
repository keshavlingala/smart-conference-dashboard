OTA UPDATES

Overview:
As the project is about devices. Each device is associated with a device type and each device type has a set of OTA Updates.

Features:
1. List of existing OTA updates: Once the user selects a device type, ota updates for that device type are listed.
The listing is done in two ways:
  A. Cards: OTA updates from latest to old with the feasibility of pagination are displayed. Each card consists of the information of OTA name, device type, and date it was created on.
  B. Timeline: The OTA updates are shown in a sorted way, the most recent updates are displayed at the top. It also gives a choice to filter the updates according to date, ota version, ota name, and description.

2. Add an ota update under a particular device type
After viewing the existing updates, if needed, the user can add an ota update. A form comprising of the below details must be filled.
Fields to be filled:
  A. Ota name:
        - Text Field
        - Required
        - Example: FirmwareVersion
  B. Device type
        - Dropdown
        - Required
        - Example: Ambient Sensing
  C. Ota version
        - Text Field
        - Required
        - Example: 1.1
  D. Description
        - Text Field
        - Required
        - Example: FirstVersion
  E. Upload a file
        - Only one file can be uploaded, file can be dragged and dropped, and browsed.
          Once uploaded can be deleted too and has a feature of progress bar to show the time it will take to load.
          Shows the name of the file and size of the in bytes.
        - Required
