/* ============================================================
   partials.js — injects the disclaimer banner, site header
   (logo + desktop nav) and mobile nav into every page.

   Usage: add <div id="site-chrome"></div> as the very first
   thing inside <body>, then include this script:
     <script src="https://migovt.org/partials.js"></script>
   The footer is NOT included here — each page keeps its own.
   ============================================================ */

(function () {
  var CHROME_HTML = `
  <div class="site-chrome-sticky">
  <div class="disclaimer-banner">
    <div class="inner">
      <span class="bang" aria-hidden="true">!</span>
      <span><strong>This is not an official government website.</strong> This site is a simulated government interface and does not represent any real government body or authority. <a href="https://migovt.org/disclaimer">Read the full disclaimer</a></span>
    </div>
  </div>

  <input type="checkbox" id="nav-toggle" class="nav-toggle-checkbox">

  <header class="site-header">
    <div class="inner">
      <a class="logo-link" href="https://migovt.org/" aria-label="MiGOVT, State of Michigan"><img src="https://migovt.org/banner.svg" alt="MiGOVT, State of Michigan"></a>

      <div class="nav-actions-wrap">
      <nav class="main-nav" aria-label="Primary">
        <ul>
          <li>
            <a href="https://migovt.org/visit/">Visitors <svg class="chev" viewBox="0 0 12 8" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 1l5 5 5-5"/></svg></a>
            <div class="dropdown dropdown-simple">
              <ul>
                <li><a href="https://migovt.org/citizenship/">Get citizenship</a></li>
                <li><a href="https://migovt.org/tourism/">Tourism</a></li>
                <li><a href="https://migovt.org/dnr/hunting-fishing/">Hunting &amp; Fishing</a></li>
                <li><a href="https://migovt.org/dnr/state-parks/">State Parks</a></li>
                <li><a href="https://migovt.org/events">Events</a></li>
                <li><a href="https://migovt.org/mdot/travel-info/">Travel information</a></li>
              </ul>
            </div>
          </li>

          <li>
            <a href="https://migovt.org/residents/">Michiganders <svg class="chev" viewBox="0 0 12 8" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 1l5 5 5-5"/></svg></a>
            <div class="dropdown dropdown-simple">
              <ul>
                <li><a href="https://migovt.org/housing/">Housing</a></li>
                <li><a href="https://migovt.org/vote/">Voting</a></li>
                <li><a href="https://migovt.org/treasury/taxes/">Taxes</a></li>
                <li><a href="https://migovt.org/jobs/">Employment</a></li>
              </ul>
            </div>
          </li>

          <li>
            <a href="https://migovt.org/services/">Services</a>
          </li>

          <li>
            <a href="https://migovt.org/directory/">State Government <svg class="chev" viewBox="0 0 12 8" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 1l5 5 5-5"/></svg></a>
            <div class="dropdown dropdown-mega">
              <div class="col">
                <div class="dropdown-col-title">Executive</div>
                <ul>
                  <li><a href="https://migovt.org/governor/">Governor &amp; Lt. Governor</a></li>
                  <li><a href="https://migovt.org/governor/cabinet/">Cabinet</a></li>
                  <li><a href="https://migovt.org/ag/">Attorney General</a></li>
                  <li><a href="https://migovt.org/sos/">Secretary of State</a></li>
                  <li><a href="https://migovt.org/departments/">Departments</a></li>
                </ul>
              </div>
              <div class="col">
                <div class="dropdown-col-title">Legislature</div>
                <ul>
                  <li><a href="https://migovt.org/legislature/">Website</a></li>
                  <li><a href="https://migovt.org/capitol/">State Capitol</a></li>
                  <li><a href="https://migovt.org/legislature/legislators/">Legislators</a></li>
                </ul>
              </div>
              <div class="col">
                <div class="dropdown-col-title">Judiciary</div>
                <ul>
                  <li><a href="https://migovt.org/courts/">Website</a></li>
                  <li><a href="https://migovt.org/courts/supreme-court/">Supreme Court</a></li>
                  <li><a href="https://migovt.org/courts/district-courts/">District Courts</a></li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <a href="https://migovt.org/local/">Local Government <svg class="chev" viewBox="0 0 12 8" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 1l5 5 5-5"/></svg></a>
            <div class="dropdown dropdown-mega cols-2">
              <div class="col">
                <div class="dropdown-col-title">Genesee County</div>
                <ul>
                  <li><a href="https://migovt.org/genesee-county/">Website</a></li>
                  <li><a href="https://migovt.org/genesee-county/elections/">Elections</a></li>
                  <li><a href="https://migovt.org/genesee-county/board-of-commissioners/">Board of Commissioners</a></li>
                  <li><a href="https://migovt.org/genesee-county/clerk">County Clerk</a></li>
                  <li><a href="https://migovt.org/genesee-county/sheriffs-office">Sheriff's Office</a></li>
                  <li><a href="https://migovt.org/genesee-county/district-court/">District Court</a></li>
                </ul>
              </div>
              <div class="col">
                <div class="dropdown-col-title">City of Flint</div>
                <ul>
                  <li><a href="https://migovt.org/flint/">Website</a></li>
                  <li><a href="https://migovt.org/flint/elections/">Elections</a></li>
                  <li><a href="https://migovt.org/flint/mayor/">Mayor</a></li>
                  <li><a href="https://migovt.org/flint/city-council/">City Council</a></li>
                  <li><a href="https://migovt.org/flint/departments/">Departments</a></li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <a href="https://migovt.org/about">About</a>
          </li>
        </ul>
      </nav>

      <div class="header-actions">
        <a class="login-link" href="https://migovt.org/login/">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          Log in
        </a>

        <label class="nav-toggle-btn" for="nav-toggle" aria-label="Open menu">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </label>
        </div>
      </div>
    </div>
  </header>

  <nav class="mobile-nav" aria-label="Primary mobile">
    <a class="login-link-mobile" href="https://migovt.org/login/">
      <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
      Log in
    </a>
    <details>
      <summary>Visitors</summary>
      <div class="sub-list">
        <a href="https://migovt.org/visit/">Visitors overview</a>
        <a href="https://migovt.org/citizenship/">Get citizenship</a>
        <a href="https://migovt.org/tourism/">Tourism</a>
        <a href="https://migovt.org/dnr/hunting-fishing/">Hunting &amp; Fishing</a>
        <a href="https://migovt.org/dnr/state-parks/">State Parks</a>
        <a href="https://migovt.org/events">Events</a>
        <a href="https://migovt.org/mdot/travel-info/">Travel information</a>
      </div>
    </details>
    <details>
      <summary>Michiganders</summary>
      <div class="sub-list">
        <a href="https://migovt.org/residents/">Michiganders overview</a>
        <a href="https://migovt.org/housing/">Housing</a>
        <a href="https://migovt.org/vote/">Voting</a>
        <a href="https://migovt.org/treasury/taxes/">Taxes</a>
        <a href="https://migovt.org/jobs/">Employment</a>
      </div>
    </details>
    <a href="https://migovt.org/services/">Services</a>
    <details>
      <summary>State Government</summary>
      <div class="sub-list">
        <a href="https://migovt.org/directory/">State Government overview</a>
        <div class="group-label">Executive</div>
        <a href="https://migovt.org/governor/">Governor &amp; Lt. Governor</a>
        <a href="https://migovt.org/governor/cabinet/">Cabinet</a>
        <a href="https://migovt.org/ag/">Attorney General</a>
        <a href="https://migovt.org/sos/">Secretary of State</a>
        <a href="https://migovt.org/departments/">Departments</a>
        <div class="group-label">Legislature</div>
        <a href="https://migovt.org/legislature/">Website</a>
        <a href="https://migovt.org/capitol/">State Capitol</a>
        <a href="https://migovt.org/legislature/legislators/">Legislators</a>
        <div class="group-label">Judiciary</div>
        <a href="https://migovt.org/courts/">Website</a>
        <a href="https://migovt.org/courts/supreme-court/">Supreme Court</a>
        <a href="https://migovt.org/courts/sbm/">State Bar of Michigan</a>
        <a href="https://migovt.org/courts/district-courts/">District Courts</a>
      </div>
    </details>
    <details>
      <summary>Local Government</summary>
      <div class="sub-list">
        <a href="https://migovt.org/local/">Local Government overview</a>
        <div class="group-label">Genesee County</div>
        <a href="https://migovt.org/genesee-county/">Website</a>
        <a href="https://migovt.org/genesee-county/elections/">Elections</a>
        <a href="https://migovt.org/genesee-county/board-of-commissioners/">Board of Commissioners</a>
        <a href="https://migovt.org/genesee-county/clerk">County Clerk</a>
        <a href="https://migovt.org/genesee-county/sheriffs-office">Sheriff's Office</a>
        <a href="https://migovt.org/genesee-county/district-court/">District Court</a>
        <div class="group-label">City of Flint</div>
        <a href="https://migovt.org/flint/">Website</a>
        <a href="https://migovt.org/flint/elections/">Elections</a>
        <a href="https://migovt.org/flint/mayor/">Mayor</a>
        <a href="https://migovt.org/flint/city-council/">City Council</a>
        <a href="https://migovt.org/flint/departments/">Departments</a>
      </div>
    </details>
    <a href="https://migovt.org/about">About</a>
  </nav>
  </div>
  `;

  function inject() {
    var mount = document.getElementById('site-chrome');
    if (!mount) {
      console.warn('partials.js: no #site-chrome element found — banner/nav not injected.');
      return;
    }
    mount.outerHTML = CHROME_HTML;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();