import React from "react";
import Card, { CardHeader, CardMain, CardFooter } from "../components/Card/index.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const WithHeaderAndFooter: Story = {
  render: () => (
    <Card>
      <CardHeader>Card Header</CardHeader>
      <CardMain>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.
      </CardMain>
      <CardFooter>Card Footer</CardFooter>
    </Card>
  ),
};

export const OnlyMain: Story = {
  render: () => (
    <Card>
      <CardMain>
        This card only has main content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </CardMain>
    </Card>
  ),
};
