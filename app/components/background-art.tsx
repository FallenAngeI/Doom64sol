import Image from "next/image"

export function BackgroundArt() {
  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-b from-orange-900/80 to-black/90 z-0" />
      <div className="fixed inset-0 z-0 opacity-20">
        <Image
          src="https://sjc.microlink.io/8zRqQZ9GYhihgmsA1KlqI15CFlrCrEFUj01nBaCubNl-KW9gur1l7TUskOM76taLuIiTcMlXCdEGjebPvDyZkg.jpeg"
          alt="DOOM Background Art"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] z-0" />
    </>
  )
}

