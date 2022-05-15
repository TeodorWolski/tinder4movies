import ReactDOM from 'react-dom/client';
import Root from 'views/Root/Root';
import { worker } from 'mocks/browser';
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = ReactDOM.createRoot(document.getElementById('root')!);

async function main() {
  if (process.env.NODE_ENV === 'development') {
    if (window.location.pathname === '/tinder4movies') {
      window.location.pathname = '/tinder4movies/';
      return;
    }

    await worker.start({
      serviceWorker: {
        url: '/tinder4movies/mockServiceWorker.js',
      },
    });
  }
  root.render(<Root />);
}
main();
