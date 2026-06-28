import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function AudioPlayer() {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio("/audio/ambience.mp3");

    audio.loop = true;
    audio.volume = 0.15;

    audioRef.current = audio;

    const saved = localStorage.getItem("music-enabled");

    if (saved === "true") {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {});
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      localStorage.setItem("music-enabled", "false");
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      localStorage.setItem("music-enabled", "true");
      setIsPlaying(true);
    }
  };

  return (
    <button
      onClick={toggleMusic}
      className={`music-button ${isPlaying ? "playing" : ""}`}
      aria-label="Toggle Sound"
    >
      <div className="music-icon">
        {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
      </div>

      <span className="music-text">Sound</span>

      <span className="music-status">{isPlaying ? "ON" : "OFF"}</span>
    </button>
  );
}
