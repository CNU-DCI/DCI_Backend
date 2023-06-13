package dciproject.backend.entireSubjects.entireSubject_2020;


import dciproject.backend.entireSubjects.EntireSubject;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Table
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EntireSubject_2020 implements EntireSubject {
    @Id
    private String subjectID; // 년도+과목코드+분반

    @Column(name="OPEN_YR")
    private String openYr; // 강의 년도

    @Column(name="SHTM")
    private String shtm; // 강의 학기

    @Column(name = "TRGT_SHYR")
    private String trgtShyr; // 대상 학년

    @Column(name = "ORGN_CLSF_CD")
    private String orgnClsfCd; // 조직명(대학)

    @Column(name = "COLG")
    private String colg; // 단과대학명

    @Column(name = "DEGR_NM_SUST")
    private String degrNmSust; // 학과명

    @Column(name = "OPEN_SBJT_NO")
    private String openSbjtNo; // 과목 번호

    @Column(name = "OPEN_DCLSS")
    private String openDclss; // 분반 번호

    @Column(name = "OPEN_SBJT_NM")
    private String openSbjtNm; // 과목명

    @Column(name = "CPTN_DIV_NM")
    private String cptnDivNm; // 이수구분

    @Column(name = "PNT")
    private String pnt; // 학점

    @Column(name = "THEO_TMCNT")
    private String theoTmcnt; // 이론시수

    @Column(name = "PRAC_TMCNT")
    private String pracTmcnt; // 실습시수

//    @Column(length = 5000)
//    private String LSN_SMRY; // 수업 개요
//
//    @Column(length = 1000)
//    private String SBJT_SHT; // 교과목표
//
//    @Column(length = 5000)
//    private String TEMT_REF_LITRT; // 참고 문헌
//
//    @Column(length = 1000)
//    private String REF_BOOK; // 참고 도서
//
//    @Column(length = 1000)
//    private String PRE_LRN_CN; // 선수 학습 내용
}
