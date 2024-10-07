import {Card, Label, Textarea, Button, TextInput } from "flowbite-react";
import "./Contact.css";

export function Contact() {
  return (
    
    <form className="flex max-w-md flex-col gap-4 ml-[35%] py-10">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Your name" />
        </div>
        <TextInput id="name" type="name" placeholder="John Doe" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Your email" />
        </div>
        <TextInput id="email" type="email" placeholder="john.doe@example.com" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="subject" value="Subject" />
        </div>
        <TextInput id="subject" type="subject"/>
      </div>
      <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="comment" value="Your message" />
      </div>
      <Textarea id="comment" placeholder="Leave a comment..." required rows={6} />
      </div>
      <Button type="submit">Submit</Button>
    </form>
    
    
    
  );
}