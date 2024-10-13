type file = {
  type: "registry:ui" | "registry:util" | "registry:data";
  content: string;
  path: string;
  target: "react" | "next";
};
