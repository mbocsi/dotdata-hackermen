"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const teamLogo = {
  "Manchester United": "/Manchester_United_FC_crest.png",
  "Manchester City": "/Manchester_City_FC_badge.png",
  "Liverpool FC": "/Liverpool_FC.png",
  "Chelsea FC": "/Chelsea_FC.png",
  "Tottenham Hotspur": "/Tottenham_Hotspur.png",
  "Arsenal FC": "/Arsenal_FC.png",
  "Wolverhampton Wanderers": "/Wolverhampton_Wanderers.png",
  "Everton FC": "/Everton_FC.png",
  "Newcastle United": "/Newcastle_United_Logo.png",
  "Brentford FC": "/Brentford_FC_crest.png",
  "West Ham": "/West_Ham_United_FC_logo.png",
  "Nottingham Forest": "/Nottingham_Forest.png",
  "Luton Town": "/Luton_Town.png",
  "Crystal Palace": "/Crystal_Palace_FC.png",
  Fulham: "/Fulham_FC.png",
  Bournemouth: "/Bournemouth.png",
  "Brighton Hove Albion": "/Brighton_Hove_Albion.png",
  "Aston Villa": "/Aston_Villa.png",
  "Sheffield United": "/Sheffield_United_FC.png",
  "Burnley FC": "/Burnley_FC.png",
};

export default function Home() {
  const [left_team, set_left_team] = useState(null);
  const [right_team, set_right_team] = useState(null);

  const resetSelection = () => {
    set_left_team(null);
    set_right_team(null);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <header className="w-full text-center font-mono text-sm pt-8 pb-6">
        Get predictions for future games of Premier League by Selecting the
        teams
      </header>
      <div className="flex flex-row justify-between items-center text-center">
        <Image
          src={teamLogo[left_team] || "/placeholder_for_left_team.png"}
          alt="Left Team Logo"
          className="mr-4"
          width={150}
          height={150}
          priority
        />

        <span className="mx-4"> VS </span>

        <Image
          src={teamLogo[right_team] || "/placeholder_for_right_team.png"}
          alt="Right Team Logo"
          className="ml-4"
          width={150}
          height={150}
          priority
        />
      </div>

      <button
        className="mb-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
        onClick={resetSelection}
      >
        Refresh
      </button>

      <div className="z-10 flex-grow p-4 w-full lg:flex items-center justify-between">
        <div className="flex justify-center w-full bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:h-auto lg:bg-none gap-8">
          {" "}
          {/* Adjusted gap here */}
          <button
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0"
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
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0"
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
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0"
            onClick={() => {
              if (teamLogo[left_team] == null) {
                set_left_team("Liverpool FC");
              } else {
                set_right_team("Liverpool FC");
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
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0"
            onClick={() => {
              if (teamLogo[left_team] == null) {
                set_left_team("Chelsea FC");
              } else {
                set_right_team("Chelsea FC");
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
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0"
            onClick={() => {
              if (teamLogo[left_team] == null) {
                set_left_team("Tottenham Hotspur");
              } else {
                set_right_team("Tottenham Hotspur");
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
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0"
            onClick={() => {
              if (teamLogo[left_team] == null) {
                set_left_team("Arsenal FC");
              } else {
                set_right_team("Arsenal FC");
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
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0"
            onClick={() => {
              if (teamLogo[left_team] == null) {
                set_left_team("Wolverhampton Wanderers");
              } else {
                set_right_team("Wolverhampton Wanderers");
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
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0"
            onClick={() => {
              if (teamLogo[left_team] == null) {
                set_left_team("Everton FC");
              } else {
                set_right_team("Everton FC");
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
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0"
            onClick={() => {
              if (teamLogo[left_team] == null) {
                set_left_team("Newcastle United");
              } else {
                set_right_team("Newcastle United");
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
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0"
            onClick={() => {
              if (teamLogo[left_team] == null) {
                set_left_team("Brentford FC");
              } else {
                set_right_team("Brentford FC");
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
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0"
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
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0"
            onClick={() => {
              if (teamLogo[left_team] == null) {
                set_left_team("Nottingham Forest");
              } else {
                set_right_team("Nottingham Forest");
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
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0"
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
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0"
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
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0"
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
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0"
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
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0"
            onClick={() => {
              if (teamLogo[left_team] == null) {
                set_left_team("Brighton Hove Albion");
              } else {
                set_right_team("Brighton Hove Albion");
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
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0"
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
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0"
            onClick={() => {
              if (teamLogo[left_team] == null) {
                set_left_team("Sheffield United");
              } else {
                set_right_team("Sheffield United");
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
            className="pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0"
            onClick={() => {
              if (teamLogo[left_team] == null) {
                set_left_team("Burnley FC");
              } else {
                set_right_team("Burnley FC");
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
