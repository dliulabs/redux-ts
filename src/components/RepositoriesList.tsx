import React from "react";
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { actionCreators } from "../state";
import { useActions } from "../hooks/useActions";
// import { useSelector } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("react");
  // const dispatch = useDispatch();
  const { searchRepositories } = useActions();

  // https://redux.js.org/usage/usage-with-typescript#typing-the-useselector-hook
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );
  console.log(data);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // dispatch(actionCreators.searchRepositories(term) as any);
    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)}></input>
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading ...</h3>}
      {!error &&
        !loading &&
        data.map((pkg, i) => (
          <div key={pkg}>
            {i + 1}. {pkg}
          </div>
        ))}
    </div>
  );
};

export default RepositoriesList;
