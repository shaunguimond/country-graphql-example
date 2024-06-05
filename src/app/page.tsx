import Image from "next/image";
import ListOfCountries from "../../components/list-of-countries";

export default function Home() {

  return (
    <>
    <head><link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet"></link></head>
  
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold">Country GraphQL Example</h1>
      <ListOfCountries />
    </main>
    </>
  );
}
