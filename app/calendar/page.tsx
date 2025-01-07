const Calendar = () => {
  return (
    <div className="motion-opacity-in relative flex flex-col items-center justify-center h-full lg:pt-10">
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&showPrint=0&mode=AGENDA&title&src=bnNiZWxtdUBnbWFpbC5jb20&color=%230076a5&color=%237986CB&color=%23E67C73&color=%234285F4&color=%237986CB"
        className="motion-blur-in motion-delay-300 w-full h-full p-4 bg-gray-100 rounded-tr-3xl rounded-tl-3xl lg:rounded-tr-none"
      ></iframe>
    </div>
  );
};

export default Calendar;
