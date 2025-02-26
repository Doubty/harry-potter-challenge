"use client";

import { useState } from "react";
import { useQuery } from "react-query";
import SearchBar from "@/app/components/SearchBar";
import HouseFilter from "@/app/components/HouseFilter";
import CharacterCard from "@/app/components/CharacterCard";
import { Character } from "../types/types";

async function fetchCharacters() {
    const res = await fetch("https://hp-api.onrender.com/api/characters");
    return res.json();
}

export default function CharactersPage() {
    const { data: characters = [], isLoading } = useQuery({
        queryKey: ["characters"],
        queryFn: fetchCharacters,
    });

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedHouse, setSelectedHouse] = useState("");

    const filteredCharacters = characters.filter((char: Character) => {
        return (
            char.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedHouse === "" || char.house === selectedHouse)
        );
    });

    return (
        <main className="p-4 mx-auto max-w-7xl">
            <h1 className="text-2xl font-bold text-center mb-4">All Characters</h1>
            <div className="flex justify-center mb-4 space-x-2">
                <div className="flex-grow">
                    <SearchBar
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        className="w-full"
                    />
                </div>
                <div className="flex-shrink-0">
                    <HouseFilter
                        selectedHouse={selectedHouse}
                        setSelectedHouse={setSelectedHouse}
                        className="min-w-[150px]"
                    />
                </div>
            </div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {filteredCharacters.map((character: Character) => (
                        <CharacterCard key={character.id} character={character} />
                    ))}
                </div>
            )}
        </main>
    );
}
