import ReactGA from 'react-ga4';

/**
 * Initialize google analytics with tracking ID and settings
 */
export function initializeGA() {
  ReactGA.initialize('G-Y7520HNKMG');
}

/**
 * updates reactga with a page change
 * @param {string} page The page to update ReactGA with.
 */
export function pageChange(page) {
  ReactGA.send({
    hitType: 'pageview',
    page: window.location.pathname + window.location.search,
  });
  const devQuery = '?utm_source=dev&utm_medium=dev';
  if (
    window.location.href.split('/').pop() !== devQuery &&
    // eslint-disable-next-line no-undef
    (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')
  ) {
    window.location.href = page + devQuery;
  }
}

/**
 * source badge click event handler
 */
export function sourceBadgeEvent() {
  ReactGA.event({
    category: 'User',
    action: `Clicked source badge`,
  });
}

/**
 * memu install click event handler
 */
export function memuDownloadEvent() {
  ReactGA.event({
    category: 'User',
    action: `Clicked memu download`,
  });
}

/**
 * test badge click event handler
 */
export function testBadgeEvent() {
  ReactGA.event({
    category: 'User',
    action: `Clicked test badge`,
  });
}

/**
 * pypi badge click event handler
 */
export function pypiBadgeEvent() {
  ReactGA.event({
    category: 'User',
    action: `Clicked pypi badge`,
  });
}

/**
 * python version badge click event handler
 */
export function pythonVersionBadgeEvent() {
  ReactGA.event({
    category: 'User',
    action: `Clicked python version badge`,
  });
}

/**
 * codefactor badge click event handler
 */
export function codeFactorBadgeEvent() {
  ReactGA.event({
    category: 'User',
    action: `Clicked codefactor badge`,
  });
}

/**
 * release link click event handler
 */
export function releaseLinkEvent() {
  ReactGA.event({
    category: 'User',
    action: 'Clicked release download link',
  });
}

/**
 * bug report link click event handler
 */
export function bugReportEvent() {
  ReactGA.event({
    category: 'User',
    action: 'Clicked bug report link',
  });
}

/**
 * feature request link click event handler
 */
export function featureRequestEvent() {
  ReactGA.event({
    category: 'User',
    action: 'Clicked feature request link',
  });
}
