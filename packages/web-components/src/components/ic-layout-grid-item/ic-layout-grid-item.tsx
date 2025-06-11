

import { Component, Element, Host, Prop, State, Watch, h } from "@stencil/core";

@Component({
    tag: "ic-layout-grid-item",
    styleUrl: "ic-layout-grid-item.css",
    shadow: {
      delegatesFocus: true,
    },
  })
  export class LayoutGridItem {
  
    @Element() el: HTMLIcLayoutGridItemElement;

    @Prop() colSpan?: number = 1;
    @State() columnCss = `auto / span ${this.colSpan}`;
    @Watch("columnCss")
    watchColumnCssHandler(newColumnCss: string) {
        this.el.style.setProperty("grid-column", newColumnCss);
    };
    @Prop() rowSpan?: number = 1;
    @State() rowCss = `auto / span ${this.rowSpan}`;
    @Watch("rowCss")
    watchRowCssHandler(newRowCss: string) {
        this.el.style.setProperty("grid-row", newRowCss);
    };

    componentDidLoad(): void {
      this.el.style.setProperty("grid-column", this.columnCss);
      this.el.style.setProperty("grid-row", this.rowCss);
    };
    

    render() {
            return (
            <Host>
                <slot></slot>
            </Host>
            );
        }
      }