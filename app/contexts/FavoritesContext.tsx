"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Character, FavoritesContextType } from '../types/types';


const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
    const [favorites, setFavorites] = useState<Character[]>(() => {
        // load favorites from localStorage
        const storedFavorites = localStorage.getItem('favorites');
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    });

    useEffect(() => {
        // save favorites when changed
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (character: Character) => {
        setFavorites((prev) =>
            prev.some((char) => char.id === character.id)
                ? prev.filter((char) => char.id !== character.id)
                : [...prev, character]
        );
    };

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

// Hook to access the context and handle error
export const useFavoritesStore = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error("useFavoritesStore must be used within a FavoritesProvider");
    }
    return context;
};
