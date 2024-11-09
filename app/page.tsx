import Navbar from "@/components/Navbar";
import { Korsel } from "@/components/Korsel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (

    <div className="h-[4000px]">
      <Navbar />
      <div className="pt-32 px-1 md:px-10 flex flex-col items-center">
        <Korsel />
        <Card className="w-full max-w-4xl mt-3 bg-blue-700">
          <CardContent className="flex flex-col items-center justify-center p-6">
            <span className="text-4xl font-semibold text-center text-white">Jelajahi Dunia dengan budget MURAH & BERKUALITAS</span>
            <span className="text-xl text-center text-white">Jelajahi Dunia dengan budget MURAH & BERKUALITAS</span>
            <Button className="mt-4 bg-yellow-500 text-white hover:bg-yellow-400">lihat semua destinasi</Button>
            <Button variant="secondary" className="mt-4 bg-yellow-500 text-white hover:bg-yellow-400">
              Pesan Sekarang <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
