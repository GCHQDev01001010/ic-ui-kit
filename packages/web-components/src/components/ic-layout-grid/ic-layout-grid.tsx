import { Component, Element, Host, Prop, h } from "@stencil/core";

/* Notes
    - Overall form instructions should be outside of form
    so that they are read before SR user switches to forms mode - consider slots?
*/

@Component({
    tag: "ic-layout-grid",
    styleUrl: "ic-layout-grid.css",
    shadow: {
      delegatesFocus: true,
    },
  })
  export class LayoutGrid {

    @Prop() autoLayout?: "grid" | "form" | "full-width" | "half" | "thirds-right" | "thirds-left" | "quarters-right" | "quarters-left";
  
    @Element() el: HTMLIcLayoutGridElement;
  
    render() {
        const {
            autoLayout,
        } = this;
        return (
        <Host>
            <div class={{
                ["grid-container"]: true,
                [`auto-layout-${autoLayout}`]: !!autoLayout,
                ["full-width-in-mobile"]: !!autoLayout,
            }}>
                <slot></slot>
            </div>
        </Host>
        );
    }
  }
  