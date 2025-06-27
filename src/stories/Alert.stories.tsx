import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Alert from "../components/Alert";
import Button from "../components/Button";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["info", "success", "warning", "danger"],
    },
    dismissible: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    variant: "info",
    title: "Information",
    children:
      "This is an informational alert with useful details and guidance for the user.",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    title: "Success!",
    children:
      "Your action was completed successfully! The changes have been saved.",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Warning",
    children:
      "Please be careful with this action. It cannot be undone once completed.",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    title: "Error",
    children:
      "Something went wrong. Please try again or contact support if the problem persists.",
  },
};

export const WithoutTitle: Story = {
  args: {
    variant: "info",
    children:
      "This alert doesn't have a title, just the message content for simple notifications.",
  },
};

export const Dismissible: Story = {
  render: (args) => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) {
      return (
        <div className="text-white">
          Alert was dismissed.
          <Button
            size="small"
            onClick={() => setIsVisible(true)}
            className="ml-2"
          >
            Show again
          </Button>
        </div>
      );
    }

    return <Alert {...args} dismissible onClose={() => setIsVisible(false)} />;
  },
  args: {
    variant: "info",
    title: "Dismissible Alert",
    children:
      "This alert can be dismissed by clicking the X button or will auto-dismiss with the progress bar.",
  },
};

export const CustomIcon: Story = {
  args: {
    variant: "info",
    title: "Custom Icon",
    children: "This alert uses a custom icon instead of the default one.",
    icon: (
      <span className="text-2xl" role="img" aria-label="rocket">
        🚀
      </span>
    ),
  },
};

export const LongContent: Story = {
  args: {
    variant: "warning",
    title: "Important Notice",
    children:
      "This is a longer alert message that contains more detailed information. It might span multiple lines and provide comprehensive guidance to the user about what they need to know or do next. The alert component handles longer content gracefully.",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert variant="info" title="Info Alert">
        This is an informational alert with useful details.
      </Alert>
      <Alert variant="success" title="Success Alert">
        Operation completed successfully!
      </Alert>
      <Alert variant="warning" title="Warning Alert">
        Please review your input before proceeding.
      </Alert>
      <Alert variant="danger" title="Error Alert">
        An error occurred while processing your request.
      </Alert>
    </div>
  ),
};

export const InteractiveDemo: Story = {
  render: () => {
    const [alerts, setAlerts] = useState<
      Array<{
        id: number;
        variant: "info" | "success" | "warning" | "danger";
        title: string;
        message: string;
      }>
    >([]);
    const [counter, setCounter] = useState(1);

    const addAlert = (variant: "info" | "success" | "warning" | "danger") => {
      const newAlert = {
        id: counter,
        variant,
        title: `${variant.charAt(0).toUpperCase() + variant.slice(1)} Alert`,
        message: `This is a ${variant} alert that was dynamically added.`,
      };
      setAlerts([...alerts, newAlert]);
      setCounter(counter + 1);
    };

    const removeAlert = (id: number) => {
      setAlerts(alerts.filter((alert) => alert.id !== id));
    };

    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          <Button size="small" onClick={() => addAlert("info")}>
            Add Info
          </Button>
          <Button
            size="small"
            variant="success"
            onClick={() => addAlert("success")}
          >
            Add Success
          </Button>
          <Button
            size="small"
            variant="warning"
            onClick={() => addAlert("warning")}
          >
            Add Warning
          </Button>
          <Button
            size="small"
            variant="danger"
            onClick={() => addAlert("danger")}
          >
            Add Danger
          </Button>
        </div>

        <div className="space-y-2">
          {alerts.map((alert) => (
            <Alert
              key={alert.id}
              variant={alert.variant}
              title={alert.title}
              dismissible
              onClose={() => removeAlert(alert.id)}
            >
              {alert.message}
            </Alert>
          ))}
        </div>
      </div>
    );
  },
};
