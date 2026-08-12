const PAGES = {
  home: {
    name: "Home",
    link: "?home",
    title: "Home",
    content: `
      <div id="text-content">
        <p>
          Hello and welcome to my website! My name is Damon and I'm a software 
          developer from Queensland, Australia.

          For years I have worked on many projects related to my hobbies such as Pokemon VGC, TCG and Umamusume.

          I also have a blog where I write team reports, season write-ups and other articles when I have time.
        </p>
        <p>
          You can also find me on these websites:
        </p>
        <div>
          <ul>
            <li>
              X
              <a class='link-light' href='https://x.com/SirScrubbington'>
                SirScrubbington
              </a>
            </li>
            <li>
              Twitch
              <a class='link-light' href='https://www.twitch.tv/sirscrubbington'>
                SirScrubbington
              </a>
            </li>
            <li>
              Youtube
              <a class='link-light' href='https://www.youtube.com/@sirscrubbington'>
                SirScrubbington
              </a>, 
              <a class='link-light' href='https://www.youtube.com/@sirscrubbington'>
                UmaScrubbs
              </a>
            </li>
            <li>
              Github
              <a class='link-light' href='https://github.com/damon-murdoch?tab=repositories'>
                damon-murdoch
              </a>
            </li>
          </ul>
        </div>
        <p>
          Thanks for checking out my website!
        </p>
      </div>
    `,
  },
  tools: {
    name: "Tools",
    link: "?tools",
    title: "Tools",
    content: `
        <div id="text-content">
          <p>
            Please see below for a list of tools I've created for various games and purposes, primarily Pokémon VGC.
          </p>
          <h3>
            Pokémon
          </h3>
        </div>
        <ul>
          <li>
            <h4>
              <a class='link-light' href='http://www.dragapult.xyz/break-my-team'>
                Pokémon Team Matchup "Break My Team" Tool
              </a>
            </h4>
            <p>
              The Break my Team tool is a tool for testing your team's matchups to other threats in the metagame
              as well as speed tiers, report generation, and more. This program supports VGC formats going all
              the way back to 2014, up to SCVI.
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
              coverage.
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
              <a class='link-light' href='https://github.com/damon-murdoch/ev-spread-helper'>
                Pokémon EV Spread Helper
              </a>
            </h4>
            <p>
              The Pokémon EV Spread Helper is a web application designed to assist 
              users in generating instructions for recreating Pokémon sets in-game.
            </p>
          </li>
          <li>
            <h4>
              <a class='link-light' href='http://www.dragapult.xyz/pokemon-teams'>
                Pokémon VGC Team Library
              </a>
            </h4>
            <p>
              An archive of teams I've been keeping since 2016, with hundreds of 
              teams from different formats. Many are teams that myself or others
              have used at tournaments, either with recreated spreads or the 
              originals where possible.
            </p>
          </li>
        </ul>
        <div>
          <h3>
            Other Games
          </h3>
        </div>
        <ul>
          <li>
            <h4>
              <a class='link-light' href='https://www.dragapult.xyz/ssbu-classic-igt-calc'>
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
          <li>
            <h4>
              <a class='link-light' href='https://www.dragapult.xyz/palworld-coverage-calculator'>
                Palworld Coverage Calculator
              </a>
            </h4>
            <p>
              A Palworld coverage calculator with supports offensive, 
              defensive, and base skill-based coverage. This tool is
              heavily outdated, and will be updated in the near future.
            </p>
          </li>
          <li>
            <h4>
              <a class='link-light' href='http://www.dragapult.xyz/pokemon-decks'>
                Pokémon TCG Deck Collection
              </a>
            </h4>
            <p>
              A library of deck lists from my personal collection, including a buylist 
              for cards which are required to finish them. Contains full card counts 
              and colour coding indicating completeness.
            </p>
          </li>
        </ul>
        <div>
          <h3>
            Archived Resources
          </h3>
          <p>
            These tools have all been archived, and are no longer maintained.
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
  blog: {
    name: "Blog", 
    link: "https://www.dragapult.xyz/blog", 
    title: "", // Not needed
    content: "" // Not needed
  }
};
