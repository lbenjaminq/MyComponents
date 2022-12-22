import { Link, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Pages } from './Navbar';

interface Props {
  pages: Pages[];
  row?: boolean;
};

export const Lists: React.FC<Props> = ({ pages, row }) => {
  return (
    <List
      component='nav'
      sx={row ? ListRow : ListColumn}
    >
      {
        pages &&
        pages.map((page) => (
          <Link
            href={page.link}
            sx={ListText}
            key={page.title}
          >
            <ListItem>
              <ListItemIcon sx={{ color: "#fff" }}>
                {page.icon}
              </ListItemIcon>
              <ListItemText primary={page.title} sx={{ marginLeft: "-25px" }} />
            </ListItem>
            <Divider variant="middle" sx={{ background: "white" }} />
          </Link>
        ))
      }
    </List >
  )
};

const ListText = {
  textDecoration: "none",
  fontSize: "2rem",
  color: "#fff",
  transition: "1s",
  "&:hover": {
    margin: "0 20px",
    color: "#FCFF8B"
  }
};

const ListRow = {
  display: "flex"
};

const ListColumn = {
  width: "250px"
};