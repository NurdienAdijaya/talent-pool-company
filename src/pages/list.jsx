import React, { useEffect, useState } from "react";
import { Button, Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Card from "../components/card";
import Loading from "../components/loading";
import ModalComponent from "../components/modal";
import TrackerCard from "../components/trackerCard";
import TrackerModal from "../components/trackerModal";
import { getList } from "../store/action/list";

const List = () => {
  const dispatch = useDispatch();
  const { section } = useParams();
  const { lists, listLoading } = useSelector(
    (state) => state?.list?.entityList
  );

  const limit = 16;
  const totalPage =
    lists?.count / limit === 1 ? 1 : Math.floor(lists?.count / limit + 1);
  const [page, setPage] = useState(1);

  const previousPage = () => setPage(page - 1);
  const nextPage = () => setPage(page + 1);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showTracker, setShowTracker] = useState(false);
  const handleCloseTracker = () => setShowTracker(false);
  const handleShowTracker = () => setShowTracker(true);

  useEffect(() => {
    dispatch(getList(section, page));
  }, [dispatch, section, page]);

  return (
    <div>
      {listLoading ? (
        <Loading />
      ) : (
        <>
          <div className="title_add_modal">
            <h1>{`List ${section}`}</h1>
            {section === "trackers" ? (
              <Button variant="primary" onClick={handleShowTracker}>
                Add new
              </Button>
            ) : (
              <Button variant="primary" onClick={handleShow}>
                Add new
              </Button>
            )}
          </div>
          {section === "trackers" ? (
            <>
              <TrackerCard lists={lists} />
            </>
          ) : (
            <>
              <Card lists={lists} />
            </>
          )}
        </>
      )}
      {listLoading ? null : totalPage > 1 ? (
        <div classname="pagination">
          <Pagination>
            {page > 1 ? <Pagination.Prev onClick={previousPage} /> : null}
            <Pagination.Item active>{page}</Pagination.Item>
            {page < totalPage ? <Pagination.Next onClick={nextPage} /> : null}
          </Pagination>
        </div>
      ) : null}
      <ModalComponent sec={section} show={show} onClick={handleClose} />
      <TrackerModal
        sec={section}
        show={showTracker}
        onClick={handleCloseTracker}
      />
    </div>
  );
};

export default List;
