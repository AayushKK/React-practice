import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router";

export function ListWithAvatar({ categories }) {
  const nav = useNavigate();
  return (
    <Card className="max-w-[900px]">
      <List>

        {categories.map((cata) => {
          return <ListItem
            onClick={() => nav(`/categories-items/${cata.strCategory}`)}
            key={cata.idCategory}>
            <Avatar
              className="mr-5"
              size="xxl"
              variant="circular" alt="candice" src={cata.strCategoryThumb} />

            <div>
              <Typography variant="h6" color="blue-gray">
                {cata.strCategory}
              </Typography>
              <p variant="small" color="gray" className="font-normal line-clamp-3">
                {cata.strCategoryDescription}
              </p>
            </div>
          </ListItem>;
        })}



      </List>
    </Card>
  );
}