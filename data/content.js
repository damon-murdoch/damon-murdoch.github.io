const PAGES = {
  home: {
    name: "Home",
    link: "?home",
    title: "Home Page",
    content: `
      <div id="text-content">
        <p>
          Hello and welcome to Dragapult.xyz! My name is Damon and
          I'm a software developer from Queensland, Australia. For years
          I have been a competitor in both the Pokemon Video Game and 
          Trading Card Game Championships, as well as more recently the
          Wangan Midnight Maximum Tune arcade game series. 
        </p>
        <p>
          At home, I dedicate a large amount of my time to working on
          software projects, of which many are linked on this page. 
          Most of these projects are related to my hobbies, such 
          as a Pokémon type coverage calculator, ev spread optimiser 
          and a defensive tera type calculator. Links to these 
          resources and many more can be found in the pages above.
        </p>
        <p>
          Here are a few of my personal highlights: 
        </p>
        <ul>
          <li>
            <a class='link-secondary' href='https://dragapult.xyz/wmmt-frame-viewer'>
              Wangan Midnight Maximum Tune 6RR Bingo Frame Viewer
            </a>
          </li>
          <li>
            <a class='link-secondary' href='http://www.dragapult.xyz/coverage-calculator'>
              Pokémon VG Type Coverage Calculator
            </a>
          </li>
          <li>
            <a class='link-secondary' href='http://www.dragapult.xyz/spread-optimiser'>
              Pokémon VG EV Spread Optimiser
            </a>
          </li>
          <li>
            <a class='link-secondary' href='http://www.dragapult.xyz/break-my-team'>
              Pokémon VG Team Matchup Tool
            </a>
          </li>
          <li>
            <a class='link-secondary' href='https://www.dragapult.xyz/pokemon-teams'>
              Pokémon VG Teams Archive
            </a>
          </li>
        </ul>
        <p>
          I will continue to update this page with new features and resources as 
          they are developed, and I will do my best to keep them up to date. 
          However, due to limited time and many projects sometimes it can 
          take some time for changes to be made.
        </p>
        <p>
          Once again, thanks for checking out my website.
          -
          <a class='link-light' href="https://www.twitter.com/SirScrubbington">
            Damon
          </a>
        </p>
      </div>
    `,
  },
  vgc: {
    name: "VGC",
    link: "?vgc",
    title: "Pokémon VGC",
    content: `
        <div id="text-content">
          <p>
            This page is for resources related to the Pokémon Video Game Championship 
            series, the official tournament format for competitive Pokémon since 2008.
            I have personally competed in Pokémon VGC tournaments since 2015, and have 
            been writing reports and developing software for the community since 2016.
          </p>
        </div>
        <div>
          <h3>
            Competitive Resources
          </h3>
          <p>
            Please see the following section for tools related to Pokemon gameplay 
            such as a type coverage calculator, team archive and ev spread optimiser.
          </p>
        </div>
        <ul>
          <li>
            <h4>
              <a class='link-light' href='http://www.dragapult.xyz/pokemon-teams'>
                Pokémon Teams Library
              </a>
            </h4>
            <p>
              An archive of teams I've been keeping since 2016, with over 300 teams from 
              different formats. Many are teams that myself or others have used at tournaments, 
              either with recreated spreads or the originals where possible. The collection 
              is not perfect, and I am still working through adding original creators and 
              descriptions to many teams due to the sheer volume. I'm open to team 
              submissions, however please keep in mind I do not preserve nicknames.
            </p>
          </li>
          <li>
            <h4>
              <a class='link-light' href='http://www.dragapult.xyz/break-my-team'>
                Pokémon Team Matchup Tool
              </a>
            </h4>
            <p>
              The Break my Team tool is a tool for testing your team's matchups to other threats in the metagame
              as well as speed tiers, report generation, and more. This program supports VGC formats going all
              the way back to 2014, up to the most recent formats (Currently, Regulation G).
            </p>
          </li>
          <li>
            <h4>
              <a class='link-light' href='http://www.dragapult.xyz/coverage-calculator'>
                Pokémon Type Coverage Calculator
              </a>
            </h4>
            <p>
              A program for calculating the combined weakness
              and resistances for your Pokémon teams. Useful for
              identifying bad matchups or where your team could
              be improved. Shows both offensive and defensive
              coverage. Please note, this software has not yet
              been updated to support new Pokemon and moves 
              from Generation 9.
            </p>
          </li>
          <li>
            <h4>
              <a class='link-light' href='http://www.dragapult.xyz/spread-optimiser'>
                Pokémon EV Spread Optimiser
              </a>
            </h4>
            <p>
              A program for calculating mathematically optimal EV 
              spreads for a Pokémon given constraints such as minimum
              or maximum required values, natures, level etc. Displays
              all possible combinations sorted by the highest base stat
              total results. Please note, this software has not yet been 
              updated to support new Pokemon and moves from Generation 9.
            </p>
          </li>
          <li>
            <h4>
              <a class='link-light' href='https://github.com/damon-murdoch/ev-spread-helper'>
                Pokémon EV Spread Helper
              </a>
            </h4>
            <p>
              The Pokemon EV Spread Helper is a web application designed to assist 
              users in generating instructions for recreating Pokémon sets in-game. 
              Originally developed for use with the Pokémon Emerald Battle Revolution 
              Decompilation Project, the tool now also supports Pokémon sets from the 
              main series games, including Generations 8 and 9.
            </p>
          </li>
          <li>
            <h4>
              <a class='link-light' href='https://sir-scrubbington.hatenablog.com'>
                Pokémon VGC Blog
              </a>
            </h4>
            <p>
              A blog I have used since 2015 to write about Pokémon teams, 
              tournaments and other helpful information related to VGC.
            </p>
          </li>
          <li>
            <h4>
              <a class='link-light' href='http://www.dragapult.xyz/set-scheduler'>
                Set Scheduler
              </a>
            </h4>
            <p>
              A rudimentary tool for scheduling sets with opponents in
              online tournaments, where timezones can be difficult to manage. 
              Generates a message which can be sent containing both the time
              for yourself and the opponent, in each player's respective timezone.
            </p>
          </li>
        </ul>
        <div>
          <h3>
            Other Resources
          </h3>
          <p>
            Please see the following section for tools related to Pokemon software
            development, advanced management tools, or anything else that doesn't
            fit in the competitive category.
          </p>
        </div>
        <ul>
          <li>
            <h4>
              <a class='link-light' href='https://github.com/damon-murdoch/custom-pwt'>
                Custom Pokémon World Tournaments
              </a>
            </h4>
            <p>
              This repository contains custom Pokémon World Tournament 
              (PWT) files which can be imported into Black and White 2 
              save files. For example, I have created the World 
              Championships 2013 Top 4 bracket for players to enjoy.
            </p>
          </li>
          <li>
            <h4>
              <a class='link-light' href='https://github.com/damon-murdoch/psmanage'>
                Pokémon Showdown Manager
              </a>
            </h4>
            <p>
            This is a Pokémon Showdown Team Manager, which has been developed 
            for the purpose of backing up and storing Pokémon Showdown 
            teams in a simple and easy to access format. For more 
            information, please refer to the post on my blog 
              <a class='link-light' href='http://sir-scrubbington.hatenablog.com/entry/2021/03/14/105329'>
                here.
              </a>
            </p>
          </li>
          <li>
            <h4>
              <a class='link-light' href='https://github.com/damon-murdoch/pokemon-showdown-docker'>
                Pokémon Showdown Docker
              </a>
            </h4>
            <p>
              A dockerized container for the Pokémon Showdown! Web Server. 
              This container is build upon the standard nodejs docker library 
              image, and pulls the latest version of the Pokémon Showdown! 
              server image when built. It also performs a pull request on 
              each time launching the container to ensure your server stays 
              up to date. For more information, please see the docker hub
              page 
              <a class='link-light' href='https://hub.docker.com/r/scrubbs/pokemon-showdown-docker'>
                here.
              </a>
            </p>
          </li>
          <li>
            <h4>
              <a class='link-light' href='http://www.dragapult.xyz/ps-parser'>
                Pokémon Showdown Parser
              </a>
            </h4>
            <p>
              A bi-directional converter application for Pokemon Showdown set
              exports to JSON format and back. Useful for people who want to make
              web sites or software processing set information. The web version
              is linked above, however it has also been implemented in several
              other languages. The intention of this is for the files to be able 
              to be dropped into and used by any project. Currently JavaScript, 
              PowerShell and Python versions have been implemented. You can see
              the source code for the project
              <a class='link-light' href='https://github.com/damon-murdoch/ps-parser'>
                here.
              </a>
            </p>
          </li>
        </ul>
        <div>
          <h3>
            Archived Resources
          </h3>
          <p>
            These tools have all been archived, and are no longer
            being maintained. They are only listed here for legacy purposes.
          </p>
        </div>
        <ul>
          <li>
            <a class='link-light' href='http://www.dragapult.xyz/coverage-calculator-legacy'>
              Pokémon Type Coverage Calculator (Legacy)
            </a>
            <p>
              - Superceded by <a class='text-light' href='https://www.dragapult.xyz/coverage-calculator/'>Pokémon Type Coverage Calculator</a>
            </p>
          </li>
          <li>
            <a class='link-light' href='http://www.dragapult.xyz/spread-optimiser-legacy'>
              Pokémon EV Spread Optimiser (Legacy)
            </a>
            <p>
              - Superceded by <a class='text-light' href='https://www.dragapult.xyz/spread-optimiser/'>Pokémon EV Spread Optimiser</a>
            </p>
          </li>


          <li>
            <a class='link-light' href='https://github.com/damon-murdoch/pkmtools'>
              Pokémon Tools (Python Script Library)
            </a>
            <p>
              - Superceded by <a class='text-light' href='https://www.dragapult.xyz/spread-optimiser/'>Pokémon EV Spread Optimiser</a>
            </p>
          </li>
          <li>
            <a class='link-light' href='https://github.com/damon-murdoch/jtk-coverage'>
              JTK Coverage Calculator
            </a>
            <p>
              - Superceded by <a class='text-light' href='https://www.dragapult.xyz/coverage-calculator/'>Pokémon Type Coverage Calculator</a>
            </p>
          </li>
          <li>
            <a class='link-light' href='https://github.com/damon-murdoch/weakness-calculator'>
              Pokémon Weakness Calculator
            </a>
            <p>
              - Superceded by <a class='text-light' href='https://www.dragapult.xyz/coverage-calculator/'>Pokémon Type Coverage Calculator</a>
            </p>
          </li>
          <li>
            <a class='link-light' href='http://www.dragapult.xyz/teamsheet-filler'>
              Pokémon Teamsheet Filler
            </a>
            <p>
              - Superceded by DhSufi's <a class='text-light' href='https://dhsufi.github.io/PokemonTeamListCreator/'>Pokémon Team List Creator</a>
            </p>
          </li>
        </ul>
    `,
  },
  tcg: {
    name: "TCG",
    link: "?tcg",
    title: "Pokémon TCG",
    content: `
      <div id="text-content">
        <p>
          This page is for content relating to the Pokémon Trading Card Game. I competed 
          in competitive Pokémon TCG tournaments from 2016 to 2020, however I was unable
          to play any large events due to VGC and TCG running at the same time. I have
          also worked on a few small projects related to the Pokémon TCG.
        </p>
      </div>
      <ul>
        <li>
          <h4>
            <a class='link-light' href='http://www.dragapult.xyz/pokemon-decks'>
              Pokémon Decks
            </a>
          </h4>
          <p>
            A website containing deck lists from my personal collection, including
            a buylist for cards which are required to finish them. Contains full card
            counts, colour coding indicating completeness and PokeGoldfish hyperlinks
            for more information about the cards. 
          </p>
        </li>
        <li>
          <h4>
            <a class='link-light' href='http://www.dragapult.xyz/teamsheet-filler'>
              Pokémon Trading Card Game Online to JSON Converter
            </a>
          </h4>
          <p>
            A bi-directional converter application for converting PTCGO deck list
            exports to JSON format and back. Useful for people who want to make
            web sites or software processing deck information. For the algorithm
            itself, you can see it 
            <a class='link-light' href='https://github.com/damon-murdoch/ptcg-to-json/blob/master/src/convert.js'>
              here.
            </a>
          </p>
        </li>
      </ul>
    `,
  },
  ssb: {
    name: "SSB",
    link: "?ssb",
    title: "Super Smash Brothers",
    content: `
      <div id="text-content">
        <p>
          This page is for resources relating to Super
          Smash Brothers, which is a platform fighting game 
          developed by Sora Ltd. and directed by Masahiro
          Sakurai. While I don't personally compete in Smash
          at any competitive level, I have attended a few
          local tournaments and have enjoyed watching majors
          since 2016. I have made one piece of software
          for this game, at the request of my good friend 
          and Smash Ultimate Speedrunner
          <a class='link-light' href='https://twitter.com/Arahpthos'>
            Arahpthos.
          </a>
        </p>
      </div>
      <ul>
        <li>
          <h4>
            <a class='link-light' href='http://www.dragapult.xyz/ssbu-classic-igt-calc'>
              Super Smash Bros. Ultimate Ingame Time Calculator
            </a>
          </h4>
          <p>
            A Super Smash Brothers Ultimate In-Game time calculator, 
            based on the original calculator developed by 
            <a class='link-light' href='https://twitter.com/Arahpthos'>
              Arahpthos.
            </a>
            This app is used by speedrunners to submit their classic 
            mode times to speedrun.com.
          </p>
        </li>
      </ul>
    `,
  },
  wmmt: {
    name: "WMMT",
    link: "?wmmt",
    title: "Wangan Midnight Maximum Tune",
    content: `
      <div id="text-content">
        <p>
          This page is for resources relating to Wangan Midnight Maximum Tune, 
          which is a series of arcade racing games developed and published by 
          Bandai Namco since 2004. I have been playing Maximum Tune since 2019 
          in a casual capacity, however I have been playing more competitively 
          since early 2021. I have worked on several pieces of software related
          to Maximum Tune, primarily in the emulation community. Please keep in 
          mind, however much of this software is no longer maintained.
        </p>
        <div>
          <h3>
            Arcade Resources
          </h3>
        </div>
        <ul>
          <li>
            <h4>
              <a class='link-light' href='https://www.dragapult.xyz/wmmt-frame-viewer'>
                Wangan Midnight Maximum Tune 6RR Bingo Frame Viewer 
              </a>
            </h4>
            <p>
              This application contains all of the bingo frames for
              each day of the year, as well as the ability to look up
              when the next appearance of a specific frame is. In addition
              to this, you can also view the frame for a certain date, or
              the frame for the next week, month, etc. You can also set
              calendar reminders for certain frames you would like to 
              obtain.
            </p>
          </li>
          <li>
            <h4>
              <a class='link-light' href='https://github.com/damon-murdoch/wmmt-ref/blob/master/readme.md'>
                Wangan Midnight Maximum Tune Reference Guide
              </a>
            </h4>
            <p>
              A quick reference guide for a number of things I found
              it difficult to understand when I started playing such
              as optimal speeds for time attack / battles, rank up
              requirements, how to earn different titles etc.
            </p>
          </li>
        </ul>
        <div>
          <h3>
            Emulator Resources
          </h3>
        </div>
        <ul>
          <li>
            <h4>
              <a class='link-light' href='http://www.dragapult.xyz/wmmt-writable-config-generator'>
                Bayshore Writable Config Generator
              </a>
            </h4>
            <p>
              This application is a a simple JavaScript application for 
              generating unique serial numbers for for AMCUS to use when
              authenticating to private servers. Unique serial numbers 
              prevent player overlaps when connecting to the servers.
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <h4>
              <a class='link-light' href='http://www.dragapult.xyz/wmmt-car-editor'>
                Wangan Midnight Maximum Tune Car Editor
              </a>
            </h4>
            <p>
              This application is a car editor for all Maximum Tune
              games supported by Teknoparrot, which allows you to
              edit features such as rank, colour, aero parts, etc. 
              Different features are supported for each game, due
              to what properties are respected by the emulator. 
              This program does NOT work for official saves and is
              exclusively for emulators. Please note, this software
              does not work for Bayshore and is designed for the
              offline version of the game.
            </p>
          </li>
        </ul>
        <div>
          <h3>
            Archived Resources
          </h3>
          <p>
            These tools have all been archived, and are no longer
            being maintained. They are only listed here for legacy purposes.
          </p>
        </div>
        <ul>
          <li>
            <a class='link-light' href='https://github.com/damon-murdoch/wmmt-ref/blob/master/readme.md'>
              Universal Mod Loader
            </a>
          </li>
          <li>
            <a class='link-light' href='https://github.com/damon-murdoch/wmmt-ref/blob/master/readme.md'>
              Wangan Midnight Maximum Tune Mod Tools
            </a>
          </li>
          <li>
            <a href='https://github.com/damon-murdoch/wmmt6-car-editor' class='text-light'>
              Wangan Midnight Maximum Tune 6 Car Editor
            </a>
            <p>
              - Superceded by <a href='https://github.com/damon-murdoch/wmmt-car-editor' class='text-light'>Wangan Midnight Maximum Tune Car Editor</a>
            </p>
          </li>
        </ul>
      </div>
    `,
  },
  ebr: {
    name: "EBR",
    link: "?ebr",
    title: "Emerald Battle Revolution",
    content: `
      <div id="text-content">
        <h4 class="text-center text-secondary">
          Competitive Battle Frontier Focused Emerald Decompilation Project
        </h4>
        <h4 class="text-center">
          <a class="text-secondary" href='https://github.com/damon-murdoch/emerald-battle-revolution/releases/'>
            Download Latest Release
          </a>
        </h4>
        <table class="table table-borderless text-center">
          <tr>
            <td>
              <img src="img/ebr/gallery1.png">
            </td>
            <td>
              <img src="img/ebr/gallery2.png">
            </td>
            <td>
              <img src="img/ebr/gallery3.png">
            </td>
          </tr>
        </table>
        <div id='about'>
          <h2 class="text-center">
            About the Project
          </h2>
          <p>
            Emerald Battle Revolution is a Pokemon Emerald decompilation project 
            which uses the PokeEmerald Expansion project as a base. The goal for 
            this project is to create a sandbox for players to enjoy the incredible 
            post-game content in Emerald such as the Battle Frontier and other 
            facilities using new Pokemon and simple methods for obtaining properly 
            trained, competitive Pokemon easily without the need for modifying save files.
          </p>
          <p>
            I've also made a web-based program for helping you recreate EV spreads ingame - 
            the <a class='text-light' href='https://www.dragapult.xyz/ebr-ev-spread-utility/'>EBR EV Spread Utility</a>.
            Just paste a showdown export in, and it'll generate a set of instructions for you.
          </p>
          <h3 class="text-center">
            More Information
          </h3>
          <p>
            For more information about the project, as well as a breakdown of previous versions, please see 
            the <a class='text-light' href='https://github.com/damon-murdoch/emerald-battle-revolution'>project repository</a>
          </p>
          <p>
            For a full list of wild encounters which can be found within the game, please see 
            the <a class='text-light' href='https://github.com/damon-murdoch/emerald-battle-revolution/blob/main/ENCOUNTERS.md'>encounters file</a>
          </p>
          <p>
            For more information about the Pokeemerald-Expanded project this software is based on, please see 
            the <a class='text-light' href='https://github.com/rh-hideout/pokeemerald-expansion'>official repository</a>
          </p>
          <h2 class="text-center">
            Gallery
          </h2>
          <p class='text-center'>
            Please see below for some screenshots taken from the project.
          </p>
          <h3 class="text-center">
            Modern Battle Factory Mode
            <sup class='text-warning'>
              <b>
                New!
              </b>
            </sup>
          </h3>
          <table class="table table-borderless text-center">
            <tr>
              <td class='text-light' colspan=3>
                Randomly generated sets of <i>almost</i> all new Pokemon are now available in the Battle Factory!
                Restricted legendaries can be selected and faced in the Open Level Battle Mode!
                All Mythicals except for Arceus and Deoxys can now be used in the Level 50 Battle Mode!
              </td>
            </tr>
            </tr>
              <td>
                <img src="img/ebr/gallery83.png">
              </td>
              <td>
                <img src="img/ebr/gallery84.png">
              </td>
              <td>
                <img src="img/ebr/gallery85.png">
              </td>
            </tr>
            <tr>
              <td>
                <img src="img/ebr/gallery86.png">
              </td>
              <td>
                <img src="img/ebr/gallery87.png">
              </td>
              <td>
                <img src="img/ebr/gallery88.png">
              </td>
            <tr>
          </table>
          <h3 class="text-center">
            Modern Battle Frontier Mode
          </h3>
          <table class="table table-borderless text-center">
            <tr>
              <td class='text-light' colspan=3>
                Randomly generated sets of <i>almost</i> all new Pokemon can be faced in all Battle Facilities, including the Battle Tents! 
                Restricted legendaries can be selected and faced in the Open Level Battle Mode! 
                All Mythicals except for Arceus and Deoxys can now be used in the Level 50 Battle Mode!
              </td>
            </tr>
            <tr>
              <td>
                <img src="img/ebr/gallery77.png">
              </td>
              <td>
                <img src="img/ebr/gallery78.png">
              </td>
              <td>
                <img src="img/ebr/gallery79.png">
              </td>
            </tr>
            <tr>
              <td>
                <img src="img/ebr/gallery80.png">
              </td>
              <td>
                <img src="img/ebr/gallery81.png">
              </td>
              <td>
                <img src="img/ebr/gallery82.png">
              </td>
            <tr>
          </table>
          <h3 class="text-center">
            Modern Battle Mechanics
          </h3>
          <table class="table table-borderless text-center">
            <tr>
              <td class='text-light' colspan=3>
                <i>Almost</i> all modern Pokemon, moves, items and mechanics have been implemented through the 
                <a class='text-secondary' href='https://github.com/rh-hideout/pokeemerald-expansion'>PokeEmerald Expansion Project!</a>
                New mechanics and features are implemented by the community regularly! Test your teambuilding skills and make the 
                strongest team you can!
              </td>
            </tr>
            <tr>
              <td>
                <img src="img/ebr/gallery48.png">
              </td>
              <td>
                <img src="img/ebr/gallery51.png">
              </td>
              <td>
                <img src="img/ebr/gallery52.png">
              </td>
            </tr>
            <tr>
              <td>
                <img src="img/ebr/gallery56.png">
              </td>
              <td>
                <img src="img/ebr/gallery63.png">
              </td>
              <td>
                <img src="img/ebr/gallery64.png">
              </td>
            </tr>
          </table>
          <h3 class="text-center">
            Expanded Box and Party Menus
          </h3>
          <table class="table table-borderless text-center">
          <tr>
            <td class='text-light' colspan=3>
              Check Pokemon IVs, EVs and more quickly and easily thanks to many interface quality-of-life improvements!
            </td>
          </tr>
            <tr>
              <td>
                <img src="img/ebr/gallery71.png">
              </td>
              <td>
                <img src="img/ebr/gallery72.png">
              </td>
              <td>
                <img src="img/ebr/gallery73.png">
              </td>
            <tr>
            <tr>
              <td>
                <img src="img/ebr/gallery74.png">
              </td>
              <td>
                <img src="img/ebr/gallery75.png">
              </td>
              <td>
                <img src="img/ebr/gallery76.png">
              </td>
            <tr>
          </table>
          <h3 class="text-center">
            Battle Frontier Underground
          </h3>
          <table class="table table-borderless text-center">
          <tr>
            <td class='text-light' colspan=3>
              Acquire everything you need to train a competitive team quickly and easily using the Battle Frontier Underground!
              Complete with many shops, utilities and other facilities such as a Day Care, Pokemon Center and even its own Game Corner!
            </td>
          </tr>
          <tr>
            <td>
              <img src="img/ebr/gallery89.png">
            </td>
            <td>
              <img src="img/ebr/gallery9.png">
            </td>
            <td>
              <img src="img/ebr/gallery28.png">
            </td>
          </tr>
          <tr>
            <td>
              <img src="img/ebr/gallery29.png">
            </td>
            <td>
              <img src="img/ebr/gallery30.png">
            </td>
            <td>
              <img src="img/ebr/gallery31.png">
            </td>              
          </tr>
          <tr>
            <td>
              <img src="img/ebr/gallery39.png">
            </td>
            <td>
              <img src="img/ebr/gallery45.png">
            </td>
            <td>
              <img src="img/ebr/gallery44.png">
            </td>
          </tr>
          <tr>
          </tr>
          <tr>
            <td>
              <img src="img/ebr/gallery41.png">
            </td>
            <td>
              <img src="img/ebr/gallery42.png">
            </td>
            <td>
              <img src="img/ebr/gallery17.png">
            </td>
          </tr>
          </table>
        </div>
      </div>
    `,
  },
};
