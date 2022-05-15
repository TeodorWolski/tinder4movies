import ReactDOM from 'react-dom/client';
import Root from 'views/Root/Root';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = ReactDOM.createRoot(document.getElementById('root')!);

if (process.env.NODE_ENV === 'development') {
  import('mocks/browser')
    .then(({ worker }) => {
      worker.start();
    })
    .then(() => {
      root.render(<Root />);
    });
} else {
  root.render(<Root />);
}
