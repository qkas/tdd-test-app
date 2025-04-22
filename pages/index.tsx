import Counter from "@/components/Counter";

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="mt-20 text-5xl font-bold">Scores</h1>
      <Counter name="Kasperi"/>
      <Counter name="Opponent"/>
    </div>
  );
}
