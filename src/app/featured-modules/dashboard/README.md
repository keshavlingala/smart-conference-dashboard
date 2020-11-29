# Dashboard

Dashboard is a submodule that is part of congnisense which uses several third party libraries
for different types of charts


## Components List

 * DashboardHomeComponent,
 * DashboardAddWidgetComponent
 * DashboardComponent
 * LibHostDirective ( Angular Directive)

### Component Details

#### Dashboard Home Component

Dashboard home component is the wrapper class of dashboard which encloses the
form fields and fetches the saved dashboard configuration from servers 
and loads the dashboard component

#### Dashboard Component

Dashboard component is the host of all the widgets here the dashboard takes a single input from
a parent as an input
```typescript
export interface Dashboard {
  read?: any[];
  _id?: string;
  dashboardName: string;
  widgets: Widget[];
  createdBy?: string;
  createdAt?: string;
  updatedAt?: string;
}
```
this dashboard object consists of an array of widget configurations and little more details about the dashboard 
instance
 ##### Widget 
 ```typescript
export interface Widget {
  data: WidgetData;
  settings: Settings;
  _id: string;
  label: string;
  component: string;
  id: string;
  rows?: number;
  cols?: number;
  lib?: WidgetComponentSelection;
  widgetConfig?: GridsterItem;
}
```

Widget is configuration object which will take the following parameters.
Widget data is the domain specific widget data here is it used to pass the device configuration and 
that device specific data which can be filled in add dashboard component.

with the configuration given to the respective library the implementation will load the type of chart and 
fetch data from the server in real-time and update the respective charts in each widget 
this widget will be loaded dynamically from another module without intervening in any of the dashboard specific modules

#### Dashboard Add Widget Component

This component is used to add a new widget to the dashboard by filling up the form and selecting
the type of chart and preferred library to use the configuration will be saved in the app state
and in local storage then that will be loaded in dashboard component with the given widget configuration and respective library

When there are specific widgets that more device specific configuration to be given by the user then
we have to make a tiny component that just shows have the specific form fields for that data to be merged with
the widget data configuration the tiny component must implement the following interface

```typescript
export interface CustomForm {
  form: FormGroup;
}
``` 
> Adding more specific form fields must follow below procedure
* Add the component in the `dashboard/forms/` folder with respective component folder
that component must implement the given `CustomForm` interface with the form fields given in those FormGroup
* Finally, give the component name from the server to load up that set of custom form fields

#### LibHostDirective

##### Dynamic nature of component loading

In the dashboard component each widget is loaded dynamically based on the library configuration given form the server
where there is an angular directive in use for this purpose which takes the widget configuration and builds up and loads the
module specific to that configuration inside the host itself

The Libhost directive acts as the host for different libraries by passing in the respective
widget data to that module and loading the respective library 
> The Important part of the code that used for dynamic loading of components based on path is given below

```typescript
      import('../libs/' + this.widget.lib.componentPath).then(module => {
        const libClass = module[Object.keys(module).pop()];
        const component = this.factoryResolver
          .resolveComponentFactory<CustomLibrary>(libClass);
        const instance = this.viewContainerRef
          .createComponent(component);
        instance.instance.widget = this.widget;
      });
```
this loads the widget based on the given library from the path that fetched and selected by the end user

##### Third Party Libraries ( Integration Process )

> There is a specific procedure to integrate a third part library into the dashboard
 1. Make an angular component under `dashboard/libs/` with the respective library name and implement the template and integration code
 2. Make the component implement the `CustomLibrary` interface 
     ```typescript
    export interface CustomLibrary {
        widget: Widget;
    }
    ```
 3. When implemented with the CustomLibrary interface the Component will be getting the widget data in the `widget` class field from the dynamic loading
 4. Build and integrate with library with the widget configuration that consists of type of chart and more
 5. Fetch the Specific device data from that module itself and show it in the component

##### Charts Mapper 
 It's a simple mapping object that maps the different types of chart type names used in 
 different libraries and for us to use the consistent chart type names the mapper will be as follows
 
 ```typescript
    export const mapper = {
      google: {
        line: 'LineChart',
        bar: 'BarChart',
        pie: 'PieChart',
        gauge: 'Gauge'
      },
      chartist: {
        line: 'Line',
        bar: 'Bar',
        pie: 'Pie'
      },
      chartjs: {
        line: 'line',
        bar: 'bar',
        pie: 'pie'
      }
    };
```
This mapper could be used in different third party libraries to use the respective library specific names
