/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { html } from "lit-html";
import readme from "./readme.md";

export default {
  title: "Web Components/Time Selector",
  component: "ic-time-selector",
  parameters: {
    componentAPI: {
      data: readme,
    },
  },
};

/**
 * Gotta write them docs
 */
export const Default = {
  render: () => html`<ic-time-selector></ic-time-selector>`,
  name: "Default",
};

/**
 * Retrieving the time input value via `icChange` returns the time as a Date object.
 *
 * The event returns the Date object once hour, minute and second have been entered.
 */
export const IcChangeEvent = {
  render: () => html`<ic-time-selector
    ></ic-time-selector>
    <script>
      var tS = document.querySelector("ic-time-selector");
      tS.addEventListener("icChange", function (event) {
        console.log(event.detail.value, event.detail.utcValue);
      });
    </script>`,
  name: "icChange event",
};