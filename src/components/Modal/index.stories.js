import { ref } from 'vue';
import Modal from './index.vue';
import { RobustButton } from '..';

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
};

const DefaultTemplate = (args) => ({
  template:
    ' <RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton><Modal v-bind="args">test</Modal>',
  components: { Modal, RobustButton },
  setup() {
    return { args };
  },
});

export const Default = DefaultTemplate.bind();

const opened = ref(true);

Default.args = {
  title: 'Modal title',
  opened: opened,
  'onUpdate:opened': (value) => {
    console.log('opeone');
    opened.value = value;
  },
};

const SlideRightTemplate = (args) => ({
  template:
    ' <RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton><Modal slide-out-right v-bind="args">test</Modal>',
  components: { Modal, RobustButton },
  setup() {
    return { args };
  },
});

export const SlideRight = SlideRightTemplate.bind();

SlideRight.args = {
  title: 'Modal title',
  opened: opened,
  'onUpdate:opened': (value) => {
    console.log('opeone');
    opened.value = value;
  },
};

const SlideLeftTemplate = (args) => ({
  template:
    ' <RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton><Modal slide-out-left v-bind="args">test</Modal>',
  components: { Modal, RobustButton },
  setup() {
    return { args };
  },
});

export const SlideLeft = SlideLeftTemplate.bind();

SlideLeft.args = {
  title: 'Modal title',
  opened: opened,
  'onUpdate:opened': (value) => {
    console.log('opeone');
    opened.value = value;
  },
};

const LargeTemplate = (args) => ({
  template:
    ' <RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton><Modal opened="open1" v-bind="args">test</Modal>',
  components: { Modal, RobustButton },
  setup() {
    return { args };
  },
});

export const Large = LargeTemplate.bind();

Large.args = {
  title: 'Modal title',
  opened: opened,
  'onUpdate:opened': (value) => {
    console.log('opeone');
    opened.value = value;
  },
};

const SequentialTemplate = (args) => ({
  template: `<RobustButton @click="open1 = true">modal open {{args.opened}}</RobustButton>
    <Modal v-model:opened="open1" @close="open2 = true">test 1</Modal>
    <Modal v-model:opened="open2" @close="open1 = true">test 2</Modal>
    `,
  components: { Modal, RobustButton },
  setup() {
    const open1 = ref(false);
    const open2 = ref(false);

    return { args, open1, open2 };
  },
});

export const Sequential = SequentialTemplate.bind();

Sequential.args = {
  title: 'Modal title',
  opened: opened,
  'onUpdate:opened': (value) => {
    console.log('opeone');
    opened.value = value;
  },
};

const OverlayTemplate = (args) => ({
  template: `<RobustButton @click="args.opened.value = true">modal open {{args.opened}}</RobustButton>
  <Modal v-bind="args">
  <RobustButton @click="args.overlayOpened.value = true">modal open {{args.overlayOpened}}</RobustButton>
  </Modal>
  <Modal :opened="args.overlayOpened">
  overlay
  </Modal>`,
  components: { Modal, RobustButton },
  setup() {
    return { args };
  },
});

export const Overlay = OverlayTemplate.bind();

const overlayOpened = ref(false);

Overlay.args = {
  title: 'Modal title',
  opened: opened,
  overlayOpened,
  'onUpdate:opened': (value) => {
    console.log('opeone');
    opened.value = value;
  },
};
