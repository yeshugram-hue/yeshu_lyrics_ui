"use client"

import { useState, useMemo } from 'react';


interface Song {
    id: number;
    title: string;
    telugu_alphabet: string;
    // ... add other fields as needed
}

// This tells TypeScript: "The key is a string (alphabet), 
// and the value is an array of Songs"
interface GroupedSongs {
    [key: string]: Song[];
}

const TeluguSongIndex = ({
    lyrics
}: {
    lyrics: any;
}) => {
    const [selectedLetter, setSelectedLetter] = useState('అ');
    const [activeTab, setActiveTab] = useState('Home');

    const groupedData = useMemo<GroupedSongs>(() => {
        return (lyrics as Song[]).reduce((acc: GroupedSongs, song) => {
            const char = song.telugu_alphabet;

            if (!acc[char]) {
                acc[char] = [];
            }

            acc[char].push(song);
            return acc;
        }, {}); // Initial value casted via the 'acc' type above
    }, [lyrics]); // Added lyrics to dependency array so it updates when data changes
    // Alphabet list for the grid
    const alphabet = [
        'అ', 'ఆ', 'ఇ', 'ఈ', 'ఉ', 'ఊ', 'ఎ', 'ఏ', 'ఐ', 'ఒ', 'ఓ',
        'ఔ', 'క', 'ఖ', 'గ', 'ఘ', 'చ', 'ఛ', 'జ', 'ఝ', 'ట', 'ఠ',
        'డ', 'ఢ', 'త', 'థ', 'ద', 'ధ', 'న', 'ప', 'ఫ', 'బ', 'భ',
        'మ', 'య', 'ర', 'ల', 'వ', 'శ', 'స', 'హ', 'ళ', 'ఱ', '#'
    ];

    return (
        <div className="max-w-5xl mx-auto p-4 bg-white min-h-screen font-sans">
            {/* Blue Header */}
            <div className="bg-[#3366cc] text-white px-8 py-6 mb-6 inline-block min-w-[280px]">
                <h1 className="text-4xl font-semibold">Telugu Songs</h1>
            </div>

            {/* Tabs */}
            <div className="flex ml-4">
                {['Home', 'Telugu Index', 'English Index'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-2 border-t border-l border-r rounded-t-md transition-all ${activeTab === tab
                            ? 'bg-white border-gray-300 text-gray-900 z-10'
                            : 'bg-gray-50 border-transparent text-gray-500 hover:bg-gray-100'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Content Box */}
            <div className="border border-gray-300 p-6 md:p-10 rounded-sm -mt-[1px]">

                {/* Alphabet Selection Grid */}
                <div className="grid grid-cols-6 sm:grid-cols-9 md:grid-cols-11 gap-2 mb-12">
                    {alphabet.map((char) => (
                        <button
                            key={char}
                            onClick={() => setSelectedLetter(char)}
                            className={`h-12 border flex items-center justify-center text-xl font-bold transition-all
                ${selectedLetter === char
                                    ? 'bg-[#3366cc] text-white border-[#3366cc]'
                                    : 'bg-gray-50 text-[#3366cc] border-gray-200 hover:bg-blue-50'
                                }`}
                        >
                            {char}
                        </button>
                    ))}
                </div>

                {/* Dynamic Results Section */}
                <div className="border-b-2 border-gray-800 mb-6">
                    <h2 className="text-4xl font-bold text-gray-800 pb-2">{selectedLetter}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
                    {groupedData[selectedLetter] ? (
                        groupedData[selectedLetter].map((song: any) => (
                            <a
                                key={song.id}
                                href={`/lyrics/${song.id}`}
                                className="text-[#3366cc] text-lg font-bold hover:underline decoration-2 underline-offset-4"
                            >
                                {song.title}
                            </a>
                        ))
                    ) : (
                        <p className="text-gray-400 italic">No songs found for this letter.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TeluguSongIndex;