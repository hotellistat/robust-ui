import { defineRule } from 'vee-validate'
import { required, email, numeric, min } from '@vee-validate/rules'

defineRule('required', required)
defineRule('email', email)
defineRule('numeric', numeric)
defineRule('min', min)

defineRule('password', (value) => {
  const result = value.match(
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
  )

  if (result) {
    return true
  }

  return 'Password invalid'
})

defineRule(
  'passwordRepeat',
  (value, target: string[] | Record<string, string>, ctx) => {
    if (!target) {
      return false
    }

    const targetValue: string = Array.isArray(target)
      ? target[0]
      : target.target

    if (value === ctx.form[targetValue]) {
      return true
    }

    return 'Passwords must match'
  }
)

// defineRule("passwordRepeat", {
//   params: ["repeat"],
//   validate: (value, [target], ctx) => {
//     if (repeat) {
//       return value === repeat;
//     }
//     return false;
//   },
//   message: "Passwords need to match"
// });
