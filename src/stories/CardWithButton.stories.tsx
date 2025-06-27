import React from "react";
import Card, { CardHeader, CardMain, CardFooter } from "../components/Card";
import Button from "../components/Button";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const WithButton: Story = {
  render: () => (
    <Card>
      <CardHeader>Card With Button</CardHeader>
      <CardMain>
        <>
            <p>This card contains a button below:</p>
     <div className="flex flex-row gap-2 mt-5">
          <Button variant="primary">Click Me</Button>  <Button variant="warning">Cancel</Button>
          </div>
       </>
      </CardMain>
      <CardFooter> Pick correctly otherwise who knows </CardFooter>
    </Card>
  ),
};
