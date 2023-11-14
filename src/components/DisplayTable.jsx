import React from "react";
import { Link } from "react-router-dom";

const DisplayTable = ({ data, repositories }) => {
  return (
    <table className="min-w-full h-screen ">
      <thead>
        <tr>
          <th className="px-4 py-2 text-white">Name</th>
          <th className="px-4 py-2 text-white">Avatar</th>
          <th className="px-4 py-2 text-white">Location</th>
          <th className="px-4 py-2 text-white">Bio</th>
          <th className="px-4 py-2 text-white">Repositories</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2 text-white">{data.name}</td>
          <td className="border px-4 py-2">
            {!data.avatar_url ? (
              " "
            ) : (
              <img
                className="w-12 h-12 rounded-full"
                src={data.avatar_url}
                alt={data.avatar_url}
              />
            )}
          </td>
          <td className="border px-4 py-2 text-white">{data.location}</td>
          <td className="border px-4 py-2 text-white">{data.bio}</td>
          <td className="border px-4 py-2 text-white">
            {repositories.map((repo) => (
              <div className="mb-2" key={repo.name}>
                <i className="text-xl align-middle mr-1 fab fa-github"></i>
                <Link
                  to={repo.html_url}
                  className="text-blue-600 hover:underline hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.name}
                </Link>
              </div>
            ))}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default DisplayTable;
