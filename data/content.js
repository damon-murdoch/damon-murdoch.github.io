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
                  <a class='link-light' href='https://github.com/damon-murdoch/Pokémon-showdown-docker'>
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
                  <a class='link-light' href='https://hub.docker.com/r/scrubbs/Pokémon-showdown-docker'>
                    here.
                  </a>
                </p>
              </li>
              <li>
                <h4>
                  <a class='link-light' href='https://github.com/damon-murdoch/ps-parser'>
                    (Advanced) Pokémon Showdown Parser
                  </a>
                </h4>
                <p>
                  This is a repository for parsers for Pokémon Showdown! Set 
                  files, written for several different languages. The intention 
                  of this is for the files to be able to be dropped into and used 
                  by any project. Currently JavaScript, PowerShell and Python versions 
                  have been implemented.
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
      <div class="d-flex m-2 bg-secondary rounded">
        <div id="text-content">
          <p>
            This page is still under construction. Please
            excuse us during our redesign!
          </p>
        </div>
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
            This page is still under construction. Please
            excuse us during our redesign!
          </p>
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
          This page is still under construction. Please
          excuse us during our redesign!
        </p>
      </div>
    `
  }
};