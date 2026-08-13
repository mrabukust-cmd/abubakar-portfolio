import React from 'react';
import { FaMobileAlt, FaServer, FaBolt, FaCodeBranch, FaVideo, FaAndroid, FaExternalLinkAlt, FaBookOpen } from 'react-icons/fa';

export const getCategoryIcon = (iconName) => {
  switch (iconName) {
    case 'FaMobileAlt':
      return <FaMobileAlt />;
    case 'FaServer':
      return <FaServer />;
    case 'FaBolt':
      return <FaBolt />;
    case 'FaCodeBranch':
      return <FaCodeBranch />;
    default:
      return <FaMobileAlt />;
  }
};

export const getDemoIcon = (demoType) => {
  switch (demoType) {
    case 'video':
      return <FaVideo />;
    case 'apk':
      return <FaAndroid />;
    case 'live':
      return <FaExternalLinkAlt />;
    default:
      return <FaBookOpen />;
  }
};
