const useStyle = () => {
  // ==== Colors ==== //
  const COLORS: { [key: string]: string } = {
    main: "#12327d",
    oceanBlue: "#176caa",
    lightPink: "#f6a8cf",
    peach: "#f6baa4",
    skyBlue: "#1fb1d8",
  };

  const CONTRAST = {
    white: "#FFFFFF",
    black: "#202020",
    gray: "#555555",
  };

  // ==== TYPOS ==== //
  const TYPOGRAPHYS = {
    title1: {
      fontSize: "4rem",
      fontWeight: "700",
      fontFamily: "Roboto, sans-serif",
    },

    title2: {
      fontSize: "3.5rem",
      fontWeight: "700",
      fontFamily: "Roboto, sans-serif",
    },

    title3: {
      fontSize: "3rem",
      fontWeight: "700",
      fontFamily: "Roboto, sans-serif",
    },

    text1: {
      fontSize: "1.8rem",
      lineHeight: "3rem",
      fontWeight: "400",
      fontFamily: "Roboto, sans-serif",
    },

    text2: {
      fontSize: "1.5rem",
      fontWeight: "400",
      fontFamily: "Roboto, sans-serif",
    },

    text3: {
      fontSize: "1.1rem",
      fontWeight: "400",
      fontFamily: "Roboto, sans-serif",
    },
  };

  return { COLORS, CONTRAST, TYPOGRAPHYS };
};

export default useStyle;
