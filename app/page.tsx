import CompanyCarousel from "@/components/company-carousel";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="motion-opacity-in w-full h-full flex flex-col p-10 pt-0 lg:pt-10 gap-4 transition-all">
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
      <div className="flex gap-4 py-2">
        <Link
          href="https://leo.lmu.edu/organization/national-society-of-black-engineers"
          className="p-1 w-48 bg-gradient-to-r from-lmucrimson via-lmublue to-lmucrimson bg-[size:200%] text-lmublue hover:bg-right hover:opacity-80 transition-all duration-500 text-center"
        >
          <div className="p-1 text-white">Become a member</div>
        </Link>
        <Link
          href="/sponsor"
          className="p-1 w-48 bg-gradient-to-r from-lmucrimson via-lmublue to-lmucrimson bg-[size:200%] text-lmublue hover:bg-right hover:opacity-80 transition-all duration-500 text-center"
        >
          <div className="p-1 bg-background text-foreground">
            <div className="bg-gradient-to-r from-lmucrimson via-lmublue to-lmucrimson bg-[size:200%] hover:bg-right text-transparent bg-clip-text">
              Sponsor us
            </div>
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Image
          src="/images/nsbe-49.png"
          alt="NSBE40"
          layout="responsive"
          width="1920"
          height="1080"
          className="motion-blur-in bg-gray-100"
        />
        <Image
          src="/images/nsbe-50.png"
          alt="NSBE50"
          layout="responsive"
          width="1920"
          height="1080"
          className="motion-blur-in bg-gray-100"
        />
      </div>
      <CompanyCarousel />
    </div>
  );
}
