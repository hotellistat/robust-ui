import { computed } from '@vue/runtime-core'
import FormWizard from './FormWizard.vue'
import FormWizardTab from './FormWizardTab.vue'
import Checkbox from '../Checkbox/Checkbox.vue'
import Input from '../Input/Input.vue'
import DaterangePicker from '../DatePicker/DaterangePicker.vue'
import { ref, defineComponent, onMounted } from 'vue'

export default {
  title: 'Ui/FormWizard',
  component: FormWizard,
  argTypes: {
    validateOnBack: { control: { type: 'boolean' } },
  },
}

let DataComponent = defineComponent({
  props: {
    data: {
      type: Object
    }
  },
  template: `
    <div class="flex flex-col py-3 gap-y-3">
      <div>Name: {{ data.name }}</div>
      <div>Surname: {{ data.surname }}</div>
      <div>Address: {{ data.address }}</div>
      <div v-if="data.date_range">Departure date: {{ data.date_range[0] }}</div>
      <div v-if="data.date_range">Return date: {{ data.date_range[1] }}</div>
    </div>
  `
})

let FlightForm = defineComponent({
  template: `
    <div class="flex flex-col py-3">
      <DaterangePicker @update:dateRange="updateDateRange" :date-range="dateRange"></DaterangePicker>
    </div>
  `,
  components: {
    DaterangePicker,
    Checkbox
  },
  setup() {
    const date = []
    const dateRange = ref(date)
    const compareDateRange = ref(date)

    const updateDateRange = (updatedDate) => {
      dateRange.value = updatedDate
    }

    const validate = () => {
      if(dateRange.value.length < 2) return { error: "Please select a date range." }
      return {
        data: {
          date_range: dateRange.value
        }
      }
    }

    return {
      date, 
      // surname,
      // address,
      validate,
      dateRange,
      compareDateRange,
      updateDateRange
    }
  }
})

let ContactFormComponent = defineComponent({
  template: `
    <div class="flex flex-col gap-y-3">
      <div class="flex sm:flex-row flex-col gap-x-3">
        <div class="flex-1">
          <Input v-model="name" title="Name"/>
        </div>
        <div class="flex-1">
          <Input v-model="surname" title="Surname"/>
        </div>
      </div>
      <Input v-model="address" title="Address"></Input>
      <Checkbox v-model="tos" title="Terms of Service"></Checkbox>
    </div>
  `,
  components: {
    Input,
    Checkbox
  },
  setup() {
    let name = ref("")
    let nameError = ref("")

    let surname = ref("")
    let surnameError = ref("")

    let address = ref("")
    let addressError = ref("")

    let tos = ref(false)

    const validate = () => {
      if(name.value.length < 2) return { error: "A name must contain at least 2 characters." }
      if(surname.value.length < 2) return { error: "A surname must contain at least 2 characters." }
      if(address.value.length < 2) return { error: "An address must contain at least 2 characters." }
      if(!tos.value) return { error: "You have to accept ToS." }
      return { 
        data: { 
          name: name.value,
          surname: surname.value,
          address: address.value
        }
      }
    }

    return {
      name, 
      surname,
      address,
      tos,
      nameError,
      surnameError,
      addressError,
      validate
    }
  }
})

const DefaultTemplate = (args) => ({
  template: `
    <FormWizard :number-of-displayed-steps="5" @on-complete="completed" @on-error="error" @on-validate="test" v-bind="args">
      <FormWizardTab title="Test 1">
        <h1>test 1</h1>
      </FormWizardTab>
      <FormWizardTab title="Test 2">
        <h1>test 2</h1>
      </FormWizardTab>
      <FormWizardTab title="Test 3">
        <h1>test 3</h1>
      </FormWizardTab>
      <FormWizardTab :before-change="validateContactForm" title="Contact form">
        <ContactFormComponent ref="contactFormComponent"/>
      </FormWizardTab>
      <FormWizardTab title="Flight date" :before-change="validateFlightDate">
        <FlightForm ref="flightForm"/>
      </FormWizardTab>
      <FormWizardTab title="Your data">
        <DataComponent :data="form"/>
      </FormWizardTab>
      <FormWizardTab title="Your data 2">
        <DataComponent :data="form"/>
      </FormWizardTab>
    </FormWizard>
  `,
  components: { FormWizard, FormWizardTab, ContactFormComponent, FlightForm, DataComponent },
  setup() {

    let form = ref({})

    let contactFormComponent = ref()
    let flightForm = ref()
    
    const validateFlightDate = async () => {
        const { error, data } = flightForm.value.validate()
        if(error) {
          throw error;
        }
        
        Object.assign(form.value, data)
        console.log(form.value)
        return true
    }

    const validateContactForm = async () => {
      const { error, data } = contactFormComponent.value.validate()
      if(error) {
        throw error;
      }
      
      Object.assign(form.value, data)
      console.log(form.value)
      return true
  }
    
    return { args, validateContactForm, validateFlightDate, flightForm, contactFormComponent, form }
  },
})

export const Default = DefaultTemplate.bind({})
Default.args = {
    validateOnBack: false,
}
