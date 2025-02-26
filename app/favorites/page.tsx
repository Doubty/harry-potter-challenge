"use client";

import { useState } from "react";
import { useFavoritesStore } from "@/app/contexts/FavoritesContext";
import SearchBar from "@/app/components/SearchBar";
import HouseFilter from "@/app/components/HouseFilter";
import CharacterCard from "@/app/components/CharacterCard";

export default function Favorites() {
    const { favorites } = useFavoritesStore();
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedHouse, setSelectedHouse] = useState("");


    const filteredFavorites = favorites.filter(character => {
        const matchesName = character.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesHouse = selectedHouse ? character.house === selectedHouse : true;
        return matchesName && matchesHouse;
    });

    return (
        <main className="p-4 mx-auto max-w-7xl">
            <h1 className="text-2xl font-bold text-center mb-4">Favoritos</h1>
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
            {filteredFavorites.length === 0 ? (
                <p className="text-lg text-center">It looks like you do not have any favorite characters yet.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {filteredFavorites.map(character => (
                        <CharacterCard key={character.id} character={character} />
                    ))}
                </div>
            )}
        </main>
    );
}
