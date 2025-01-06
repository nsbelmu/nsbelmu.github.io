const Contact = () => {
  return (
    <div className="grid grid-rows-[auto_1fr] w-full h-screen">
      <div className="flex flex-col gap-2 p-10 w-full">
        <p>
          For sponsorships, partnerships, or general inquiries, send us an
          email!
        </p>
        <a href="mailto:nsbelmu@gmail.com" className="font-bold">
          nsbelmu at gmail dot com
        </a>
      </div>
      <iframe
        className="w-full h-full"
        height="600"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Mbongi%20Spot+(Mbongi%20Spot)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
  );
};

export default Contact;
