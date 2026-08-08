import React from 'react';
import {
  FaGraduationCap,
  FaMobileAlt,
  FaRocket,
  FaServer,
  FaBolt,
  FaCodeBranch,
  FaCheck,
  FaFire,
  FaPlug,
  FaVideo,
  FaAndroid,
  FaExternalLinkAlt,
  FaBookOpen
} from 'react-icons/fa';
import { SiFlutter, SiDart, SiFirebase, SiGit, SiGithub } from 'react-icons/si';

export const getRoleIcon = (role = '') => {
  if (role.includes('Student')) return <FaGraduationCap />;
  if (role.includes('Flutter')) return <FaMobileAlt />;
  return <FaRocket />;
};

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

export const getCapabilityIcon = (iconName) => {
  switch (iconName) {
    case 'FaMobileAlt':
      return <FaMobileAlt />;
    case 'FaFire':
      return <FaFire />;
    case 'FaPlug':
      return <FaPlug />;
    case 'FaBolt':
      return <FaBolt />;
    default:
      return <FaMobileAlt />;
  }
};

export const getSkillTechIcon = (skillName = '') => {
  const lower = skillName.toLowerCase();
  if (lower.includes('flutter')) return <SiFlutter style={{ color: '#38BDF8' }} />;
  if (lower.includes('dart')) return <SiDart style={{ color: '#0175C2' }} />;
  if (lower.includes('firebase') || lower.includes('firestore')) return <SiFirebase style={{ color: '#FFCA28' }} />;
  if (lower.includes('git')) return <SiGit style={{ color: '#F05032' }} />;
  if (lower.includes('github')) return <SiGithub style={{ color: '#F8FAFC' }} />;
  return <FaCheck style={{ color: '#38BDF8', fontSize: '0.85rem' }} />;
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
