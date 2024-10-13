// src/theme/MDXComponents.tsx
import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

// Import our new LazyFAIcon component
import LazyFAIcon from '../components/LazyFAIcon';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  FAIcon: LazyFAIcon, // Replace FontAwesomeIcon with our LazyFAIcon component
};
