import Avatar from "@mui/material/Avatar";

// Function to generate a background color based on the input string
function stringToColor(string) {
  if (string[0].toUpperCase() === "P") {
    return "#f9af5e";
  } else if (string[0].toUpperCase() === "H") {
    return "#0188d1";
  } else {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  }
}

// Function to generate Avatar props
function generateAvatarProps(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export default function BackgroundLetterAvatars({ id, name }) {
  return <Avatar key={id} {...generateAvatarProps(name)} />;
}
