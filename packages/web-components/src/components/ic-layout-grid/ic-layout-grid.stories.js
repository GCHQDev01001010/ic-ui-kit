import { html } from "lit-html";

export default {
  title: "Web Components/Layout Grid",
  component: "ic-layout-grid",
};

const defaultArgs = {
  autoLayout: "grid",
};

export const Default = {
  render: () =>
    html`<div>
      <ic-layout-grid>
        <div>I am a div</div>
        <div>I am a div</div>
        <div>I am a div</div>
        <div>I am a div</div>
        <div>I am a div</div>
        <div>I am a div</div>
        <div>I am a div</div>
        <div>I am a div</div>
        <div>I am a div</div>
        <div>I am a div</div>
        <div>I am a div</div>
        <div>I am a div</div>
        <div>I am a div</div>
        <div>I am a div</div>
        <div>I am a div</div>
      </ic-layout-grid>
    </div>`,

  name: "Default",

  parameters: {
    layout: "fullscreen",
  },
};

export const AutoGrid = {
  render: () =>
    html`
      <ic-top-navigation app-title="ICDS" status="alpha" version="v0.0.7">
        <svg
          slot="app-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
          />
        </svg>
        <ic-search-bar
          slot="search"
          placeholder="Search"
          label="Search"
        ></ic-search-bar>
        <ic-navigation-button label="Notifications" slot="buttons">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            fill="#000000"
          >
            <path
              d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
            />
          </svg>
        </ic-navigation-button>
        <ic-navigation-item
          slot="navigation"
          label="Get started"
          href="#"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="navigation"
          label="Accessibility"
          href="#"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="navigation"
          label="Styles"
          href="#"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="navigation"
          label="Components"
          href="#"
          selected="true"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="navigation"
          label="Patterns"
          href="#"
        ></ic-navigation-item>
      </ic-top-navigation>

      <ic-hero
        heading="Everything I brew, I brew it for you"
        subheading="This news is hot off the French press."
      >
        <ic-button variant="primary" slot="interaction">Explore</ic-button>
        <ic-button variant="secondary" slot="interaction">
          Check out our new drinks
        </ic-button>
      </ic-hero>

      <ic-layout-grid auto-layout="grid">
        <ic-card-vertical 
          heading="Filter" 
        >
          <svg
            slot="image-top"
            class="card-image"
            viewBox="0 0 1600 1250"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect fill="#ff7700" width="1600" height="1600" y="-350" />
            <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
            <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
            <polygon fill="#c50022" points="-60 900 398 662 816 900" />
            <polygon fill="#a3001b" points="337 900 398 662 816 900" />
            <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
            <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
            <polygon fill="#b80066" points="641 695 886 900 367 900" />
            <polygon fill="#960052" points="587 900 641 695 886 900" />
            <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
            <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
            <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
            <polygon fill="#880088" points="943 900 1210 900 971 687" />
          </svg>
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#000000"
          >
            <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z"/>
          </svg>
        </ic-card-vertical>
        <ic-card-vertical 
          heading="Cappuccino" 
        >
          <svg
            slot="image-top"
            class="card-image"
            viewBox="0 0 1600 1250"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect fill="#ff7700" width="1600" height="1600" y="-350" />
            <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
            <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
            <polygon fill="#c50022" points="-60 900 398 662 816 900" />
            <polygon fill="#a3001b" points="337 900 398 662 816 900" />
            <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
            <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
            <polygon fill="#b80066" points="641 695 886 900 367 900" />
            <polygon fill="#960052" points="587 900 641 695 886 900" />
            <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
            <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
            <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
            <polygon fill="#880088" points="943 900 1210 900 971 687" />
          </svg>
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#000000"
          >
            <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z"/>
          </svg>
        </ic-card-vertical>
        <ic-card-vertical 
          heading="Cortado" 
        >
          <svg
            slot="image-top"
            class="card-image"
            viewBox="0 0 1600 1250"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect fill="#ff7700" width="1600" height="1600" y="-350" />
            <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
            <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
            <polygon fill="#c50022" points="-60 900 398 662 816 900" />
            <polygon fill="#a3001b" points="337 900 398 662 816 900" />
            <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
            <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
            <polygon fill="#b80066" points="641 695 886 900 367 900" />
            <polygon fill="#960052" points="587 900 641 695 886 900" />
            <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
            <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
            <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
            <polygon fill="#880088" points="943 900 1210 900 971 687" />
          </svg>
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#000000"
          >
            <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z"/>
          </svg>
        </ic-card-vertical>
        <ic-card-vertical 
          heading="Espresso" 
        >
          <svg
            slot="image-top"
            class="card-image"
            viewBox="0 0 1600 1250"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect fill="#ff7700" width="1600" height="1600" y="-350" />
            <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
            <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
            <polygon fill="#c50022" points="-60 900 398 662 816 900" />
            <polygon fill="#a3001b" points="337 900 398 662 816 900" />
            <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
            <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
            <polygon fill="#b80066" points="641 695 886 900 367 900" />
            <polygon fill="#960052" points="587 900 641 695 886 900" />
            <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
            <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
            <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
            <polygon fill="#880088" points="943 900 1210 900 971 687" />
          </svg>
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#000000"
          >
            <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z"/>
          </svg>
        </ic-card-vertical>
        <ic-card-vertical 
          heading="Latte" 
        >
          <svg
            slot="image-top"
            class="card-image"
            viewBox="0 0 1600 1250"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect fill="#ff7700" width="1600" height="1600" y="-350" />
            <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
            <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
            <polygon fill="#c50022" points="-60 900 398 662 816 900" />
            <polygon fill="#a3001b" points="337 900 398 662 816 900" />
            <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
            <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
            <polygon fill="#b80066" points="641 695 886 900 367 900" />
            <polygon fill="#960052" points="587 900 641 695 886 900" />
            <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
            <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
            <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
            <polygon fill="#880088" points="943 900 1210 900 971 687" />
          </svg>
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#000000"
          >
            <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z"/>
          </svg>
        </ic-card-vertical>
        <ic-card-vertical 
          heading="Flat white" 
        >
          <svg
            slot="image-top"
            class="card-image"
            viewBox="0 0 1600 1250"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect fill="#ff7700" width="1600" height="1600" y="-350" />
            <polygon fill="#cc0000" points="957 450 539 900 1396 900" />
            <polygon fill="#aa0000" points="957 450 872.9 900 1396 900" />
            <polygon fill="#c50022" points="-60 900 398 662 816 900" />
            <polygon fill="#a3001b" points="337 900 398 662 816 900" />
            <polygon fill="#be0044" points="1203 546 1552 900 876 900" />
            <polygon fill="#9c0036" points="1203 546 1552 900 1162 900" />
            <polygon fill="#b80066" points="641 695 886 900 367 900" />
            <polygon fill="#960052" points="587 900 641 695 886 900" />
            <polygon fill="#b10088" points="1710 900 1401 632 1096 900" />
            <polygon fill="#8f006d" points="1710 900 1401 632 1365 900" />
            <polygon fill="#aa00aa" points="1210 900 971 687 725 900" />
            <polygon fill="#880088" points="943 900 1210 900 971 687" />
          </svg>
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#000000"
          >
            <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z"/>
          </svg>
        </ic-card-vertical>
      </ic-layout-grid>

    <ic-footer
      description="The UK Intelligence Community Design System (ICDS) is a joint project by MI6, GCHQ, MI5, and partners."
      caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
    >
      <ic-footer-link slot="link" href="#">
        Accessibility
      </ic-footer-link>
      <ic-footer-link slot="link" href="#">
        Styles
      </ic-footer-link>
      <ic-footer-link slot="link" href="#">
        Components
      </ic-footer-link>
      <ic-footer-link slot="link" href="#">
        Patterns
      </ic-footer-link>
    </ic-footer>
    `,

  name: "Auto grid",

  parameters: {
    layout: "fullscreen",
  },
};

