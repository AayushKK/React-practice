import { Avatar, Card, Typography } from "@material-tailwind/react";
import { DialogDefault } from "./DialogDefault";

const TABLE_HEAD = ["Username", "Email", "Avatar", 'Remove'];



export function TableWithStripedRows({ users, setUsers }) {

  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map(({ userId, username, email, avatar }, index) => (
            <tr key={userId} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {username}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {email}
                </Typography>
              </td>

              <td className="p-4">

                <Avatar src={avatar} alt="avatar" />

              </td>
              <td className="p-4">
                <DialogDefault setUsers={setUsers} userId={userId} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}