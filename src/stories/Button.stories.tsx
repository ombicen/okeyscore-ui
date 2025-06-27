import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "../components/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    loading: { control: "boolean" },
    fullWidth: { control: "boolean" },
    icon: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Default Button",
    variant: "default",
    size: "medium",
  },
};

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
    size: "medium",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
    size: "medium",
  },
};

export const Success: Story = {
  args: {
    children: "Success Button",
    variant: "success",
    size: "medium",
  },
};

export const Warning: Story = {
  args: {
    children: "Warning Button",
    variant: "warning",
    size: "medium",
  },
};

export const Danger: Story = {
  args: {
    children: "Danger Button",
    variant: "danger",
    size: "medium",
  },
};

export const Small: Story = {
  args: {
    children: "Small Button",
    variant: "primary",
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    children: "Medium Button",
    variant: "primary",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    variant: "primary",
    size: "large",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
};

export const Loading: Story = {
  args: {
    children: "Loading...",
    loading: true,
    variant: "primary",
    size: "medium",
  },
};

export const WithIcon: Story = {
  args: {
    children: "With Icon",
    icon: (
      <span role="img" aria-label="star">
        ⭐
      </span>
    ),
    variant: "primary",
    size: "medium",
  },
};

export const FullWidth: Story = {
  args: {
    children: "Full Width Button",
    fullWidth: true,
    variant: "primary",
    size: "medium",
  },
};

export const SizeWithIcon: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button
        size="small"
        icon={
          <span role="img" aria-label="star">
            ⭐
          </span>
        }
      >
        Small
      </Button>
      <Button
        size="medium"
        icon={
          <span role="img" aria-label="star">
            ⭐
          </span>
        }
      >
        Medium
      </Button>
      <Button
        size="large"
        icon={
          <span role="img" aria-label="star">
            ⭐
          </span>
        }
      >
        Large
      </Button>
    </div>
  ),
};
