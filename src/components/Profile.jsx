import React, { useState } from "react";
import DisplayTable from "./DisplayTable";

const Profile = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();
    // console.log(profileJson);

    const repositories = await fetch(profileJson.repos_url);
    const repoJson = await repositories.json();
    console.log(repoJson);

    if (profileJson) {
      setData(profileJson);
      setRepositories(repoJson);
    }
  };
  return (
    <>
      <div style={{ padding: 20 }}>
        <div className="ui search">
          <div className="ui icon input">
            <i className="search icon"></i>
            <input
              className="prompt bg-slate-300 text-center rounded-xl"
              placeholder="search username here..."
              type="text"
              value={username}
              onChange={onChangeHandler}
            />
          </div>

          <button
            className="ui primary button mt-4 bg-slate-800 text-white border-2 rounded-xl w-16"
            type="submit"
            onClick={submitHandler}
          >
            <i className="github icon"></i>
            Search
          </button>
          <DisplayTable data={data} repositories={repositories} />
        </div>
      </div>
    </>
  );
};
export default Profile;
