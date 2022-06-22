import { useQuery, useMutation } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Heading, Image, Text } from "@chakra-ui/react";

export const Users = () => {
  // const [name, setName] = useState("");
  // const [avatar, setAvatar] = useState("");

  const { isLoading, error, data } = useQuery("userData", () =>
    axios(`https://62b008c7e460b79df03b7410.mockapi.io/users`),
  );
  //   console.log(data);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>error : {error.message}</h1>;

  return (
    <div>
      <Heading m="5" textDecoration="underline">
        Users List
      </Heading>
      <table style={{ margin: "auto" }}>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Avatar</th>
        </tr>
        {data.data.map((e, i) => (
          <tr key={e.id}>
            <td>{i + 1 + "."}</td>
            <td>
              <Text as="cite">{e.name}</Text>
            </td>
            <Image
              borderRadius="full"
              boxSize="50px"
              src={e.avatar}
              alt={e.name}
              m="auto"
              my="1"
            />
            <td>
              <Link to={`/userdetails/${e.id}`}>
                <Button
                  colorScheme="teal"
                  ml="50"
                  cursor="pointer"
                  variant="outline"
                >
                  Edit
                </Button>
              </Link>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};
