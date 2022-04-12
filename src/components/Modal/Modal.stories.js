import { ref } from 'vue'
import Modal from './Modal.vue'
import { RobustButton } from '..'

export default {
  title: 'Ui/Modal',
  component: Modal,
  argTypes: {
    onModal: { action: 'Modal' },
    readonly: { control: { type: 'boolean' } },
    condensed: { control: { type: 'boolean' } },
    modelValue: { control: { type: 'text' } },
    outline: { control: { type: 'boolean' } },
    hint: { control: { type: 'text' } },
    error: { control: { type: 'text' } },
  },
}

const DefaultTemplate = (args) => ({
  template: ' <RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton><Modal v-bind="args">test</Modal>',
  components: { Modal, RobustButton },
  setup() {
    return { args }
  },
})

export const Default = DefaultTemplate.bind()

let opened = ref(false)
Default.args = {
  title: 'Modal title',
  opened: opened,
  'onUpdate:opened': (value) => {
    console.log('opeone')
    opened.value = value
  },
}

const SlideRightTemplate = (args) => ({
  template:
    ' <RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton><Modal slide-out-right v-bind="args">test</Modal>',
  components: { Modal, RobustButton },
  setup() {
    return { args }
  },
})

export const SlideRight = SlideRightTemplate.bind()
let openRight = ref(false)
SlideRight.args = {
  title: 'Modal title',
  opened: openRight,
  'onUpdate:opened': (value) => {
    console.log('opeone')
    opened.value = value
  },
}

const SlideLeftTemplate = (args) => ({
  template:
    ' <RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton><Modal slide-out-left v-bind="args">test</Modal>',
  components: { Modal, RobustButton },
  setup() {
    return { args }
  },
})

export const SlideLeft = SlideLeftTemplate.bind()
let openLeft = ref(false)
SlideLeft.args = {
  title: 'Modal title',
  opened: openLeft,
  'onUpdate:opened': (value) => {
    console.log('opeone')
    opened.value = value
  },
}

const LargeTemplate = (args) => ({
  template:
    ' <RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton><Modal size="lg" v-bind="args">test</Modal>',
  components: { Modal, RobustButton },
  setup() {
    return { args }
  },
})

export const Large = LargeTemplate.bind()
let openLarge = ref(false)
Large.args = {
  title: 'Modal title',
  opened: openLarge,
  'onUpdate:opened': (value) => {
    console.log('opeone')
    opened.value = value
  },
}
