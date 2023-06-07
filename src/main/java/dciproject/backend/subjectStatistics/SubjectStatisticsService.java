package dciproject.backend.subjectStatistics;


import dciproject.backend.classRegistration.ClassRegistration;
import dciproject.backend.classRegistration.ClassRegistrationListStrategy;
import dciproject.backend.classRegistration.ClassRegistrationService;
import dciproject.backend.classRegistration.classRegistration_2020.ClassRegistration_2020;
import dciproject.backend.classRegistration.classRegistration_2021.ClassRegistration_2021;
import dciproject.backend.classRegistration.classRegistration_2022.ClassRegistration_2022;
import dciproject.backend.entireSubjects.EntireSubject;
import dciproject.backend.entireSubjects.EntireSubjectListStrategy;
import dciproject.backend.entireSubjects.EntireSubjectService;
import jakarta.persistence.EntityManager;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubjectStatisticsService {
    private final SubjectStatisticsRepository subjectStatisticsRepository;
    private final ClassRegistrationService classRegistrationService;
    private final ClassRegistrationListStrategy classRegistrationListStrategy;
    private final EntireSubjectListStrategy entireSubjectListStrategy;

    private final EntireSubjectService entireSubjectService;
    private final EntityManager entityManager;


    public SubjectStatisticsService(SubjectStatisticsRepository subjectStatisticsRepository, ClassRegistrationService classRegistrationService, EntityManager entityManager, ClassRegistrationListStrategy classRegistrationListStrategy, EntireSubjectListStrategy entireSubjectListStrategy, EntireSubjectService entireSubjectService) {
        this.subjectStatisticsRepository = subjectStatisticsRepository;
        this.classRegistrationService = classRegistrationService;
        this.entityManager = entityManager;
        this.classRegistrationListStrategy = classRegistrationListStrategy;
        this.entireSubjectListStrategy = entireSubjectListStrategy;
        this.entireSubjectService = entireSubjectService;
    }

    public SubjectStatistics save(SubjectStatistics entity) {
        return subjectStatisticsRepository.save(entity);
    }

    @SuppressWarnings("unchecked")
    private void initClassRegistrationListStrategy() {
        classRegistrationListStrategy.addStrategy(
                (List<ClassRegistration>) classRegistrationService.findAllByYear(2020), 2020);
        classRegistrationListStrategy.addStrategy(
                (List<ClassRegistration>) classRegistrationService.findAllByYear(2021), 2021);
        classRegistrationListStrategy.addStrategy(
                (List<ClassRegistration>) classRegistrationService.findAllByYear(2022), 2022);
    }


    private void initEntireSubjectListStrategy() {
        entireSubjectListStrategy.addStrategy(entireSubjectService.findAllByYear(2020), 2020);
        entireSubjectListStrategy.addStrategy(entireSubjectService.findAllByYear(2021), 2021);
        entireSubjectListStrategy.addStrategy(entireSubjectService.findAllByYear(2022), 2022);
    }


    public void databaseBuild() {
        initEntireSubjectListStrategy();
        initClassRegistrationListStrategy();
        int year = 2020;

        entireSubjectListStrategy.switchStrategy(year);
        classRegistrationListStrategy.switchStrategy(year); // year 정보에 대해 strategy 선택

        List<EntireSubject> entireSubjectList = entireSubjectListStrategy.getStrategy();
        List<ClassRegistration> classRegistrations = classRegistrationListStrategy.getStrategy();

        entireSubjectList.forEach(subject -> { // 모든 수강 과목에 대해서 진행
            String subjectID = subject.getSubjectID();
            int correctedNum=0;
            double competitionRate=0; // 경쟁률
            String deadline=null; // 마감시간

            List<ClassRegistration> correctedRegistrationList = classRegistrations.stream().filter(registration -> registration.equals(subjectID)).
                    filter(registration -> isCorrectedDate(subjectID, registration.getTLSN_APLY_DT())).toList();
            // subjectID 면서, correctedDate인 List

            for(ClassRegistration list : correctedRegistrationList) correctedNum+=list.getRegistrationNumber();
            // 정정인원 구하기 완료

            SubjectStatistics newSubjectStatistics=
                    SubjectStatistics.builder().subjectID(subjectID).
                            deadline(deadline).
                            comp_rate(competitionRate).
                            correctedNum(correctedNum).build();

            this.save(newSubjectStatistics); // 통계정보 엔티티 저장
        });
    }


    public boolean isCorrectedDate(String subjectId,String date) {
        String[] args = subjectId.split("-");
        // 2022-1-1977-2011-03
        int year = Integer.parseInt(args[0]);
        int shmt= Integer.parseInt(args[1]);

        String startDate=switch (year){
            case 2020 -> shmt==1 ?
                    CorrectedPeriod.CORRECT_DATE_START_2020_01.getDate() : CorrectedPeriod.CORRECT_DATE_START_2020_02.getDate();
            case 2021 -> shmt==1 ?
                    CorrectedPeriod.CORRECT_DATE_START_2021_01.getDate() : CorrectedPeriod.CORRECT_DATE_START_2021_02.getDate();
            case 2022 -> shmt==1 ?
                    CorrectedPeriod.CORRECT_DATE_START_2022_01.getDate() : CorrectedPeriod.CORRECT_DATE_START_2022_02.getDate();
            default -> String.valueOf(Long.MAX_VALUE);
        };
        String endDate=switch (year){
            case 2020 -> shmt==1 ?
                    CorrectedPeriod.CORRECT_DATE_END_2020_01.getDate() : CorrectedPeriod.CORRECT_DATE_END_2020_02.getDate();
            case 2021 -> shmt==1 ?
                    CorrectedPeriod.CORRECT_DATE_END_2021_01.getDate() : CorrectedPeriod.CORRECT_DATE_END_2021_02.getDate();
            case 2022 -> shmt==1 ?
                    CorrectedPeriod.CORRECT_DATE_END_2022_01.getDate() : CorrectedPeriod.CORRECT_DATE_END_2022_02.getDate();
            default -> String.valueOf(0);
        };

        // 정정기간의 인원을 산출하려면 리스트에서 정정기간 이후의 값을 가진 엔티티를 가져와야함

        return Long.parseLong(startDate)<=Long.parseLong(date) &&
                Long.parseLong(endDate)>=Long.parseLong(date);
    }

    public double calculateCompetitionRate(EntireSubject entireSubject, ClassRegistration classRegistration) {

        // 경쟁률 산출 로직은 아직 정해지지 않았지만..

        return 0;
    }

    public String calculateDeadLine(EntireSubject entireSubject, ClassRegistration classRegistration) {

        // 마감 산출 로직도..

        return null;
    }
}
