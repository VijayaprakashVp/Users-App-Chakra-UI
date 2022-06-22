import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery, useMutation } from "react-query";
import { Button, Heading, Input, Image } from "@chakra-ui/react";
import axios from "axios";

export const UserDetails = () => {
  const [edit, setEdit] = useState(true);
  const [showform, setShowform] = useState(true);
  const id = useParams(); // to get the id from the link
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const { isLoading, error, data } = useQuery("userData1", () =>
    axios(`https://62b008c7e460b79df03b7410.mockapi.io/users/${id.id}`),
  );

  const handleEditSubmit = () => {
    fetch(`https://62b008c7e460b79df03b7410.mockapi.io/users/${id.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    });

    fetch(`https://62b008c7e460b79df03b7410.mockapi.io/users/`, {
      method: "POST",
      body: JSON.stringify({
        name,
        avatar,
        id: id.id,
      }),
      headers: { "Content-Type": "application/json" },
    });
    // console.log(name, avatar);
    alert("Yay! Data Modified");
    setEdit(false);
    setShowform(false);
  };

  const { mutate } = useMutation(handleEditSubmit);
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>error : {error.message}</h1>;

  return (
    <div>
      <Link to={"/"} style={{ marginLeft: "-300px" }}>
        <Button variant="outline" colorScheme="teal" ml="-20%" mt="5">
          Back to Home
        </Button>
      </Link>

      {edit ? (
        <Heading>Existing User Details</Heading>
      ) : (
        <Heading>Updated User Details</Heading>
      )}

      <div>
        <Image
          borderRadius="full"
          boxSize="150px"
          src={data.data.avatar}
          alt={data.data.name}
          m="auto"
          my="5"
        />
        <h4>Name : {name ? name : data.data.name}</h4>
        <p>User-ID : {data.data.id}</p>
      </div>

      {showform ? (
        <div>
          <h4>
            you can <span style={{ color: "red" }}>edit</span> Below:
          </h4>
          <form action="">
            Name :{" "}
            <Input
              type="text"
              variant="outline"
              placeholder={data.data.name}
              onChange={(e) => setName(e.target.value)}
              w="20%"
              value={name}
            />{" "}
            <br />
            <br />
            Avatar Link :{" "}
            <Input
              type="text"
              variant="outline"
              placeholder="Profile Image Link"
              onChange={(e) => setAvatar(e.target.value)}
              value={avatar}
              w="20%"
            />
          </form>
          <br />
          <Button
            variant="outline"
            colorScheme="teal"
            onClick={handleEditSubmit}
          >
            Submit
          </Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
