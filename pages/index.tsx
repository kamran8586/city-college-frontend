import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Events from "../components/Events";
import Pricing from "../components/Pricing";
import Script from "next/script";
import axios from "axios";
import DegreePrograms from "../components/DegreePrograms";
import Card from "../components/Card";
import WhyJoinUs from "../components/WhyJoinUs";
import fs from "fs";
import path from "path";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }: any) {
  const cards = [
    {
      id: 1,
      title: "Card 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit ante, eleifend a dolor in, tempus mollis est.",
    },
    {
      id: 2,
      title: "Card 2",
      content:
        "Suspendisse potenti. Sed malesuada, velit vel suscipit tempus, eros ipsum feugiat tellus, ut bibendum risus ligula ut nulla.",
    },
    {
      id: 3,
      title: "Card 3",
      content:
        "Integer eget enim a elit malesuada tincidunt. Sed blandit, est id euismod pharetra, quam magna aliquet augue, in tristique nunc nisi vel nibh.",
    },
  ];

  return (
    <>
      <Head>
        <title>City College</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/js/all.min.js"></script>
      </Head>
      <Hero />
      <DegreePrograms />
      <h3 className="text-center mb-10 text-2xl font-semibold">Why Join Us?</h3>

      {data.map((ele: any) => (
        <WhyJoinUs key={ele.id} data={ele} />
      ))}
    </>
  );
}
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "pages/data.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

  return {
    props: {
      data,
    },
  };
}
