import Image from "next/image"
import Link from "next/link"
import { Companion } from "@prisma/client"

import { Card, CardHeader } from "@/components/ui/card"

interface CompanionsProps {
  data: Companion[];
}

export const Companions = ({
  data
}: CompanionsProps) => {
  if (data.length === 0) {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center space-y-4">
        <div className="relative w-60 h-60">
          <Image
            fill
            className="grayscale"
            src="/empty.png"
            alt="Empty"
          />
        </div>
        <p className="text-sm text-muted-foreground">No companions yet.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 pb-10">
      {data.map((item) => (
        <Card key={item.name} className="bg-primary/10 rounded-xl cursor-pointer hover:opacity-75 transition border-0">
          <Link href={`/chat/${item.id}`}>
            <CardHeader className="flex items-center justify-center text-center text-primary/75">
              <div className="relative w-32 h-32">
                <Image
                  src={item.src}
                  fill
                  className="rounded-xl object-cover"
                  alt="Character"
                />
              </div>
              <p className="font-bold">
                {item.name}
              </p>
              <p className="text-xs">
                {item.description}
              </p>
            </CardHeader>
          </Link>
        </Card>
      ))}
    </div>
  )
}