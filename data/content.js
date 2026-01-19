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
          Trading Card Game Championships, as well as other games such
          as Wangan Midnight Maximum Tune and the Umamusume mobile game.
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
  }
};
