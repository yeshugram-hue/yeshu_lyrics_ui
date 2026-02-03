import {
    ArrowsPointingOutIcon,
    EyeIcon,
} from "@heroicons/react/24/outline";

type Props = {
    lyricist: string;
    onToggleFullscreen?: () => void;
};

export default function LyricsToolbar({
    lyricist,
    onToggleFullscreen,
}: Props) {
    return (
        <div className="w-full flex items-center justify-between px-6 py-3
        bg-white/80 backdrop-blur-md border-b border-gray-200">

            {/* Center: Lyricist + Views */}
            <div className="flex items-center gap-6">

                {/* Lyricist */}
                <div className="flex items-center gap-3">
                    {lyricist}
                </div>

            </div>

            {/* Views */}
            <div className="flex items-center gap-1.5 text-gray-500">
                <EyeIcon className="w-4 h-4" />
                <span className="text-xs font-medium">
                    {/* {lyricist.views?.toLocaleString() ?? "0"} views */}
                </span>
            </div>

            {/* Left: Fullscreen */}
            <button
                onClick={onToggleFullscreen}
                className="flex items-center gap-2 text-gray-700
                hover:text-black transition"
            >
                <ArrowsPointingOutIcon className="w-5 h-5" />
                <span className="text-sm font-medium">Full Screen</span>
            </button>
        </div>
    );
}
