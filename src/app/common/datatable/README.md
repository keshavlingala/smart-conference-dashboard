# Data Table

## Intro
A Completely configurable table with generic data type



## Usage
To use the data table 

```html
<app-data-table [config]="configObject"
                [actions]="dataTableActions"
                [data]="data"
                [keys]="['_id', 'type', 'name', 'createdAt']"
                [columnNames]="['ID','Type', 'Name(User Defined)', ' Created Date']"
                (actionClick)="actionChange($event)"
                (filterChange)="filterChange($event)"
                (bulkActionClick)="actionChange($event)"
>
</app-data-table>
```

## Inputs
1. A Configuration Object

    ```typescript
    interface DataTableConfig {
        checkbox: boolean;
        pageSize: number;
        pageSizeOptions: number[];
        searchBox: boolean;
    }
    ```

2. actions configuration object

    ```typescript
        export interface DataTableActions {
          actions: Action[];
          bulkActions: BulkAction[];
        }
        
        export interface Action {
          name: string;
          icon: string;
          iconOpp?: string;
          color?: 'primary' | 'accent' | 'warn';
        }
        
        export interface BulkAction {
          name: string;
          icon: string;
          color?: 'primary' | 'accent' | 'warn';
        }
    ```

3. Keys Input

where it takes the an array of keys that should be shown in data table columns
*Note* depends on another attribute `columnNames` where is takes another array to show the column header names 

example:
```typescript
    const keys: string[] = ['id', 'type', 'name', 'createdDate',]
    const columnNames = ['ID', 'Type', 'Name(User Defined)', ' Created Date',];
```
*Note* number of elements in columns must be same as number of keys sent


## Outputs

There are three event emitters for bulk actions and actions it will output an `ActionChange` object
with the selected value as the action performed
to perform appropriate operations in the parent component

For any button click in action it will emit an object like
for action the selected will be a object directly and for bulk action it will be an array of objects
 
```typescript
export interface ActionChange {
  selected: any;
  type: 'action' | 'bulk-action';
  name: string;
}
``` 

