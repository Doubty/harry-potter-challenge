import Image from "next/image";
import { useFavoritesStore } from "@/app/contexts/FavoritesContext";
import { CharacterMainProps, Character } from "../types/types";

export default function CharacterCard({ character }: CharacterMainProps) {
    const { favorites, toggleFavorite } = useFavoritesStore();
    const imageUrl = character.image && character.image !== "" ? character.image : "/placehold.jpg";

    return (
        <div className="border p-4 rounded-lg shadow-md text-center">
            <a href={`/character/${character.id}`}>
                <Image
                    src={imageUrl}
                    alt={character.name}
                    width={100}
                    height={100}
                    className="rounded-full mx-auto"
                />
            </a>
            <h2 className="text-lg font-bold">{character.name}</h2>
            <p className="text-sm text-gray-500">{character.house || "Unknown House"}</p>
            <button
                onClick={() => toggleFavorite(character as Character)}
                className={`mt-2 px-4 py-1 rounded ${favorites.some((char) => char.id === character.id) ? "bg-red-500 text-white" : "bg-gray-200"}`}
            >
                {favorites.some((char) => char.id === character.id) ? "Unfavorite" : "Favorite"}
            </button>
        </div>
    );
}