export const AutoForm = {
  render: () =>
    html`
      <ic-top-navigation app-title="ICDS" status="alpha" version="v0.0.7">
        <svg
          slot="app-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
          />
        </svg>
        <ic-search-bar
          slot="search"
          placeholder="Search"
          label="Search"
        ></ic-search-bar>
        <ic-navigation-button label="Notifications" slot="buttons">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            fill="#000000"
          >
            <path
              d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
            />
          </svg>
        </ic-navigation-button>
        <ic-navigation-item
          slot="navigation"
          label="Get started"
          href="#"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="navigation"
          label="Accessibility"
          href="#"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="navigation"
          label="Styles"
          href="#"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="navigation"
          label="Components"
          href="#"
          selected="true"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="navigation"
          label="Patterns"
          href="#"
        ></ic-navigation-item>
      </ic-top-navigation>

      <ic-layout-grid auto-layout="form">
        <div>
          <ic-typography id="form-heading" variant="h2"><h1>Order coffee</h1></ic-typography>
          <ic-typography id="form-instructions" apply-vertical-margins="true">Required fields are marked with an asterisk (*).</ic-typography>
        </div>
      </ic-layout-grid>

      <form aria-labelledby="form-heading" aria-describedby="form-instructions">
        <ic-layout-grid auto-layout="form">
          <ic-select 
            label="What coffee would you like?" 
            placeholder="Select an option..." 
            helper-text="Select one option from the list" 
            show-clear-button="true" 
            searchable="true"
            required="true"
          ></ic-select>

          <ic-radio-group
            name="milk"
            label="Select your milk"
            required="true"
          >
            <ic-radio-option value="oat" label="Oat"></ic-radio-option>
            <ic-radio-option value="soy" label="Soy"></ic-radio-option>
            <ic-radio-option value="pea" label="Pea"></ic-radio-option>
            <ic-radio-option value="none" label="No milk"></ic-radio-option>
          </ic-radio-group>

          <ic-checkbox-group label="Select your extras" name="extras">
            <ic-checkbox value="shot" label="Extra shot (+50p)"></ic-checkbox>
            <ic-checkbox value="sugar" label="Sugar" ></ic-checkbox>
            <ic-checkbox value="ice" label="Ice" ></ic-checkbox>
            <ic-checkbox value="cup" label="Takeaway cup (+50p)"></ic-checkbox>
          </ic-checkbox-group>

          <ic-text-field 
            rows="3"
            resize="true" 
            label="Do you have any allergies or dietary requirements?" 
            placeholder="Please enter…"
            name="dietary"
          ></ic-text-field>

          <div>
            <ic-button type="submit">Submit</ic-button>
            <ic-button type="reset" variant="tertiary">Reset</ic-button>
          </div>
        </ic-layout-grid>
      </form>
      
      <ic-footer
        description="The UK Intelligence Community Design System (ICDS) is a joint project by MI6, GCHQ, MI5, and partners."
        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
      >
        <ic-footer-link slot="link" href="#">
          Accessibility
        </ic-footer-link>
        <ic-footer-link slot="link" href="#">
          Styles
        </ic-footer-link>
        <ic-footer-link slot="link" href="#">
          Components
        </ic-footer-link>
        <ic-footer-link slot="link" href="#">
          Patterns
        </ic-footer-link>
      </ic-footer>

      <script>
        const select = document.querySelector("ic-select");
        select.options = [
          { label: "Cappuccino", value: "Cap" },
          { label: "Latte", value: "Lat" },
          { label: "Americano", value: "Ame" },
          { label: "Flat white", value: "Fla" },
          { label: "Mocha", value: "Moc" },
          { label: "Macchiato", value: "Mac" },
          { label: "Café au lait", value: "Caf" },
          { label: "Espresso", value: "Esp" },
          { label: "Cortado", value: "Cor" },
          { label: "Latte macchiato", value: "Lam" },
        ];
      </script>
    `,

  name: "Auto form",

  parameters: {
    layout: "fullscreen",
  },
};

