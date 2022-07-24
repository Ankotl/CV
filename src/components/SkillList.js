import { Box, List, ListItem, Typography } from "@mui/material";

const SkillList = ({ title, array }) => {
  return (
    <Box>
      <Typography
        variant="body2"
        sx={{
          fontSize: "16px",
          mt: { xs: "10px", md: "20px" },
          mb: { xs: "8px", md: "10px" },
        }}
      >
        {title}
      </Typography>
      <List
        sx={{
          display: "flex",
          gap: "10px",
          flexWrap: { xs: "wrap", md: "nowrap" },
        }}
      >
        {array.map((elem) => (
          <ListItem
            key={Math.random()}
            sx={{
              border: "1px solid #EBEBEB",
              borderRadius: "12px",
              maxWidth: "114px",
            }}
          >
            {elem}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SkillList;
