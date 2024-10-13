type OdinusUIConfig = {
  componentsFolder: string;
  components: string[];
  isTs: boolean;
  isSsr: boolean;
  tailwind: {
    config: string;
    css: string;
    cssVariables: string;
    prefix: string;
  };
  aliases: {
    components: string;
    utils: string;
  };
};
