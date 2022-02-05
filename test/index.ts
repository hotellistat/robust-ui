import "../src/styles/tailwind.css";
// import "../node_modules/@hotellistat/robust-ui/dist/style.css"

import { computed, createApp, ref, watch } from "vue";
import App from "./App.vue";
import "global";


import {
  Button,
  Input,
  Checkbox,
  ContentBox,
  Calendar,
  Tabs,
  ContentPlaceholder,
  Modal,
  Select,
  Radio,
  Textarea,
  DatePicker,
  DaterangePicker,
  Separator,
  Notice,
  ColorPicker,
  Img,
  Popper,
  WidgetWrapper,
  TabsSwitch,
  Switch
} from "../dist/robust-ui.es.js";

const app = createApp(App);


app.component("hs-button", Button);
app.component("hs-content-placeholder", ContentPlaceholder);
app.component("hs-widget-wrapper", WidgetWrapper);
app.component("hs-calendar", Calendar);
app.component("hs-checkbox", Checkbox);
app.component("hs-content-box", ContentBox);
app.component("hs-date-picker", DatePicker);
app.component("hs-daterange-picker", DaterangePicker);
app.component("hs-input", Input);
app.component("hs-modal", Modal);
app.component("hs-popper", Popper);
app.component("hs-select", Select);
app.component("hs-switch", Switch);
app.component("hs-notice", Notice);
app.component("hs-separator", Separator);
app.component("hs-tabs", Tabs);
app.component("hs-radio", Radio);
app.component("hs-textarea", Textarea);
app.component("hs-color-picker", ColorPicker);
app.component("hs-img", Img);
app.component("hs-tabs-switch", TabsSwitch);


app.mount("#app");