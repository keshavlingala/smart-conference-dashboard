Overview:
The project works around devices. The devices have the properties of device type, device group, ota updates, rules, etc.
The device component contains a data table view page and add a device page.

1. Data Table Page:

    The first page viewed by the user would be the data table. This data table contains significant details like:
    
    A. Id, type, name, and creation date of multiple devices.
    
    B. Here in this case the data table's configuration is set up as to have 3 actions for each device, which will emit out
    of the table component when clicked by user and we can do appropriate action based on the `ActionChange` object
    
    C. The actions configutation has 3 actions and 2 bulk actions and operations are performed based on the selected field
    emitted by `selected`
    
    D. Each action and bulk action object should be given as `{name: 'action name', icon: 'icon name(material-icon)', iconOpp: 'opposite icon'(optional), color: 'accent'(optional)}`
    
    E. `config` is  *required*  input for the date table to be configured with object like `{ checkbox: true, pageSize: 5, pageSizeOptions: [5, 10, 15, 20, 50], searchBox: true }`
    where all are self-explanatory.
     
    B. Each record consists 3 buttons that are delete, disable and view more details.
        I.	Delete button
        II.	Disable button
        III.View more details button:  This fires up like a popup window which gives the user detailed information about a device.
      The popup contains two tabs named Attributes and Actions.
          Attributes:
              Has the information in the form of cards which has the utility of pagination to view more,cards.
              The cards contain information like Humidity, Occupany, Luminosity, Temperature, etc along with the dates the
              attributes were created on. It also has an input field to enter the access key.
          Actions:
              It has action details like Turn ON AC, Turn ON Lights, Projector ON, and Temperature Check.
              These actions can we enabled or disabled with the help of the slide toggler.


2. Add Devices Page:

    After viewing the data table if the user wishes to add a device the can visit this page.
    A form comprising of the below details must be filled.
    Fields to be filled:
      
    A. Device Type
        - Dropdown
        - Required Field
        - Example: Ambient Sensing
    B. Name
        - Text Field
        - Required Field
        - Example: Apple Device
    C. Authentication Type
        - Text Field
        - Required Field
        - Example: Access Token/ Certificate
    D. Static MetaData
        - Text Field
        - Required Field
        - Example: "staticData":"Staticvalue"
    E. Dynamic MetaData
        - Text Field
        - Optional Field
        - Example: "dynamicData":"dynamicValue"
