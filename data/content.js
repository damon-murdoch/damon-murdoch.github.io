const PAGES = {
  "home": {
    "name": "Home",
    "link": "?home",
    "title": "Home Page", 
    "content": `
      <div id="text-content">
        <p>
          Hello and welcome to Dragapult.xyz! My name is Damon and 
          I'm a Software Developer from Queensland, Australia. For years
          I have been a competitor in both the Pokémon Video Game and 
          Trading Card Game championship series, and I've recently 
          started to play the Wangan Midnight Maximum Tune arcade
          game series, both on emulator and in-person arcades.
        </p>
        <p>
          I've created this website to host all of the resources I've created
          related to these hobbies such as a Pokémon type coverage calculator
          and EV spread optimiser, and even a Maximum Tune emulator save editor.
          To see these resources, please check out the links above for more 
          information and links to the individual resources.
        </p>
        <p>
          I am always working on more software projects, and have a few
          projects currently in development. One such project to look 
          forward to is a database of both Pokémon VGC teams and TCG 
          deck lists which I plan to add to the site, including both 
          modern and old formats. These will primarily be from my 
          personal collection, or submitted to me with credit by 
          other members of the community. I have been building 
          a vast collection of both teams and decks for years, 
          and this web site is the perfect platform to host 
          them for all to see. I'm greatly looking forward 
          to publishing it!
        </p>
        <p>
          Once again, thanks for checking out my website.
        </p>
        <p>
          -
          <a class='link-light' href="https://www.twitter.com/SirScrubbington">
            Damon
          </a>
        </p>
      </div>
    `
  }, 
  "vgc": {
    "name": "VGC",
    "link": "?vgc",
    "title": "Pokémon VGC", 
    "content": `
      <div class="d-flex m-2 bg-secondary rounded">
        <div id="text-content">
          <p>
            This page is for resources related to the Pokémon
            Video Game Championship series, the official tournament
            format for competitive Pokémon since 2008. While rules
            vary between seasons, the consistent rules are that all
            matches are performed in the Double Battle format and
            each player brings four of their six Pokémon to each 
            game. Typically, you are locked to using only one 
            team per tournament and matches are usually played 
            in a best-of-three format, where each player is 
            allowed to pick different Pokémon within their 
            team to bring to each game. 
          </p>
          <p>
            I have personally competed in Pokémon VGC 
            tournaments since 2015, and have been writing 
            reports and developing software for the community
            since 2016. These resources are listed below.
          </p>
          <p>
            <ul>
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
                  coverage.
                </p>
              </li>
              <li>
                <h4>
                  <a class='link-light' href='http://www.dragapult.xyz/teamsheet-filler'>
                  Pokémon Teamsheet Filler
                  </a>
                </h4>
                <p>
                  A program for populating a printable teamsheet given a 
                  paste dump of the user's team (showdown export), as well
                  as required information about the user and the tournament. 
                  This is a client-side website and no information about the
                  user is stored by (or available to) myself or anyone else.
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
                  total results.
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
              <li>
                <h4>
                  <a class='link-light' href='https://github.com/damon-murdoch/custom-pwt'>
                    Custom Pokémon World Tournament (PWT)
                  </a>
                </h4>
                <p>
                  Not strictly VGC related, but this repository contains 
                  custom Pokémon World Tournament (PWT) files which can be
                  imported into Black and White 2 save files. For example, 
                  I have created the World Championships 2013 Top 4 bracket 
                  for players to enjoy.
                </p>
              </li>
              <li>
                <h4>
                  <a class='link-light' href='https://github.com/damon-murdoch/psmanage'>
                    (Advanced) Pokémon Showdown Manager
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
                    (Advanced) Pokémon Showdown Docker
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
                    (Advanced) Pokémon Showdown Parser
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
              <li>
                <h4>
                  <a class='link-light' href='#'>
                    Archived Tools
                  </a>
                </h4>
                <p>
                  These tools have all been archived, and are no longer
                  being maintained. They are only listed here for legacy purposes.
                </p>
                <ul>
                  <li>
                    <a class='text-light' href='https://github.com/damon-murdoch/pkmtools'>
                      Pokémon Tools (Superceded by Spread Optimiser)
                    </a>
                  </li>
                  <li>
                    <a class='text-light' href='https://github.com/damon-murdoch/jtk-coverage'>
                      JTK Coverage Calculator (Superceded by Coverage Calculator)
                    </a>
                  </li>
                  <li>
                    <a class='text-light' href='https://github.com/damon-murdoch/weakness-calculator'>
                      Pokémon Weakness Calculator (Superceded by Coverage Calculator)
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </p>
        </div>
      </div>
    `
  }, 
  "tcg": {
    "name": "TCG",
    "link": "?tcg",
    "title": "Pokémon TCG", 
    "content": `
      <div class="m-2 bg-secondary rounded">
        <div id="text-content">
          <p>
            This page is for content relating to the Pokémon
            Trading Card Game. In official competitive play, 
            decks are required to have exactly 60 cards and 
            must only contain cards which are legal within
            the current standard or expanded rotation,
            depending on the tournament format. Games are 
            typically best-of-three, but best of one is also
            common in large online tournaments. Deck changes
            are typically not allowed mid-tournament. 
          </p>
          <p>
            I have personally competed in the competitive 
            Pokémon TCG scene since 2016, however I have 
            been unable to play any large events due to
            VGC and TCG running at the same time. However,
            I have recently started developing software and
            resources for the Pokémon TCG. These resoruces
            are listed below.
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
                (Advanced) Pokémon Trading Card Game Online to JSON Converter
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
      </div>
    `
  }, 
  "ssb": {
    "name": "SSB",
    "link": "?ssb",
    "title": "Super Smash Brothers", 
    "content": `
      <div class="d-flex m-2 bg-secondary rounded">
        <div id="text-content">
          <p>
            This page is for resources relating to Super
            Smash Brothers, which is a platform fighting game 
            developed by Sora Ltd. and directed by Masahiro
            Sakurai. All Smash games have some level of play
            at a competitive level, primarily Super Smash 
            Bros. Melee for the Nintendo Gamecube and Super
            Smash Bros. Ultimate for the Nintendo Switch. 
          </p>
          <p>
            While I don't personally compete in Smash
            at any competitive level, I have attended a few
            local tournaments and have enjoyed watching majors
            since 2016. I have made one piece of software
            for this game, at the request of my good friend 
            and Smash Ultimate Speedrunner
            <a class='link-light' href='https://twitter.com/Arahpthos'>
              Arahpthos.
            </a>
            If the opportunity arises, I may develop more
            for this game in the future. More information 
            and links to this software can be found below.
          </p>
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
        </div>
      </div>
    `
  }, 
  "wmmt": {
    "name": "WMMT",
    "link": "?wmmt",
    "title": "Wangan Midnight Maximum Tune", 
    "content": `
      <div id="text-content">
        <p>
          This page is for resources relating to
          Wangan Midnight Maximum Tune, which is
          a series of arcade racing games developed 
          and published by NAMCO since 2004. It is 
          based on the popular manga series
          <i> Wangan Midnight. </i> The games
          are typically played in arcades, 
          using a tuning card or Banapassport
          to track the user's cars and progress.
          There have been 6 main games in the 
          series, with the most recent being 6RR 
          in Asia and 5DX+ in North America. The
          game has three main single player aspects:
          <ul>
            <li>
              Story Mode - Play through the story of the
              Wangan Midnight Series and rank up your
              car from beginner tune to fully tuned
            </li>
            <li>
              Time Attack Mode - Race against the clock 
              to achieve the fastest time on any given
              track
            </li>
            <li>
              Ghost Battle Mode - Race against simulated 
              'ghosts' of real players cars controlled 
              by AIs and unlock visual parts for your car.
            </li>
          </ul>
          In addition to this, you can also play against
          other players at the same arcade locally to earn
          versus stars, which increase your ranking and
          you win a free game for every race you come first.
        </p>
        <p>
          I have been playing Maximum Tune since 2019 in a 
          a casual capacity, however I have been playing more
          competitively since early 2021. In addition to 
          playing on original hardware, I also frequently 
          play on emulator using 
          <a class='link-light' href=''>
            TeknoParrot
          </a>
          in my home setup, which has a racing seat and 
          a logitech wheel. I have worked on a lot of 
          software for Maximum tune, primarily in the
          emulation community however I have also 
          created resources with information for the
          traditional game. These resources can be
          found below.
        </p>
        <ul>
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
              requirements, how to earn different titles etc. I will
              most likely convert this to its own full web page in
              the future, however for now it is a simple markup 
              document.
            </p>
          </li>
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
              exclusively for emulators.
            </p>
          </li>
          <li>
            <h4>
              <a class='link-light' href='https://github.com/damon-murdoch/wmmt-ref/blob/master/readme.md'>
                Universal Mod Loader
              </a>
            </h4>
            <p>
              A python application for installing and uninstalling 
              mods without losing files. Designed for use with the 
              Maximum Tune Arcade titles on TeknoParrot, but should 
              in theory be usable with any game.
            </p>
          </li>
          <li>
            <h4>
              <a class='link-light' href='https://github.com/damon-murdoch/wmmt-ref/blob/master/readme.md'>
                (Advanced) Wangan Midnight Maximum Tune Mod Tools
              </a>
            </h4>
            <p>
              A series of Python applications for creating mods
              for the Maximum Tune series of arcade games on
              Teknoparrot. Currently supports creating Meter
              replacement mods and Music replacement mods.
            </p>
          </li>
          <li>
            <h4>
              <a class='link-light' href='#'>
                Archived Tools
              </a>
            </h4>
            <p>
              These tools have all been archived, and are no longer
              being maintained. They are only listed here for legacy purposes.
            </p>
            <ul>
              <li>
                <a class='text-light' href='https://github.com/damon-murdoch/wmmt6-car-editor'>
                  Wangan Midnight Maximum Tune 6 Car Editor (Superceded by WMMT Car Editor)
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    `
  }
};