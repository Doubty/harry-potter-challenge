export interface Character {
    id: string;
    name: string;
    alternate_names: string[];
    species: string;
    gender: string;
    house: string;
    dateOfBirth: string | null;
    yearOfBirth: number | null;
    wizard: boolean;
    ancestry: string;
    eyeColour: string;
    hairColour: string;
    wand: {
        wood: string;
        core: string;
        length: number | null;
    };
    patronus: string;
    hogwartsStudent: boolean;
    hogwartsStaff: boolean;
    actor: string;
    alternate_actors: string[];
    alive: boolean;
    image: string;
}

export type CharacterMainProps = {
    character: {
        id: string;
        name: string;
        image?: string;
        house?: string;
    };
};

export interface FavoritesContextType {
    favorites: Character[];
    toggleFavorite: (character: Character) => void;
}

export type HouseFilterProps = {
    selectedHouse: string;
    setSelectedHouse: (house: string) => void;
    className?: string;
};

export type SearchBarProps = {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    className?: string;
};

export type HouseState = {
    house: string;
    setHouse: (house: string) => void;
};
