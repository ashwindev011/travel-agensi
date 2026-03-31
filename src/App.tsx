/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter } from 'react-router-dom';
import InitialLoader from './components/InitialLoader';
import AnimatedRoutes from './components/AnimatedRoutes';

export default function App() {
  return (
    <BrowserRouter>
      <InitialLoader />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
