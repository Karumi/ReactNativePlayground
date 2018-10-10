import App from './src/App';
import Sentry from 'sentry-expo';

Sentry.config('https://b2ba5e1a6cbf4ff79a89291db6ecc3fb@sentry.io/1298369').install();

export default App;