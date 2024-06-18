import content from '../content/cms.json';

import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>${content.title}</h1>
    <div class="card">
      ${content.description}
    </div>
    <div class="card">
      <a href="/admin/index.html" target="_blank" class="button">Edit this page</a>
    </div>
    <div class="card">
      <a href="https://github.com/loteoo/decap-bridge" target="_blank">Github</a>
    </div>
    <p class="dimmed">
      Powered by Decap Bridge and millisecond.studio
    </p>
  </div>
`;
