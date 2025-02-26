"use client";

import { useQuery } from "react-query";
import axios from "axios";
import CharacterCard from "@/app/components/CharacterCard";

const fetchCharacters = async () => {
    const { data } = await axios.get("https://hp-api.onrender.com/api/characters");
    return data;
};

export default function CharacterList() {
    const { data, error, isLoading } = useQuery("characters", fetchCharacters);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading characters</p>;

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.map((char: { id: string; name: string; species: string; house: string; }) => (
                <CharacterCard key={char.id} character={char} />
            ))}
        </div>
    );
}
