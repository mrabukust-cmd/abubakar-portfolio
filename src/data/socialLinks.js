export const socialLinks = {
  github: "https://github.com/mrabukust-cmd",
  linkedin: "https://www.linkedin.com/in/abu-bakar-siddique-a82747425/",
  email: "abubakar1siddique2@gmail.com",
  mailto: "mailto:abubakar1siddique2@gmail.com"
};

export const formatSocialDisplay = (url) => {
  if (!url) return '';
  return url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
};

