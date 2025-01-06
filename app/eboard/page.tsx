import Profile from "@/components/profile";

const members = [
  {
    name: "Adeolu (Danny) Adebiyi",
    position: "Co-President",
    major: "Computer Engineering",
    image: "/images/profiles/danny.png",
  },
  {
    name: "Davis Banks",
    position: "Co-President",
    major: "Computer Science",
    image: "/images/profiles/davis.png",
  },
  {
    name: "Makari Green",
    position: "Vice President",
    major: "Computer Engineering",
    image: "/images/profiles/makari.png",
  },
  {
    name: "Dawit Solomon",
    position: "Secretary",
    major: "Computer Science",
    image: "/images/profiles/dawit.png",
  },
  {
    name: "Tinbite Ermias",
    position: "Treasurer",
    major: "Computer Engineering",
    image: "/images/profiles/tinbite.png",
  },
  {
    name: "Brandon Bazile",
    position: "Co-Media and Marketing Chair",
    major: "Computer Science",
    image: "/images/profiles/brandon.png",
  },
  {
    name: "Sarah Leka",
    position: "Co-Media and Marketing Chair",
    major: "Mechanical Engineering",
    image: "/images/profiles/sarah.png",
  },
  {
    name: "Jordan Harvey",
    position: "Programs Chair",
    major: "Mechanical Engineering",
    image: "/images/profiles/jordan.png",
  },
  {
    name: "Natasha Cordova-Diba",
    position: "Senator",
    major: "Computer Science",
    image: "/images/profiles/natasha.png",
  },
  {
    name: "Hannah Holden",
    position: "Senator",
    major: "Computer Science",
    image: "/images/profiles/hannah.png",
  },
];

const Eboard = () => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 p-10">
      {members.map((member) => (
        <Profile
          key={member.name}
          name={member.name}
          position={member.position}
          major={member.major}
          image={member.image}
        />
      ))}
    </div>
  );
};

export default Eboard;
