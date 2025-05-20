import content from '../content/cms.json';

import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>${content.title}</h1>
    <div class="card">
      ${content.description}
    </div>
    <div class="card">
      <a href="/admin/index.html" class="button">Edit this page</a>
      <a href="https://github.com/decapbridge/decapbridge-demo-site/tree/main" class="button">View on Github</a>
    </div>
    <p class="dimmed">
      DecapBridge is powered by <a href="https://millisecond.studio/" target="_blank">millisecond.studio</a>.
    </p>
  </div>
`;
