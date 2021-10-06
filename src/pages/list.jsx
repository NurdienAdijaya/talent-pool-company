import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Card from "../components/card";
import Loading from "../components/loading";
import TrackerCard from "../components/trackerCard";
import { getList } from "../store/action/list";

const List = () => {
  const dispatch = useDispatch();
  const { section } = useParams();
  const { lists, listLoading } = useSelector(
    (state) => state?.list?.entityList
  );

  useEffect(() => {
    dispatch(getList(section));
  }, [dispatch, section]);
  return (
    <div>
      <h1>{`ini ${section}`}</h1>
      {listLoading ? (
        <Loading />
      ) : section === "trackers" ? (
        <>
          <TrackerCard lists={lists} />
        </>
      ) : (
        <>
          <Card lists={lists} />
        </>
      )}
    </div>
  );
};

export default List;
