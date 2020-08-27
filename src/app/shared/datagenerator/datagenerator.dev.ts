import * as Chance from 'chance';
import {RuleDevice} from "../../featured-modules/rules/rules.models";

export const chance = new Chance() as Chance.Chance;
export const ruleDeviceGenerator = (size = 20): RuleDevice[] => {
  const action = [
    'Turn On AC',
    'Turn Off AC',
    'Start Meeting',
    'End Meeting',
    'Turn On Projector',
    'Turn off Projector',
    'Focus On',
    'Focus Off'
  ]
  return Array.from({length: size}, () => {
    return {
      id: chance.string({numeric: false, symbols: false, length: 10}),
      name: chance.first() + ' Sensing',
      rules: Array.from({length: chance.integer({min: 2, max: 10})}, () => {
        return {
          action: {
            name: action[chance.integer({min: 0, max: action.length - 1})],
            icon: 'ac_unit'
          },
          condition: 'Occupancy>4',
          createdDate: chance.date().toDateString(),
          name: chance.last() + ' Check'
        }
      })
    }
  })
}
