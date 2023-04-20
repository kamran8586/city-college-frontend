import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

function Hero() {
  const router = useRouter();
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Welcome to City College:
            <br className="hidden lg:inline-block" />
            Your Path to a Bright Future
          </h1>
          <p className="mb-8 leading-relaxed">
            At City College, we offer a wide range of academic programs and
            resources to help you achieve your goals. Join our diverse community
            of students and start your journey towards a successful career
            today.
          </p>
          <div className="flex justify-center">
            <button
              className="btn"
              onClick={() => router.push("/apply_admission")}
            >
              Apply Now
            </button>
            <button
              className="btn-light"
              onClick={() => router.push("/programs")}
            >
              View Programs
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
