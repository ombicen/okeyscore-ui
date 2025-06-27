import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Modal from "../components/Modal";
import Button from "../components/Button";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalTemplate: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <p className="text-white mb-4">
            This is the modal content. You can put any content here including
            forms, images, or other components.
          </p>
          <div className="flex gap-3 justify-end">
            <Button
              variant="secondary"
              size="small"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button size="small" onClick={() => setIsOpen(false)}>
              Confirm
            </Button>
          </div>
        </Modal>
      </div>
    );
  },
};

export const Default: Story = {
  ...ModalTemplate,
  args: {
    title: "Modal Title",
    size: "md",
  },
};

export const Small: Story = {
  ...ModalTemplate,
  args: {
    title: "Small Modal",
    size: "sm",
  },
};

export const Large: Story = {
  ...ModalTemplate,
  args: {
    title: "Large Modal",
    size: "lg",
  },
};

export const WithoutTitle: Story = {
  ...ModalTemplate,
  args: {
    size: "md",
  },
};

export const WithForm: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Open Form Modal</Button>
        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-white mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 bg-blue-500/30 border border-blue-400 rounded-lg text-white placeholder-gray-300"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-white mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 bg-blue-500/30 border border-blue-400 rounded-lg text-white placeholder-gray-300"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex gap-3 justify-end pt-4">
              <Button
                variant="secondary"
                size="small"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
              <Button size="small" onClick={() => setIsOpen(false)}>
                Submit
              </Button>
            </div>
          </form>
        </Modal>
      </div>
    );
  },
  args: {
    title: "Contact Form",
    size: "md",
  },
};
