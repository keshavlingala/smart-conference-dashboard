RULES COMPONENT

Overview:
As the project is about devices. Each device is associated with a device type and each device type has a set of rules.
This component contains a rules listing page and add a rule page.
Features:
1. List of existing rules: Set of rules for each device type are listed in the form of cards.
    Each card shows details like device type as the main title, number of rules per device type as a mat-chip,
    rule condition, selected actions and a button 'View more details' to get a brief information about the rules.

    Onclick of 'View more details' button a dialog box pops up which shows rule information in the form of a timeline. 
    Each rule has the information of creation date, selected action and rule condition.
   
2. Add a rule under a particular device type

After viewing the existing rules in a device type, if needed, the user can add a rule under a specific device type. A form comprising of the below details must be filled.
Fields to be filled:
The form is divided into two sections: 'Define the rule name' and 'Create Rule'
Part 1 : Define the rule name
  A. Rule name:
        - Text Field
        - Required
        - Example: Occupany 
  B. Device type
        - Dropdown
        - Required
        - Example: Ambient Sensing
  C. Group ID
        - Dropdown
        - Required
        - Example: 1Bd1t3QAHmhUCyMbVOF0Cnz8s

  Only after the Part 1 is filled succesfully (without any validation errors like required field not filled, 
  or not selected) we can move to Part 2. 
  Once we click on Next button Part 1 gets disabled and Create Rule sections get enabled. We can later edit the information
  in this part whenever required with the help of the edit button.

Part 2: Create Rule

    Shows a list of Paramenters like Humidity, Lights ON, Luminosity, Occupancy, Projector On and Temperature

  D. Actions
      Can select one among Start Meeting, End Meeting, Focus On and Turn on AC
        - Toggle Group
        - Required
        - Example: Start Meeting
  E. Condition
      With the help of the Condition Note on the right section of the page the user can specify a condition for the rule.
        - Required
        - Example: Occupancy>=20

  When on Part 2, if a change in Part 1 is required we can also edit the Part 1 information by clicking on the edit button located 
  adjacent to the title 'Define a rule name'. 

  After all the details are filled correctly, the user can click on the Create Rule button to create the rule or click on cancel button to 
  return to the 'List of existing rules' page.  


