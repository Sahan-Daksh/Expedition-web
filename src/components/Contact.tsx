"use client"

import { Button, Card, Checkbox, Label, TextInput, Textarea } from "flowbite-react";

export function Contact() {
  return (
    <Card className="max-w-sm ml-[38%]">
      <form className="flex flex-col gap-4">
      <div>
          <div className="mb-2 block">
            <Label htmlFor="name1" value="Your name" />
          </div>
          <TextInput id="name1" type="name" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput id="email1" type="email" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="subject1" value="Subject" />
          </div>
          <TextInput id="subject1" type="subject" required />
        </div>
        <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="comment" value="Your message" />
      </div>
      <Textarea id="comment" placeholder="Leave a comment..." required rows={6} />
      </div>
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
}
