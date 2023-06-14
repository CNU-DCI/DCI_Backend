import axios from "axios";

export const getMajors = async () => {
    /*단과대학 및 학과 리스트*/
  try {
    const res = await axios({
      method: "get",
      url: "/api/subject/load-majors",
    });
    return res.data;
  } catch (e) {
    return e.message;
  }
};

export const getStatistics = async (id) => {
    /*1개 과목의 통계정보*/
    try {
        const res = await axios({
            method: "get",
            url: "/api/statistics/read",
            params: {
               subjectID: id
            }
        });
        return res.data;
    } catch(e) {
        return e.message;
    }
}

export const getRegistration = async (id) => {
    /*1개 과목의 수강신청 내역*/
    try {
        const res = await axios({
            method: "get",
            url: "/api/registration/read",
            params: {
               subjectID: id
            }
        });
        return res.data;
    } catch(e) {
        return e.message;
    }
}

export const getKeywordRank = async (rank, order) => {
    /*검색어 순위 목록*/
    try {
        const res = await axios({
            method: "get",
            url: "/api/keyword/rank",
            params: {
               rank,
               sortingOrder: order
            }
        });
        return res.data;
    } catch(e) {
        return e.message;
    }
}


export const getStatisticsRank = async (rank, order) => {
    /*검색어 순위 목록*/
    try {
        const res = await axios({
            method: "get",
            url: "/api/statistics/rank",
            params: {
               rank,
               sortingOrder: order
            }
        });
        return res.data;
    } catch(e) {
        return e.message;
    }
}


export const getAllClass = async (id, opener) => {
    /*검색어 순위 목록*/
    try {
        const res = await axios({
            method: "get",
            url: "/api/statistics/readAll-class",
            params: {
                subjectID: id,
               opener
            }
        });
        return res.data;
    } catch(e) {
        return e.message;
    }
}

export const search = async (year, shmt, cdn, colg, dn, keyword) => {
    /*검색어 순위 목록*/
    try {
        const res = await axios({
            method: "get",
            url: "/api/search",
            params: {
               year, shmt, cdn, colg, dn, keyword
            }
        });
        return res.data;
    } catch(e) {
        return e.message;
    }
}