export const Half = {
  render: () =>
    html`
      <ic-top-navigation app-title="ICDS" status="alpha" version="v0.0.7">
        <svg
          slot="app-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
          />
        </svg>
        <ic-search-bar
          slot="search"
          placeholder="Search"
          label="Search"
        ></ic-search-bar>
        <ic-navigation-button label="Notifications" slot="buttons">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            fill="#000000"
          >
            <path
              d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
            />
          </svg>
        </ic-navigation-button>
        <ic-navigation-item
          slot="navigation"
          label="Get started"
          href="#"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="navigation"
          label="Accessibility"
          href="#"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="navigation"
          label="Styles"
          href="#"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="navigation"
          label="Components"
          href="#"
          selected="true"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="navigation"
          label="Patterns"
          href="#"
        ></ic-navigation-item>
      </ic-top-navigation>

        <ic-layout-grid auto-layout="thirds-right">
          <div>Div one</div>
          <div>Div two</div>
          <div>Div three</div>
          <div>Div four</div>
          <div>Div five</div>
          <div>Div six</div>
          <div>Div seven</div>
          <div>Div eight</div>
          <div>Div nine</div>
          <div>Div ten</div>
          <div>Div eleven</div>
        </ic-layout-grid>
      
      <ic-footer
        description="The UK Intelligence Community Design System (ICDS) is a joint project by MI6, GCHQ, MI5, and partners."
        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
      >
        <ic-footer-link slot="link" href="#">
          Accessibility
        </ic-footer-link>
        <ic-footer-link slot="link" href="#">
          Styles
        </ic-footer-link>
        <ic-footer-link slot="link" href="#">
          Components
        </ic-footer-link>
        <ic-footer-link slot="link" href="#">
          Patterns
        </ic-footer-link>
      </ic-footer>
    `,

  name: "Half",

  parameters: {
    layout: "fullscreen",
  },
};

