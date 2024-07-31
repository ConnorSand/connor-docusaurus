// src/theme/MDXComponents.tsx
import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

interface CustomMDXComponents extends Record<string, React.ComponentType<any>> {
  FAIcon: typeof FontAwesomeIcon;
}

const customMDXComponents: CustomMDXComponents = {
  ...MDXComponents,
  FAIcon: FontAwesomeIcon,
};

export default customMDXComponents;
