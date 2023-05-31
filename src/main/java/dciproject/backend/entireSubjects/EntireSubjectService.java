package dciproject.backend.entireSubjects;

import dciproject.backend.entireSubjects.entireSubject_2020.EntireSubject_2020;
import dciproject.backend.entireSubjects.entireSubject_2021.EntireSubject_2021;
import dciproject.backend.entireSubjects.entireSubject_2022.EntireSubject_2022;
import jakarta.persistence.EntityManager;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class EntireSubjectService {

    private final EntityManager entityManager;

    public EntireSubjectService( EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Transactional
    public EntireSubject save(EntireSubject entireSubject){
        entityManager.persist(entireSubject);
        return entireSubject;
    }

    @Transactional
    public EntireSubject saveCommonSubjectData(int year,String id,String name){
        String[] info=id.split("-");
        EntireSubject subject= switch (year) {
            case 2022-> EntireSubject_2022.builder().
                    subjectID(id).OPEN_YR(String.valueOf(year)).SHTM(info[1] + "학기").
                    TRGT_SHYR("1").ORGN_CLSF_CD("학부").COLG("대학").DEGR_NM_SUST("학과공통").
                    OPEN_SBJT_NO(info[2] + "-" + info[3]).OPEN_DCLSS(info[4]).OPEN_SBJT_NM(name).
                    CPTN_DIV_NM("일반선택").PNT("0").THEO_TMCNT("0").PRAC_TMCNT("0").build();
            case 2021-> EntireSubject_2021.builder().
                    subjectID(id).OPEN_YR(String.valueOf(year)).SHTM(info[1] + "학기").
                    TRGT_SHYR("1").ORGN_CLSF_CD("학부").COLG("대학").DEGR_NM_SUST("학과공통").
                    OPEN_SBJT_NO(info[2] + "-" + info[3]).OPEN_DCLSS(info[4]).OPEN_SBJT_NM(name).
                    CPTN_DIV_NM("일반선택").PNT("0").THEO_TMCNT("0").PRAC_TMCNT("0").build();
            case 2020-> EntireSubject_2020.builder().
                    subjectID(id).OPEN_YR(String.valueOf(year)).SHTM(info[1] + "학기").
                    TRGT_SHYR("1").ORGN_CLSF_CD("학부").COLG("대학").DEGR_NM_SUST("학과공통").
                    OPEN_SBJT_NO(info[2] + "-" + info[3]).OPEN_DCLSS(info[4]).OPEN_SBJT_NM(name).
                    CPTN_DIV_NM("일반선택").PNT("0").THEO_TMCNT("0").PRAC_TMCNT("0").build();
            default -> null;
        };

        return save(subject);
    }

    @Transactional
    public EntireSubject findByID(int year,String id,String name){
        EntireSubject subject= switch (year) {
            case 2020 -> entityManager.find(EntireSubject_2020.class, id);
            case 2021 -> entityManager.find(EntireSubject_2021.class, id);
            case 2022 -> entityManager.find(EntireSubject_2022.class, id);
            default -> null;
        };
        return subject!=null ? subject : saveCommonSubjectData(year,id,name);
    }
}
