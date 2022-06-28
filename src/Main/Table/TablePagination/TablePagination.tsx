import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/reducer';
import { PaginationBtn } from './PaginationBtn';
import styles from './tablepagination.css';
import { currentPage } from '../../../store/pages/action';
import { postRequestAsync } from '../../../store/post/action';

import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";


const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#98d7af",
    },
    "& .MuiPaginationItem-root:hover": {
      color: "#98d7af",
      backgroundColor: "#FFF"
    },
    "& .MuiPaginationItem-ellipsis:hover": {
      backgroundColor: "rgba(0, 0, 0, 0)"
    }
  }
}));

export function TablePagination() {
  const pagesnumber = useSelector<RootState, number>(state => state.pages.allpagenumber);
  const disaptch = useDispatch();
  const classes = useStyles();
  function handleChange(event: React.ChangeEvent<unknown>, value: number) {
    disaptch(currentPage(value));
    disaptch(postRequestAsync())
  }
  return (

    <Pagination
      count={pagesnumber}
      onChange={handleChange}
      hideNextButton = {true}
      hidePrevButton = {true}
      classes={{ ul: classes.ul }}
    />
  );
}
