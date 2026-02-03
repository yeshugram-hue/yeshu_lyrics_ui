"use client"
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import LyricsToolbar from "./Toolbar"

type SongData = {
  title: string
  lyricist: string
  telugu_lyrics: string;
}

export default function LyricsPreview({ data }: { data: SongData }) {
  let lastSection: string | null = null
  const fullscreen = useFullScreenHandle();

  return (
    <div className={`bg-[#FAFAF7] min-h-screen py-12`}>

      <div className="max-w-[720px] mx-auto px-6">

        {/* Title */}
        <h1 className="text-center text-3xl font-semibold text-[#2E3A46] mb-3">
          {data?.title}
        </h1>
        {/* <Lyricist lyricist={data.song.lyricist} /> */}
        <LyricsToolbar
          lyricist={data?.lyricist}
          onToggleFullscreen={() => {
            fullscreen.enter()
          }}
        />
        {/* Divider */}
        <div className=" w-24 h-px bg-[#C6A664] mx-auto mb-10" />
        <FullScreen handle={fullscreen} className="bg-white">
          {/* Lyrics */}
          <div className="w-1/2 mx-auto text-[#2E3A46] text-lg leading-[1.9] font-serif">
            {data?.telugu_lyrics}
          </div>
        </FullScreen>

        {/* Footer space */}
        <div className="h-12" />
      </div>
    </div>
  )
}
