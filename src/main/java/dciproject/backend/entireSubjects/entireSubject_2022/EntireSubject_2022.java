package dciproject.backend.entireSubjects.entireSubject_2022;


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
public class EntireSubject_2022 implements EntireSubject {
    @Id
    private String subjectID; // 년도+과목코드+분반

    @Column
    private String OPEN_YR; // 강의 년도

    @Column
    private String SHTM; // 강의 학기

    @Column
    private String TRGT_SHYR; // 대상 학년

    @Column
    private String ORGN_CLSF_CD; // 조직명(대학)

    @Column
    private String COLG; // 단과대학명

    @Column
    private String DEGR_NM_SUST; // 학과명

    @Column
    private String OPEN_SBJT_NO; // 과목 번호

    @Column
    private String OPEN_DCLSS; // 분반 번호

    @Column
    private String OPEN_SBJT_NM; // 과목명

    @Column
    private String CPTN_DIV_NM; // 이수구분

    @Column
    private String PNT; // 학점

    @Column
    private String THEO_TMCNT; // 이론시수

    @Column
    private String PRAC_TMCNT; // 실습시수

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
