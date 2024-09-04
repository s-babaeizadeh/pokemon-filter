import Image from "next/image";
import { useClient } from "./path-to-your-client-module"; // Assuming you have a client module

export function PokemonImage({ image, name }: { image: string; name: string }) {
  return (
    <div className="flex justify-center items-center">
      <Image
        src={image}
        alt={"Picture of " + name}
        priority
        fill
        style={{ objectFit: "contain" }}
        className="transition-opacity opacity-0 duration-[2s] max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      />
    </div>
  );
}
