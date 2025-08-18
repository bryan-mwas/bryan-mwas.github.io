import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 sm:px-8 py-10 sm:py-14 flex max-sm:flex-col items-center">
      <Image
        className="dark:invert rounded-4xl max-sm:rounded-full h-50 w-50 mb-4 object-cover float-start p-3"
        src="/images/profile.png"
        alt="Brian's profile picture"
        width={150}
        height={150}
        priority
      />
      <section>
        <h1>Hello, I&apos;m Brian</h1>
        <p>
          Hi, I&apos;m Brian Mwathi. I&apos;m a full-stack software engineer
          with over six years of experience specializing in architecting and
          building enterprise-scale web applications on AWS and Azure. I&apos;m
          passionate about transforming complex business challenges into
          elegant, production-ready solutions.
        </p>
      </section>
    </main>
  );
}
