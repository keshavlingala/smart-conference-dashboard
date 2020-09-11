# DateView Timeline

## Components

1. TimelineComponent : It's just a container for the timeline-item where are the styling for the items are here

2. TimelineItemComponent: It's a list item where we can give template for each item in the data view it can be anything, for example you can write a template with an image, card, mixed with atleast about 100px of height

3. DataViewComponent(Main Component): It's a component that's using the about 2 components and having a card's title,  sub-title, description, and date 


## Customized Usage of timeline

```html
<app-timeline>
  <app-timeline-item>
    <!-- your content here -->
  </app-timeline-item>
</app-timeline>
``` 

We can aditionally pass a color input to each timeline item to configure the color of dots
using the color hex code as shown below

```html
<app-timeline>
    <app-timeline-item color="red"> 
        <!--This item's dot color will be red-->
    </app-timeline-item>
    <app-timeline-item color="#000"> 
        <!--This item's dot color will be #000-->
    </app-timeline-item>
</app-timeline>
```

#### Mobile Responsive View for devices less than `767px`

The Card will turn to right  side showing the timeline dots the left 
