const Sponsor = () => {
  return (
    <div className="motion-opacity-in relative flex flex-col items-center justify-center h-full lg:pt-10">
      <div className="h-full w-full pt-10 bg-gray-100 rounded-tr-3xl rounded-tl-3xl lg:rounded-tr-none">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeBaskSa3yIptpj7cpkV65oTQOBnvY4MatGeAbcax2gbDHgiA/viewform?embedded=true"
          width="640"
          height="551"
          className="motion-blur-in motion-delay-300 w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default Sponsor;
