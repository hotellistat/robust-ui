import EmptyState from './index.vue';
import { PhWarning } from '@dnlsndr/vue-phosphor-icons';
import RobustButton from '../Button/index.vue';
import RobustImg from '../Img/index.ts';

export default {
  title: 'Ui/EmptyState',
  component: EmptyState,
  argTypes: {
    title: { control: { type: 'text', default: 'Title' } },
  },
};

const DefaultTemplate = (args) => ({
  template: `<EmptyState v-bind="args" />`,
  components: { EmptyState },
  setup() {
    return { args };
  },
});

export const Default = DefaultTemplate.bind();

Default.args = {
  title: 'Input title',
  description:
    'This is an input hint. It is supposed to help the user understand the reason this input exists and what it does',
  icon: PhWarning,
};

const CallToActionTemplate = (args) => ({
  template: `<EmptyState v-bind="args" >
  <RobustButton>Call to action</RobustButton>
  </EmptyState>`,
  components: { EmptyState, RobustButton },
  setup() {
    return { args };
  },
});

export const CallToAction = CallToActionTemplate.bind();

CallToAction.args = {
  title: 'Input title',
  description:
    'This is an input hint. It is supposed to help the user understand the reason this input exists and what it does',
  icon: PhWarning,
};

const CustomIconTemplate = (args) => ({
  template: `<EmptyState v-bind="args" >
  <template #icon>
    <RobustImg src="/assets/empty.svg" width="256"/>
  </template>
  <RobustButton>Call to action</RobustButton>
  </EmptyState>`,
  components: { EmptyState, RobustButton, RobustImg },
  setup() {
    return { args };
  },
});

export const CustomIcon = CustomIconTemplate.bind();

CustomIcon.args = {
  title: 'Input title',
  description:
    'This is an input hint. It is supposed to help the user understand the reason this input exists and what it does',
  icon: PhWarning,
};
