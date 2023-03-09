import { FC } from "react";

type ButtonProps = {
  text: string;
  onClick: () => void;
  color?: 'blue' | 'red';
}

export const Button: FC<ButtonProps> = ({ text, onClick, color = 'blue' }) => {
  return <button onClick={onClick} style={{ color }}>{text}</button>;
};
