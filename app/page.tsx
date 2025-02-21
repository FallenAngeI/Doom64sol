import GameContainer from "./components/game-container"
import { BackgroundArt } from "./components/background-art"

export default function Page() {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      <BackgroundArt />
      <div className="relative z-10">
        <GameContainer />
      </div>
    </main>
  )
}

