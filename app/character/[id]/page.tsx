"use client";

import { useQuery } from "react-query";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

async function fetchCharacter(id: string) {
    const res = await fetch(`https://hp-api.onrender.com/api/character/${id}`);
    return res.json();
}

export default function CharacterDetail() {
    const { id } = useParams();
    const router = useRouter();
    const { data: characters, isLoading, isError } = useQuery({
        queryKey: ["character", id],
        queryFn: () => fetchCharacter(id as string),
    });

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
                    {/* Skeleton for loading state */}
                    <div className="animate-pulse flex flex-col items-center">
                        <div className="rounded-full bg-gray-300 h-32 w-32 mb-4"></div>
                        <div className="bg-gray-300 h-6 w-3/4 mb-2 rounded"></div>
                        <div className="bg-gray-300 h-5 w-1/2 mb-2 rounded"></div>
                        <div className="bg-gray-300 h-5 w-1/2 mb-2 rounded"></div>
                        <div className="bg-gray-300 h-5 w-1/2 mb-2 rounded"></div>
                        <div className="bg-gray-300 h-5 w-1/2 mb-2 rounded"></div>
                        <div className="bg-gray-300 h-5 w-1/2 mb-2 rounded"></div>
                        <div className="bg-gray-300 h-5 w-1/2 mb-2 rounded"></div>
                    </div>
                </div>
            </div>
        );
    }

    if (isError || !characters || characters.length === 0) return <p>Character not found</p>;

    const character = characters[0];
    const imageUrl = character.image || "/placeholder.png";

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
                <Image
                    src={imageUrl}
                    alt={character.name || "Character Image"}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4 border-4 border-gray-300"
                />
                <h1 className="text-3xl font-bold text-center mb-2">{character.name}</h1>
                <p className="text-lg"><strong>House:</strong> {character.house || "Unknown"}</p>
                <p className="text-lg"><strong>Species:</strong> {character.species}</p>
                <p className="text-lg"><strong>Gender:</strong> {character.gender}</p>
                <p className="text-lg"><strong>Date of Birth:</strong> {character.dateOfBirth}</p>
                <p className="text-lg"><strong>Patronus:</strong> {character.patronus}</p>
                <p className="text-lg"><strong>Wand:</strong> {character.wand.wood} (Length: {character.wand.length} inches)</p>
                <p className="text-lg"><strong>Actor:</strong> {character.actor}</p>
                <p className="text-lg"><strong>Alive:</strong> {character.alive ? "Yes" : "No"}</p>
                <button
                    onClick={() => router.back()}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    back
                </button>
            </div>
        </div>
    );
}
