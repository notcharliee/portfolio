import Link from "next/link"

export default function HomePage() {
  return (
    <main className="z-10 flex min-h-screen flex-col px-6 py-24 text-light-900">
      <div className="relative flex flex-grow flex-col items-center justify-center">
        <span className="text-md animate-slide-down text-center font-medium tracking-tight text-light-100 sm:text-lg sm:font-semibold md:text-xl">
          Hi friend, I'm charliee,
        </span>
        <h1 className="mt-2 max-w-[350px] animate-slide-down text-center font-dm-serif-display text-5xl opacity-0 animation-delay-100 sm:max-w-[450px] sm:text-6xl md:max-w-[600px] md:text-7xl">
          Welcome to my{" "}
          <span className="bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent">
            code portfolio
          </span>
        </h1>
        <div className="mt-8 flex items-center justify-center">
          <Link
            href={"/projects"}
            className="min-w-xl md:text-md 2xl:text-md group mr-5 flex animate-slide-down items-center rounded-full border border-violet-400/50 bg-violet-400/10 px-5 py-[8px] text-sm text-light-100 opacity-0 shadow-inner shadow-violet-400/40 transition-all duration-300 ease-in-out animation-delay-150 hover:border-violet-400 hover:text-light-900 md:px-6 md:py-2"
          >
            {PenSVG}
            <span>My Projects</span>
          </Link>
          <Link
            href={"/about"}
            className="animate-slide-down text-base text-light-100 opacity-0 duration-300 animation-delay-200 hover:text-light-900"
          >
            About Me
          </Link>
        </div>
      </div>
    </main>
  )
}

// SVG Files

const PenSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="16"
    viewBox="0 0 18 19"
    fill="none"
    className="mr-2 inline"
  >
    <path
      d="M12.9789 1.48795L11.0054 3.46497L15.4413 7.90087L17.4148 5.92739C18.1907 5.15146 18.1907 3.89722 17.4148 3.1213L15.785 1.48795C15.0091 0.712024 13.7548 0.712024 12.9789 1.48795ZM10.1303 4.1913L9.80432 4.2905L4.69878 5.8211C3.99372 6.03368 3.43392 6.57223 3.20007 7.27375L0.0609342 16.6345C-0.0737016 17.0348 0.0255038 17.4813 0.319577 17.7824L5.7617 12.3439C5.65541 12.1206 5.59518 11.8726 5.59518 11.6104C5.59518 10.6715 6.35693 9.90978 7.29584 9.90978C8.23475 9.90978 8.9965 10.6715 8.9965 11.6104C8.9965 12.5493 8.23475 13.3111 7.29584 13.3111C7.03365 13.3111 6.78564 13.2509 6.56243 13.1446L1.12031 18.5867C1.42501 18.8808 1.86789 18.9835 2.26825 18.8453L11.6325 15.7062C12.3305 15.4724 12.8726 14.9126 13.0852 14.2075L14.6158 9.10196L14.715 8.776L10.1303 4.1913Z"
      fill="currentColor"
    />
  </svg>
)
