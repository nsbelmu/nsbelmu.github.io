import Profile from "@/components/profile";

const members = [
  {
    name: "Adeolu (Danny) Adebiyi",
    position: "Co-President",
    major: "Computer Engineering",
    image: "/images/profiles/danny.jpeg",
    linkedInUrl: "https://www.linkedin.com/in/adeolu-adebiyi/",
  },
  {
    name: "Davis Banks",
    position: "Co-President",
    major: "Computer Science",
    image: "/images/profiles/davis.jpeg",
    linkedInUrl: "https://www.linkedin.com/in/d5vis",
  },
  {
    name: "Makari Green",
    position: "Vice President",
    major: "Computer Engineering",
    image: "/images/profiles/makari.jpeg",
    linkedInUrl: "https://www.linkedin.com/in/makgreen2820",
  },
  {
    name: "Dawit Solomon",
    position: "Secretary",
    major: "Computer Science",
    image: "/images/profiles/dawit.jpeg",
    linkedInUrl: "https://www.linkedin.com/in/dawitsol",
  },
  {
    name: "Tinbite Ermias",
    position: "Treasurer",
    major: "Computer Engineering",
    image: "/images/profiles/tinbite.jpeg",
    linkedInUrl: "https://www.linkedin.com/in/tinbite-ermias/",
  },
  {
    name: "Brandon Bazile",
    position: "Co-Media and Marketing Chair",
    major: "Computer Science",
    image: "/images/profiles/brandon.jpeg",
    linkedInUrl: "https://www.linkedin.com/in/brandon-bazile-hgp/",
  },
  {
    name: "Sarah Leka",
    position: "Co-Media and Marketing Chair",
    major: "Mechanical Engineering",
    image: "/images/profiles/sarah.jpeg",
    linkedInUrl: "https://www.linkedin.com/in/sarah-leka-354a5a2a7/",
  },
  {
    name: "Jordan Harvey",
    position: "Programs Chair",
    major: "Mechanical Engineering",
    image: "/images/profiles/jordan.jpeg",
    linkedInUrl: "https://www.linkedin.com/in/jordanharvey-/",
  },
  {
    name: "Natasha Cordova-Diba",
    position: "Senator",
    major: "Computer Science",
    image: "/images/profiles/natasha.jpeg",
    linkedInUrl: "https://www.linkedin.com/in/natasha-cordova-diba/",
  },
  {
    name: "Hannah Holden",
    position: "Senator",
    major: "Computer Science",
    image: "/images/profiles/hannah.jpeg",
    linkedInUrl: "https://www.linkedin.com/in/hannah-v-h/",
  },
];

const Eboard = () => {
  return (
    <div className="motion-opacity-in grid grid-cols-1 gap-8 sm:grid-cols-2 p-10 pt-0 lg:pt-10">
      {members.map((member, index) => (
        <Profile
          key={member.name}
          index={index}
          name={member.name}
          position={member.position}
          major={member.major}
          image={member.image}
          linkedInUrl={member.linkedInUrl}
        />
      ))}
    </div>
  );
};

export default Eboard;
