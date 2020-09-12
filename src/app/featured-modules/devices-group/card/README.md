Properties of app-card Component
--------------------------------------------------------------------------------------------------------------------------------
@Input('tempData'):Card[]

We need to pass the Data which we need to show.The Card array contain the ID, Title , Footer and Content , display the data in
4 columns and 2 rows i.e 8 elements per page.
---------------------------------------------------------------------------------------------------------------------------------
@Output('sendData') : EventEmitter

This sendData EventEmitter will emit the id's of the selected cards from the app-card component to the parent component.
-----------------------------------------------------------------------------------------------------------------------------------
