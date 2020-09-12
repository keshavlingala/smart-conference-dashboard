Properties of app-my-card Component
--------------------------------------------------------------------------------------------------------------------------------
@Input('showDefaultContent'):boolean

Whether to show Default Content (Card Data) or not.  
If it is set to "true" then the data we are passing through app-my-card component will be shown.
If it is set to "false" then the Custom data will be shown i.e the data which we will be passing through app-my-card tag. Using
Custom data Content projection approch is applied.
---------------------------------------------------------------------------------------------------------------------------------
@Input('cardData'):Card[]

We need to pass the Data which we need to show.The Card array contain the Title , Footer and Content.
---------------------------------------------------------------------------------------------------------------------------------
@Input('setting'): Settings[]

We need to pass Settings also which contain more properties as follow:
Elements_Number : number  => The Number of Elements which we need to show per page.
color           : string  => In this we need to pass the name of the color. It is a optional parameter. Those designs using
                             color property would be applicabe to them.
icon            : string  => We need to pass the icon name. It's optional field. Only those designs using icon would be
 							 applicabe to them only.
design          : sring   => We need to pass the name of the design. For example "design1" , "design2", etc.
apipaginator    : boolean => If this flag is set to "true" then the whole data would be passed to the cardData and the 
                             pagination would be managed automatically. IF it is set to "false" the the data in chunks or 
                             packets would be passed.
column          : number  => the number of columns which we need to show. For example if its is 3 then 3 colums will be shown.
                             It is an optional field.
----------------------------------------------------------------------------------------------------------------------------------
@Output('MoveForward') : EventEmitter

This EventEmitter only works if apipaginator flag is set to false. This Event is emitted from app-my-card component to parent 
component, demanding next set to data when the forward arrow button is clicked which is present in the app-my-card component.
-----------------------------------------------------------------------------------------------------------------------------------
@Output('Movebackward') :EventEmitter;

This EventEmitter only works if apipaginator flag is set to false. This Event is emitted from app-my-card component to parent 
component, demanding previous set to data when the backward arrow button is clicked which is present in the app-my-card component.
------------------------------------------------------------------------------------------------------------------------------------
