import dynamic from "next/dynamic";

const PriceList = dynamic(() => import("@/components/PriceList"), {
  ssr: false,
});
export default function Home() {
  return (
    <>
      <h1>Test</h1>
      <PriceList></PriceList>
    </>
  );
}
