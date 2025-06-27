import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "../components/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "success", "warning", "danger"],
    },
    loading: { control: "boolean" },
    fullWidth: { control: "boolean" },
    icon: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const Success: Story = {
  args: {
    children: "Success Button",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    children: "Warning Button",
    variant: "warning",
  },
};

export const Danger: Story = {
  args: {
    children: "Danger Button",
    variant: "danger",
  },
};

export const Loading: Story = {
  args: {
    children: "Loading...",
    loading: true,
    variant: "primary",
  },
};

export const WithIcon: Story = {
  args: {
    children: "With Icon",
    icon: <span role="img" aria-label="star">⭐</span>,
    variant: "primary",
  },
};

export const FullWidth: Story = {
  args: {
    children: "Full Width Button",
    fullWidth: true,
    variant: "primary",
  },
};
