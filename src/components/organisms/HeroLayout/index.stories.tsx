import {Story, Meta} from '@storybook/react/types-6-0';
import HeroLayout, {HeroLayoutProps} from '.';
import {
  twoItems,
  fourItems,
  allItems,
  DeathKnightAbilities,
  DreadLordAbilities,
  LichAbilities,
} from '../../fixtures';

export default {
  title: 'Organisms / Hero',
  component: HeroLayout,
  argTypes: {
    id: {
      control: {
        type: 'select',
        options: ['will', 'tgrh', 'thle', 'tint'],
      },
    },
    level: {
      control: {type: 'number', min: 0, max: 10, step: 1},
    },
    hitpoints: {
      control: {type: 'number', min: 0, max: 1200, step: 10},
    },
    hitpointsMax: {
      control: {type: 'number', min: 0, max: 1200, step: 10},
    },
    mana: {
      control: {type: 'number', min: 0, max: 500, step: 10},
    },
    manaMax: {
      control: {type: 'number', min: 0, max: 500, step: 10},
    },
    experience: {
      control: {type: 'number', min: 0, max: 2000, step: 10},
    },
    experienceMax: {
      control: {type: 'number', min: 0, max: 2000, step: 10},
    },
    reverse: {
      control: {type: 'boolean'},
    },
  },
} as Meta;

const Template: Story<HeroLayoutProps> = args => <HeroLayout {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'will',
  level: 3,
  hitpoints: 500,
  hitpointsMax: 1100,
  mana: 100,
  manaMax: 120,
  experience: 200,
  experienceMax: 2000,
  reverse: false,
};

export const DeathKnight = () => (
  <HeroLayout
    id={'Udea'}
    level={5}
    abilities={DeathKnightAbilities}
    items={allItems}
    hitpoints={350}
    hitpointsMax={750}
    mana={300}
    manaMax={330}
    experience={400}
    experienceMax={450}
  />
);

export const LichKing = () => (
  <HeroLayout
    id={'Ulic'}
    level={3}
    abilities={LichAbilities}
    items={fourItems}
    hitpoints={0}
    hitpointsMax={750}
    mana={330}
    manaMax={330}
    experience={400}
    experienceMax={450}
  />
);

export const DreadLord_reversed = () => (
  <HeroLayout
    id={'Udre'}
    level={1}
    abilities={DreadLordAbilities}
    items={twoItems}
    hitpoints={750}
    hitpointsMax={750}
    mana={50}
    manaMax={330}
    experience={0}
    experienceMax={450}
    reverse={true}
  />
);
