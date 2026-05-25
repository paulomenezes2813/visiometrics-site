import { defineConfig } from 'vite';

export default defineConfig({
  // GitHub Pages serve o repo em /visiometrics-site/, não na raiz do domínio.
  // Sem isso, o HTML buildado referencia /assets/... que vira 404 no Pages
  // (procura no root do github.io, não no subpath do projeto).
  base: '/visiometrics-site/',
});
