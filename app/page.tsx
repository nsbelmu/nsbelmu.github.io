import CompanyCarousel from "@/components/company-carousel";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col p-10 gap-4 transition-all">
      <p>
        The Loyola Marymount University chapter of the National Society of Black
        Engineers (
        <a
          href="https://nsbe.org/"
          target="_blank"
          className="underline underline-offset-2 decoration-lmublue decoration-2"
        >
          NSBE
        </a>
        ) is part of one of the largest student-governed organizations in the
        U.S., with over 30,000 members worldwide. NSBE&apos;s mission is to
        &quot;increase the number of culturally responsible Black engineers who
        excel academically, succeed professionally, and positively impact the
        community.&quot;
      </p>
      <p>
        {" "}
        Our chapter is dedicated to supporting African-American STEM students at
        LMU through leadership training, professional development, mentorship,
        and career opportunities. Together, we strive to empower members to
        achieve academic excellence and make a lasting impact.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Image
          src="/images/nsbe-49.png"
          alt="NSBE40"
          layout="responsive"
          width="1920"
          height="1080"
        />
        <Image
          src="/images/nsbe-50.png"
          alt="NSBE50"
          layout="responsive"
          width="1920"
          height="1080"
        />
      </div>
      <CompanyCarousel />
    </div>
  );
}
