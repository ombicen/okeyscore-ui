import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "../components/Button";
import Card, { CardHeader, CardMain, CardFooter } from "../components/Card";
import Modal from "../components/Modal";
import Alert from "../components/Alert";

const meta: Meta = {
  title: "Showcase/All Components",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const AllComponentsShowcase: Story = {
  render: () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [alertVisible, setAlertVisible] = useState(true);

    return (
      <div className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              OkeyScore UI Components
            </h1>
            <p className="text-gray-300 text-lg">
              A showcase of all available components
            </p>
          </div>

          {/* Alerts Section */}
          <Card>
            <CardHeader>Alerts & Notifications</CardHeader>
            <CardMain>
              <div className="space-y-4">
                {alertVisible && (
                  <Alert
                    variant="info"
                    title="Welcome to the Component Showcase"
                    dismissible
                    onClose={() => setAlertVisible(false)}
                  >
                    This page demonstrates all the components working together.
                  </Alert>
                )}
                <Alert variant="success" title="Success">
                  All components are working perfectly!
                </Alert>
                <Alert variant="warning" title="Warning">
                  Please review your inputs before proceeding.
                </Alert>
                <Alert variant="danger" title="Error">
                  Something went wrong. Please try again.
                </Alert>
              </div>
            </CardMain>
          </Card>

          {/* Buttons Section */}
          <Card>
            <CardHeader>Buttons</CardHeader>
            <CardMain>
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-bold mb-3">Button Variants</h3>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="default">Default</Button>
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="success">Success</Button>
                    <Button variant="warning">Warning</Button>
                    <Button variant="danger">Danger</Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-white font-bold mb-3">Button Sizes</h3>
                  <div className="flex flex-wrap gap-3 items-center">
                    <Button size="small">Small</Button>
                    <Button size="medium">Medium</Button>
                    <Button size="large">Large</Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-white font-bold mb-3">Button States</h3>
                  <div className="flex flex-wrap gap-3">
                    <Button loading>Loading</Button>
                    <Button
                      icon={
                        <span role="img" aria-label="star">
                          ⭐
                        </span>
                      }
                    >
                      With Icon
                    </Button>
                    <Button fullWidth>Full Width</Button>
                  </div>
                </div>
              </div>
            </CardMain>
          </Card>

          {/* Cards Section */}
          <Card>
            <CardHeader>Cards</CardHeader>
            <CardMain>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>Sample Card</CardHeader>
                  <CardMain>
                    <p className="text-white">
                      This is a sample card with header, main content, and
                      footer sections.
                    </p>
                  </CardMain>
                  <CardFooter>Card Footer</CardFooter>
                </Card>

                <Card>
                  <CardMain>
                    <p className="text-white">
                      This card only has main content without header or footer.
                    </p>
                  </CardMain>
                </Card>
              </div>
            </CardMain>
          </Card>

          {/* Modal Trigger */}
          <div className="text-center">
            <Button onClick={() => setModalOpen(true)} size="large">
              Open Modal Example
            </Button>
          </div>

          {/* Modal */}
          <Modal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            title="Component Showcase Modal"
            size="lg"
          >
            <div className="space-y-4">
              <p className="text-white">
                This modal demonstrates how all components work together in a
                cohesive interface.
              </p>

              <Alert variant="info" title="Modal Alert">
                Even alerts work inside modals!
              </Alert>

              <div className="flex gap-3 justify-end">
                <Button
                  variant="secondary"
                  size="small"
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button size="small" onClick={() => setModalOpen(false)}>
                  Confirm
                </Button>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    );
  },
};
