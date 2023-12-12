import { type Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "My Projects",
}

export default function ProjectsPage() {
  return (
    <main className="z-10 flex min-h-screen flex-col px-6 py-24 text-light-900">
      <div className="relative flex flex-grow flex-col items-center justify-center gap-8">
        <h1 className="max-w-[300px] animate-slide-down font-dm-serif-display text-4xl opacity-0 animation-delay-100 sm:max-w-[450px] sm:text-6xl">
          My Projects
        </h1>
        <p className="max-w-2xl animate-slide-down text-center text-lg text-light-100 opacity-0 animation-delay-150">
          A list of projects I have worked on or are currently working on.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:mx-24 lg:grid-cols-3">
          <div className="flex animate-slide-down flex-col gap-4 rounded-lg border border-violet-400/50 bg-violet-400/10 p-4 opacity-0 shadow-inner shadow-violet-400/40 duration-300 animation-delay-[200ms]">
            <Image
              src={"/projects/portfolio.png"}
              width={356}
              height={172}
              alt=""
              className="h-auto w-auto rounded-lg border border-violet-400/50"
            ></Image>
            <div className="flex justify-between">
              <span>Portfolio</span>
              <div className="flex gap-2">
                <Link
                  href={"https://charliee.dev"}
                  className="text-light-100 duration-300 hover:text-light-900"
                >
                  {ExternalLinkSVG}
                </Link>
                <Link
                  href={"https://github.com/notcharliee/charliee.dev"}
                  className="text-light-100 duration-300 hover:text-light-900"
                >
                  {GitHubSVG}
                </Link>
              </div>
            </div>
            <p className="-mt-2 text-sm text-light-100">
              My personal portfolio website.
            </p>
          </div>
          <div className="duration-350 flex animate-slide-down flex-col gap-4 rounded-lg border border-violet-400/50 bg-violet-400/10 p-4 opacity-0 shadow-inner shadow-violet-400/40 animation-delay-[300ms]">
            <Image
              src={"/projects/phase.png"}
              width={356}
              height={172}
              alt=""
              className="h-auto w-auto rounded-lg border border-violet-400/50"
            ></Image>
            <div className="flex justify-between">
              <span>Phase</span>
              <div className="flex gap-2">
                <Link
                  href={"https://charliee.dev"}
                  className="text-light-100 duration-300 hover:text-light-900"
                >
                  {ExternalLinkSVG}
                </Link>
                <Link
                  href={"https://github.com/notcharliee/charliee.dev"}
                  className="text-light-100 duration-300 hover:text-light-900"
                >
                  {GitHubSVG}
                </Link>
              </div>
            </div>
            <p className="-mt-2 text-sm text-light-100">
              My free, open source, all-in-one Discord bot.
            </p>
          </div>
          <div className="flex animate-slide-down flex-col gap-4 rounded-lg border border-violet-400/50 bg-violet-400/10 p-4 opacity-0 shadow-inner shadow-violet-400/40 duration-300 animation-delay-[400ms]">
            <Image
              src={"/projects/mcpack.png"}
              width={356}
              height={172}
              alt=""
              className="h-auto w-auto rounded-lg border border-violet-400/50"
            ></Image>
            <div className="flex justify-between">
              <span>MCPack</span>
              <div className="flex gap-2">
                <Link
                  href={"https://mcpack.charliee.dev"}
                  className="text-light-100 duration-300 hover:text-light-900"
                >
                  {ExternalLinkSVG}
                </Link>
                <Link
                  href={"https://github.com/notcharliee/mcpack"}
                  className="text-light-100 duration-300 hover:text-light-900"
                >
                  {GitHubSVG}
                </Link>
              </div>
            </div>
            <p className="-mt-2 text-sm text-light-100">
              A simple Minecraft resource pack builder.
            </p>
          </div>
          <div className="flex animate-slide-down flex-col gap-4 rounded-lg border border-violet-400/50 bg-violet-400/10 p-4 opacity-0 shadow-inner shadow-violet-400/40 duration-300 animation-delay-[500ms]">
            <Image
              src={"/projects/chubw4.png"}
              width={356}
              height={172}
              alt=""
              className="h-auto w-auto rounded-lg border border-violet-400/50"
            ></Image>
            <div className="flex justify-between">
              <span>ChubW4</span>
              <div className="flex gap-2">
                <Link
                  href={"https://replit.com/@Spcfork/ChubW4"}
                  className="text-light-100 duration-300 hover:text-light-900"
                >
                  {ReplitSVG}
                </Link>
                <Link
                  href={"https://github.com/SpcFORK/ChubW4"}
                  className="text-light-100 duration-300 hover:text-light-900"
                >
                  {GitHubSVG}
                </Link>
              </div>
            </div>
            <p className="-mt-2 text-sm text-light-100">
              CLI tool that manages and builds ChubML projects.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

// SVG Files

const ExternalLinkSVG = (
  <svg
    className="h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 448 512"
  >
    <path d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM320 313.4V176c0-8.8-7.2-16-16-16H166.6c-12.5 0-22.6 10.1-22.6 22.6c0 6 2.4 11.8 6.6 16L184 232l-66.3 66.3C114 302 112 306.9 112 312s2 10 5.7 13.7l36.7 36.7c3.6 3.6 8.5 5.7 13.7 5.7s10-2 13.7-5.7L248 296l33.4 33.4c4.2 4.2 10 6.6 16 6.6c12.5 0 22.6-10.1 22.6-22.6z" />
  </svg>
)

const GitHubSVG = (
  <svg
    className="h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <title>github</title>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
  </svg>
)

const ReplitSVG = (
  <svg
    className="h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 32 32"
  >
    <defs></defs>
    <path d="M7 5.5C7 4.67157 7.67157 4 8.5 4H15.5C16.3284 4 17 4.67157 17 5.5V12H8.5C7.67157 12 7 11.3284 7 10.5V5.5Z"></path>
    <path d="M17 12H25.5C26.3284 12 27 12.6716 27 13.5V18.5C27 19.3284 26.3284 20 25.5 20H17V12Z"></path>
    <path d="M7 21.5C7 20.6716 7.67157 20 8.5 20H17V26.5C17 27.3284 16.3284 28 15.5 28H8.5C7.67157 28 7 27.3284 7 26.5V21.5Z"></path>
  </svg>
)
