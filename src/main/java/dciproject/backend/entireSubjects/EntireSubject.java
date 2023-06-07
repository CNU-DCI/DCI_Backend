package dciproject.backend.entireSubjects;

import jakarta.persistence.Column;
import jakarta.persistence.Id;

public interface EntireSubject {

    String getSubjectID(); // 년도+과목코드+분반
    String getOPEN_YR(); // 강의 년도
    String getSHTM(); // 강의 학기
    String getTRGT_SHYR(); // 대상 학년
    String getORGN_CLSF_CD(); // 조직명(대학)
    String getCOLG(); // 단과대학명
    String getDEGR_NM_SUST(); // 학과명
    String getOPEN_SBJT_NO(); // 과목 번호
    String getOPEN_DCLSS(); // 분반 번호
    String getOPEN_SBJT_NM(); // 과목명
    String getCPTN_DIV_NM(); // 이수구분
}
