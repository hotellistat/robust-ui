import '../src/styles/tailwind.css'
// import "../node_modules/@hotellistat/robust-ui/dist/style.css"

import { createApp } from 'vue'
import App from './App.vue'
import 'global'

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
  Switch,
} from '../dist/robust-ui.es.js'

const app = createApp(App)

app.component('HsButton', Button)
app.component('HsContentPlaceholder', ContentPlaceholder)
app.component('HsWidgetWrapper', WidgetWrapper)
app.component('HsCalendar', Calendar)
app.component('HsCheckbox', Checkbox)
app.component('HsContentBox', ContentBox)
app.component('HsDatePicker', DatePicker)
app.component('HsDaterangePicker', DaterangePicker)
app.component('HsInput', Input)
app.component('HsModal', Modal)
app.component('HsPopper', Popper)
app.component('HsSelect', Select)
app.component('HsSwitch', Switch)
app.component('HsNotice', Notice)
app.component('HsSeparator', Separator)
app.component('HsTabs', Tabs)
app.component('HsRadio', Radio)
app.component('HsTextarea', Textarea)
app.component('HsColorPicker', ColorPicker)
app.component('HsImg', Img)
app.component('HsTabsSwitch', TabsSwitch)

app.mount('#app')
