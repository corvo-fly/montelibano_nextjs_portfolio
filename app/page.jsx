import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white h-[100vh] w-full flex items-center justify-center">

        <div className="flex items-center justify-center flex-col ">
            <Image
            src="/profile.png"
            width={500}
            height={500}
            alt="profile"
            />
        </div>
        
        <h2 className="text-black text-[60px] font-bold">My oshi</h2>
        <p className="max-w-[500px] w-full text-black text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam reprehenderit laudantium, porro quae eius sapiente unde iure non quibusdam sed tempora tenetur et rem aliquam consequuntur earum accusamus voluptatem consectetur!</p>
    </div>
  );
}
