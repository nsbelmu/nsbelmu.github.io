// google microsoft apple boeing cat linkedin mastercard raytheon
const companies = [
  { name: "Google", logo: "/images/logos/google.png" },
  { name: "Microsoft", logo: "/images/logos/microsoft.png" },
  { name: "Apple", logo: "/images/logos/apple.png" },
  { name: "Boeing", logo: "/images/logos/boeing.png" },
  { name: "Caterpillar", logo: "/images/logos/caterpillar.png" },
  { name: "LinkedIn", logo: "/images/logos/linkedin.png" },
  { name: "Mastercard", logo: "/images/logos/mastercard.png" },
  { name: "Raytheon", logo: "/images/logos/raytheon.png" },
];

const CompanyCarousel = () => {
  return (
    <div>
      <h2 className="text-sm text-gray-500 py-4">
        Many of our members have gone on to work at
      </h2>
      <div className="flex infline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-100px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none py-8 animate-infinite-scroll">
          {companies.map((company) => (
            <li key={company.name} className="mx-4">
              <img
                src={company.logo}
                alt={company.name}
                className="max-w-[100px] max-h-[100px] object-contain"
              />
            </li>
          ))}
        </ul>
        <ul
          aria-hidden
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none py-8 animate-infinite-scroll"
        >
          {companies.map((company) => (
            <li key={company.name} className="mx-4">
              <img
                src={company.logo}
                alt={company.name}
                className="max-w-[100px] max-h-[100px] object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompanyCarousel;
