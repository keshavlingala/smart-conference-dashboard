import {ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef} from '@angular/core';
import {Widget} from '../dashboard-types.model';

@Directive({
  selector: '[appLibHost]'
})
export class LibHostDirective implements OnInit {
  @Input() widget: Widget;

  constructor(
    public viewContainerRef: ViewContainerRef,
    private factoryResolver: ComponentFactoryResolver
  ) {
  }

  ngOnInit(): void {
    if (this.widget.lib) {
      console.log(this.widget.lib);
      import('../libs/' + this.widget.lib.componentPath).then(module => {
        const libClass = module[Object.keys(module).pop()];
        const component = this.factoryResolver.resolveComponentFactory<WidgetLibrary>(libClass);
        const instance = this.viewContainerRef.createComponent(component);
        console.log(instance);
        instance.instance.widget = this.widget;
        // console.log(instance.instance.widget);
      });
      // import(this.widget.lib.componentPath).then(val => {
      //   console.log(val);
      // });
    }
  }
}

export interface WidgetLibrary {
  widget: Widget;
}


