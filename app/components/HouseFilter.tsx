"use client";

import { HouseFilterProps } from "../types/types";

const houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];

export default function HouseFilter({ selectedHouse, setSelectedHouse }: HouseFilterProps) {
    return (
        <select
            value={selectedHouse}
            onChange={(e) => setSelectedHouse(e.target.value)}
            className="w-full p-2 border rounded"
        >
            <option value="">All Houses</option>
            {houses.map((house) => (
                <option key={house} value={house}>
                    {house}
                </option>
            ))}
        </select>
    );
}
