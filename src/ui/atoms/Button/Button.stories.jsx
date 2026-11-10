import { Button } from './Button';

export default {
  title: 'UI/Atoms/Button',
  component: Button,
};

export const Primary = { args: { children: 'Кнопка', variant: 'primary' } };
export const Danger = { args: { children: 'Скинути', variant: 'danger' } };
export const Secondary = { args: { children: 'Назад', variant: 'secondary' } };
export const Disabled = { args: { children: 'Неактивна', disabled: true } };