import { addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import { withI18next } from "./decorators"

addDecorator(withKnobs)
addDecorator(withI18next())

export const parameters = {
    layout: 'centered',
    options: {
      name: 'Behave UI',
      panelPosition: 'right',
    },
  }
  