"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const teamLogo = {
  "Manchester Utd": "/Manchester_United_FC_crest.png",
  "Manchester City": "/Manchester_City_FC_badge.png",
  Liverpool: "/Liverpool_FC.png",
  Chelsea: "/Chelsea_FC.png",
  Tottenham: "/Tottenham_Hotspur.png",
  Arsenal: "/Arsenal_FC.png",
  Wolves: "/Wolverhampton_Wanderers.png",
  Everton: "/Everton_FC.png",
  "Newcastle Utd": "/Newcastle_United_Logo.png",
  Brentford: "/Brentford_FC_crest.png",
  "West Ham": "/West_Ham_United_FC_logo.png",
  "Nott'ham Forest": "/Nottingham_Forest.png",
  "Luton Town": "/Luton_Town.png",
  "Crystal Palace": "/Crystal_Palace_FC.png",
  Fulham: "/Fulham_FC.png",
  Bournemouth: "/Bournemouth.png",
  Brighton: "/Brighton_Hove_Albion.png",
  "Aston Villa": "/Aston_Villa.png",
  "Sheffield Utd": "/Sheffield_United_FC.png",
  Burnley: "/Burnley_FC.png",
};

export default function Home() {
  const [left_team, set_left_team] = useState(null);
  const [right_team, set_right_team] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const resetSelection = () => {
    set_left_team(null);
    set_right_team(null);
    setPrediction(null);
  };

  useEffect(() => {
    if (left_team && right_team) {
      const url = `http://127.0.0.1:5000/api/getPrediction?teams=["${left_team}","${right_team}"]`;
      setLoading(true);
      fetch(url)
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((data) => {
          setPrediction(data);
          setLoading(false);
          console.log(data);
        });
    }
  }, [left_team, right_team]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <header className="w-full text-center font-mono text-sm pt-8 pb-6">
        Get predictions for future games of Premier League by Selecting the
        teams
      </header>
      <div className="flex flex-row justify-between text-middle items-center w-1/2">
        <p className="h-min text-3xl">
          {prediction ? (
            `${Math.trunc(100 * prediction[left_team])}%`
          ) : loading ? (
            <div role="status">
              <svg
                aria-hidden="true"
                class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          ) : (
            ""
          )}
        </p>

        <div className="flex flex-row justify-between items-center text-center">
          <div className="bg-transparent rounded-full w-52 h-52 flex flex-row items-center justify-center">
            {left_team ? (
              <Image
                src={teamLogo[left_team] || "/blankCircle.png"}
                alt="Left Team Logo"
                className="mr-4"
                width={150}
                height={150}
                priority
              />
            ) : (
              ""
            )}
          </div>

          <span className="mx-4"> VS </span>

          <div className="bg-transparent rounded-full w-52 h-52 flex flex-row items-center justify-center">
            {right_team ? (
              <Image
                src={teamLogo[right_team] || "/blankCircle.png"}
                alt="Right Team Logo"
                className="ml-4"
                width={150}
                height={150}
                priority
              />
            ) : (
              ""
            )}
          </div>
        </div>
        <p className="h-min text-3xl">
          {prediction ? (
            `${Math.trunc(100 * prediction[right_team])}%`
          ) : loading ? (
            <div role="status">
              <svg
                aria-hidden="true"
                class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          ) : (
            ""
          )}
        </p>
      </div>

      <button
        className="mb-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
        onClick={resetSelection}
      >
        Reset
      </button>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/BackGround-new.png"
          alt="PL Logo"
          width={500}
          height={100}
          priority
        />
      </div>

      <div className="z-10 flex-grow p-4 w-full lg:flex items-center justify-between">
        <div className="flex justify-center w-full bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:h-auto lg:bg-none gap-8">
          {" "}
          {/* Adjusted gap here */}
          <button
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0 transition hover:scale-110 ease-in-out delay-2000"
            onClick={() => {
              if (teamLogo[left_team] == null) {
                set_left_team("Manchester United");
              } else {
                set_right_team("Manchester United");
              }
            }}
          >
            <Image
              src="/Manchester_United_FC_crest.png"
              alt="Manchester United"
              className=""
              width={80}
              height={80}
              priority
            />
          </button>
          <button
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0 transition hover:scale-110 ease-in-out delay-2000"
            onClick={() => {
              if (teamLogo[left_team] == null) {
                set_left_team("Manchester City");
              } else {
                set_right_team("Manchester City");
              }
            }}
          >
            <Image
              src="/Manchester_City_FC_badge.png"
              alt="Manchester City"
              className=""
              width={80}
              height={80}
              priority
            />
          </button>
          <button
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0 transition hover:scale-110 ease-in-out delay-2000"
            onClick={() => {
              if (teamLogo[left_team] == null) {
                set_left_team("Liverpool");
              } else {
                set_right_team("Liverpool");
              }
            }}
          >
            <Image
              src="/Liverpool_FC.png"
              alt="Liverpool FC"
              className=""
              width={80}
              height={80}
              priority
            />
          </button>
          <button
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0 transition hover:scale-110 ease-in-out delay-2000"
            onClick={() => {
              if (teamLogo[left_team] == null) {
                set_left_team("Chelsea");
              } else {
                set_right_team("Chelsea");
              }
            }}
          >
            <Image
              src="/Chelsea_FC.png"
              alt="Chelsea FC"
              className=""
              width={80}
              height={80}
              priority
            />
          </button>
          <button
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0 transition hover:scale-110 ease-in-out delay-2000"
            onClick={() => {
              if (teamLogo[left_team] == null) {
                set_left_team("Tottenham");
              } else {
                set_right_team("Tottenham");
              }
            }}
          >
            <Image
              src="/Tottenham_Hotspur.png"
              alt="Tottenham Hotspur"
              className=""
              width={80}
              height={80}
              priority
            />
          </button>
          <button
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0 transition hover:scale-110 ease-in-out delay-2000"
            onClick={() => {
              if (teamLogo[left_team] == null) {
                set_left_team("Arsenal");
              } else {
                set_right_team("Arsenal");
              }
            }}
          >
            <Image
              src="/Arsenal_FC.png"
              alt="Arsenal FC"
              className=""
              width={80}
              height={80}
              priority
            />
          </button>
          <button
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0 transition hover:scale-110 ease-in-out delay-2000"
            onClick={() => {
              if (teamLogo[left_team] == null) {
                set_left_team("Wolves");
              } else {
                set_right_team("Wolves");
              }
            }}
          >
            <Image
              src="/Wolverhampton_Wanderers.png"
              alt="Wolverhampton Wanderers"
              className=""
              width={80}
              height={80}
              priority
            />
          </button>
          <button
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0 transition hover:scale-110 ease-in-out delay-2000"
            onClick={() => {
              if (teamLogo[left_team] == null) {
                set_left_team("Everton");
              } else {
                set_right_team("Everton");
              }
            }}
          >
            <Image
              src="/Everton_FC.png"
              alt="Everton FC"
              className=""
              width={80}
              height={80}
              priority
            />
          </button>
          <button
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0 transition hover:scale-110 ease-in-out delay-2000"
            onClick={() => {
              if (teamLogo[left_team] == null) {
                set_left_team("Newcastle Utd");
              } else {
                set_right_team("Newcastle Utd");
              }
            }}
          >
            <Image
              src="/Newcastle_United_Logo.png"
              alt="Newcastle United"
              className=""
              width={80}
              height={80}
              priority
            />
          </button>
          <button
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0 transition hover:scale-110 ease-in-out delay-2000"
            onClick={() => {
              if (teamLogo[left_team] == null) {
                set_left_team("Brentford");
              } else {
                set_right_team("Brentford");
              }
            }}
          >
            <Image
              src="/Brentford_FC_crest.png"
              alt="Brentford FC"
              className=""
              width={80}
              height={80}
              priority
            />
          </button>
        </div>
      </div>

      <div className="z-10 flex-grow p-4 w-full lg:flex items-center justify-between">
        <div className="flex justify-center w-full bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:h-auto lg:bg-none gap-8">
          {" "}
          {/* Adjusted gap here */}
          <button
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0 transition hover:scale-110 ease-in-out delay-2000"
            onClick={() => {
              if (teamLogo[left_team] == null) {
                set_left_team("West Ham");
              } else {
                set_right_team("West Ham");
              }
            }}
          >
            <Image
              src="/West_Ham_United_FC_logo.png"
              alt="West Ham United FC"
              className=""
              width={80}
              height={80}
              priority
            />
          </button>
          <button
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0 transition hover:scale-110 ease-in-out delay-2000"
            onClick={() => {
              if (teamLogo[left_team] == null) {
                set_left_team("Nott'ham Forest");
              } else {
                set_right_team("Nott'ham Forest");
              }
            }}
          >
            <Image
              src="/Nottingham_Forest.png"
              alt="Nottingham Forest"
              className=""
              width={80}
              height={80}
              priority
            />
          </button>
          <button
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0 transition hover:scale-110 ease-in-out delay-2000"
            onClick={() => {
              if (teamLogo[left_team] == null) {
                set_left_team("Luton Town");
              } else {
                set_right_team("Luton Town");
              }
            }}
          >
            <Image
              src="/Luton_Town.png"
              alt="Luton Town"
              className=""
              width={80}
              height={80}
              priority
            />
          </button>
          <button
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0 transition hover:scale-110 ease-in-out delay-2000"
            onClick={() => {
              if (teamLogo[left_team] == null) {
                set_left_team("Crystal Palace");
              } else {
                set_right_team("Crystal Palace");
              }
            }}
          >
            <Image
              src="/Crystal_Palace_FC.png"
              alt="Crystal Palace FC"
              className=""
              width={80}
              height={80}
              priority
            />
          </button>
          <button
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0 transition hover:scale-110 ease-in-out delay-2000"
            onClick={() => {
              if (teamLogo[left_team] == null) {
                set_left_team("Fulham");
              } else {
                set_right_team("Fulham");
              }
            }}
          >
            <Image
              src="/Fulham_FC.png"
              alt="Fulham FC"
              className=""
              width={80}
              height={80}
              priority
            />
          </button>
          <button
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0 transition hover:scale-110 ease-in-out delay-2000"
            onClick={() => {
              if (teamLogo[left_team] == null) {
                set_left_team("Bournemouth");
              } else {
                set_right_team("Bournemouth");
              }
            }}
          >
            <Image
              src="/Bournemouth.png"
              alt="Bournemouth"
              className=""
              width={80}
              height={80}
              priority
            />
          </button>
          <button
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0 transition hover:scale-110 ease-in-out delay-2000"
            onClick={() => {
              if (teamLogo[left_team] == null) {
                set_left_team("Brighton");
              } else {
                set_right_team("Brighton");
              }
            }}
          >
            <Image
              src="/Brighton_Hove_Albion.png"
              alt="Brighton Hove Albion"
              className=""
              width={80}
              height={80}
              priority
            />
          </button>
          <button
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0 transition hover:scale-110 ease-in-out delay-2000"
            onClick={() => {
              if (teamLogo[left_team] == null) {
                set_left_team("Aston Villa");
              } else {
                set_right_team("Aston Villa");
              }
            }}
          >
            <Image
              src="/Aston_Villa.png"
              alt="Aston Villa"
              className=""
              width={80}
              height={80}
              priority
            />
          </button>
          <button
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0 transition hover:scale-110 ease-in-out delay-2000"
            onClick={() => {
              if (teamLogo[left_team] == null) {
                set_left_team("Sheffield Utd");
              } else {
                set_right_team("Sheffield Utd");
              }
            }}
          >
            <Image
              src="/Sheffield_United_FC.png"
              alt="Sheffield United FC"
              className=""
              width={80}
              height={80}
              priority
            />
          </button>
          <button
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0 transition hover:scale-110 ease-in-out delay-2000"
            onClick={() => {
              if (teamLogo[left_team] == null) {
                set_left_team("Burnley");
              } else {
                set_right_team("Burnley");
              }
            }}
          >
            <Image
              src="/Burnley_FC.png"
              alt="Burnley FC"
              className=""
              width={80}
              height={80}
              priority
            />
          </button>
        </div>
      </div>
    </main>
  );
}
