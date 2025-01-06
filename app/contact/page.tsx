const Contact = () => {
  return (
    <div className="motion-opacity-in grid grid-rows-[auto_1fr] w-full h-screen">
      <div className="flex flex-col gap-2 p-10 pt-0 lg:pt-10 w-full">
        <p>
          Feel free to send us an email, or fill out our{" "}
          <a
            href="/sponsor"
            className="underline underline-offset-2 decoration-lmublue decoration-2"
          >
            sponsorship form
          </a>
          !
        </p>
        <a
          href="mailto:nsbelmu@gmail.com"
          className="font-bold underline-offset-2 decoration-lmublue decoration-2 hover:underline"
        >
          nsbelmu at gmail dot com
        </a>
      </div>
      <iframe
        className="motion-blur-in motion-delay-300 w-full h-full bg-gray-100"
        height="600"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Mbongi%20Spot+(Mbongi%20Spot)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
  );
};

export default Contact;