export const Custom = {
  render: () =>
    html`
      <ic-top-navigation app-title="ICDS" status="alpha" version="v0.0.7">
        <svg
          slot="app-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
          />
        </svg>
        <ic-search-bar
          slot="search"
          placeholder="Search"
          label="Search"
        ></ic-search-bar>
        <ic-navigation-button label="Notifications" slot="buttons">
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            fill="#000000"
          >
            <path
              d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
            />
          </svg>
        </ic-navigation-button>
        <ic-navigation-item
          slot="navigation"
          label="Get started"
          href="#"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="navigation"
          label="Accessibility"
          href="#"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="navigation"
          label="Styles"
          href="#"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="navigation"
          label="Components"
          href="#"
          selected="true"
        ></ic-navigation-item>
        <ic-navigation-item
          slot="navigation"
          label="Patterns"
          href="#"
        ></ic-navigation-item>
      </ic-top-navigation>

        <ic-layout-grid>
          <ic-layout-grid-item col-span=6 row-span=2>
            <div style="background-color:#1d70b8;color:white;height:100%">Div one</div>
          </ic-layout-grid-item>
          <ic-layout-grid-item col-span=6>
            <div style="background-color:#1d70b8;color:white;height:100%">Div two</div>
          </ic-layout-grid-item>
            <div style="background-color:#1d70b8;color:white;height:100%;grid-area:1 / 7 / auto / span 4;">Div three</div>
          <ic-layout-grid-item col-span=4>
            <div style="background-color:#1d70b8;color:white;height:100%">Div four</div>
          </ic-layout-grid-item>
          <ic-layout-grid-item col-span=4>
            <div style="background-color:#1d70b8;color:white">Div five</div>
          </ic-layout-grid-item>
          <div style="background-color:#1d70b8;color:white;height:100%">Div six</div>
          <div style="background-color:#1d70b8;color:white;height:100%">Div seven</div>
          <ic-layout-grid-item col-span=12 row-span=3>
            <div style="background-color:#1d70b8;color:white;height:100%">Div eight</div>
          </ic-layout-grid-item>
          <div style="background-color:#1d70b8;color:white;height:100%">Div nine</div>
          <div style="background-color:#1d70b8;color:white;height:100%">Div ten</div>
          <div style="background-color:#1d70b8;color:white;height:100%">Div eleven</div>
          <ic-layout-grid-item col-span=9>
            <div style="background-color:#1d70b8;color:white;height:100%">Div twelve</div>
          </ic-layout-grid-item>
          <ic-layout-grid-item col-span=4>
            <div style="background-color:#1d70b8;color:white;height:100%">Div thirteen</div>
          </ic-layout-grid-item>
        </ic-layout-grid>
      
      <ic-footer
        description="The UK Intelligence Community Design System (ICDS) is a joint project by MI6, GCHQ, MI5, and partners."
        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
      >
        <ic-footer-link slot="link" href="#">
          Accessibility
        </ic-footer-link>
        <ic-footer-link slot="link" href="#">
          Styles
        </ic-footer-link>
        <ic-footer-link slot="link" href="#">
          Components
        </ic-footer-link>
        <ic-footer-link slot="link" href="#">
          Patterns
        </ic-footer-link>
      </ic-footer>
    `,

  name: "Custom",

  parameters: {
    layout: "fullscreen",
  },
};

export const Playground = {
  render: (args) =>
    html`
      <div>
      <ic-layout-grid auto-layout=${args.autoLayout}>
        <div>Div one</div>
        <div>Div two</div>
        <div>Div three</div>
        <div>Div four</div>
        <div>Div five</div>
        <div>Div six</div>
        <div>Div seven</div>
        <div>Div eight</div>
        <div>Div nine</div>
        <div>Div ten</div>
        <div>Div eleven</div>
        <div>Div twelve</div>
        <div>Div thirteen</div>
        <div>Div fourteen</div>
        <div>Div fifteen</div>
        <div>Div sixteen</div>
        <div>Div seventeen</div>
        <div>Div eighteen</div>
      </ic-layout-grid>
    </div
    `,

  args: defaultArgs,

  argTypes: {
    autoLayout: {
      options: ["grid", "form", "full-width", "half", "thirds-right", "thirds-left", "quarters-right", "quarters-left"],
    },
  },

  name: "Playground",
};